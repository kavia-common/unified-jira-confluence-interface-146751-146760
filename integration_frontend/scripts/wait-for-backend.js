#!/usr/bin/env node
/**
 * Wait for integration_backend readiness before starting the frontend.
 * - Uses NEXT_PUBLIC_API_BASE_URL or API_URL as explicit backend base URL if provided.
 * - Defaults to http://integration_backend:8000 when running in container network.
 * - Probes the /ready endpoint which returns { ready: true } when the backend is ready.
 */
const http = require('http');
const https = require('https');
const { URL } = require('url');

const ENV_API =
  process.env.NEXT_PUBLIC_API_BASE_URL ||
  process.env.API_URL ||
  'http://integration_backend:8000';

const MAX_WAIT_MS = parseInt(process.env.BACKEND_WAIT_TIMEOUT_MS || '90000', 10); // 90s default
const INTERVAL_MS = parseInt(process.env.BACKEND_WAIT_INTERVAL_MS || '2000', 10); // 2s default

function log(msg) {
  // Minimal, CI-friendly logging
  process.stdout.write(`[wait-for-backend] ${msg}\n`);
}

function probeReady(urlStr) {
  return new Promise((resolve) => {
    let target;
    try {
      const u = new URL(urlStr);
      // Ensure it points to /ready
      u.pathname = '/ready';
      target = u.toString();
    } catch (e) {
      // Fallback if URL constructor fails
      const normalized = urlStr.endsWith('/') ? urlStr.slice(0, -1) : urlStr;
      target = `${normalized}/ready`;
    }

    const isHttps = target.startsWith('https://');
    const lib = isHttps ? https : http;

    const req = lib.get(target, (res) => {
      let body = '';
      res.on('data', (chunk) => (body += chunk));
      res.on('end', () => {
        if (res.statusCode && res.statusCode >= 200 && res.statusCode < 300) {
          try {
            const data = JSON.parse(body || '{}');
            if (data && data.ready === true) {
              return resolve({ ok: true });
            }
          } catch (e) {
            // ignore JSON parse error
          }
        }
        resolve({ ok: false, status: res.statusCode, body });
      });
    });

    req.on('error', (err) => resolve({ ok: false, error: err.message }));
    req.setTimeout(5000, () => {
      req.abort();
      resolve({ ok: false, error: 'timeout' });
    });
  });
}

async function main() {
  log(`Using backend base URL: ${ENV_API}`);
  const start = Date.now();
  while (Date.now() - start < MAX_WAIT_MS) {
    const result = await probeReady(ENV_API);
    if (result.ok) {
      log('Backend is ready.');
      process.exit(0);
    }
    log(
      `Backend not ready yet${
        result.status ? ` (status ${result.status})` : result.error ? ` (${result.error})` : ''
      }. Retrying in ${INTERVAL_MS}ms...`
    );
    await new Promise((r) => setTimeout(r, INTERVAL_MS));
  }
  log(
    `Timed out after ${Math.round(MAX_WAIT_MS / 1000)}s waiting for backend at ${ENV_API}. Ensure it is reachable and exposes /ready.`
  );
  process.exit(1);
}

main().catch((err) => {
  log(`Unexpected error: ${err?.message || err}`);
  process.exit(1);
});
