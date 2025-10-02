/**
 * Next.js configuration for integration_frontend.
 * Exposes NEXT_PUBLIC_API_BASE_URL to the client and sets a sensible default
 * to the Docker service name http://integration_backend:8000.
 */
const API_BASE =
  process.env.NEXT_PUBLIC_API_BASE_URL ||
  process.env.API_URL ||
  'http://integration_backend:8000';

const nextConfig = {
  reactStrictMode: true,
  // Public runtime config (still readable on client)
  publicRuntimeConfig: {
    API_BASE_URL: API_BASE
  },
  // For edge cases where env is required at build time
  env: {
    NEXT_PUBLIC_API_BASE_URL: API_BASE
  }
};

module.exports = nextConfig;
