import { useEffect, useState } from 'react';
import { getBackendBaseUrl } from '../src/lib/backendUrl';

type ReadyResponse = {
  ready?: boolean;
  reason?: string | null;
  dependencies_ok?: boolean;
};

export default function Home() {
  const [status, setStatus] = useState<'checking' | 'ready' | 'not-ready' | 'error'>('checking');
  const [message, setMessage] = useState<string>('');

  useEffect(() => {
    const controller = new AbortController();
    const base = getBackendBaseUrl();
    fetch(`${base}/ready`, { signal: controller.signal })
      .then(async (res) => {
        const data: ReadyResponse = await res.json().catch(() => ({} as ReadyResponse));
        if (res.ok && data?.ready) {
          setStatus('ready');
          setMessage('Backend is ready');
        } else {
          setStatus('not-ready');
          setMessage(`Backend responded but not ready${data?.reason ? `: ${data.reason}` : ''}`);
        }
      })
      .catch((err) => {
        setStatus('error');
        setMessage(`Error contacting backend: ${err?.message || String(err)}`);
      });

    return () => controller.abort();
  }, []);

  return (
    <main style={{ fontFamily: 'sans-serif', padding: 24 }}>
      <h1>Unified JIRA-Confluence Interface</h1>
      <p>Backend base URL: {getBackendBaseUrl()}</p>
      <p>Status: {status}</p>
      <p>{message}</p>
    </main>
  );
}
