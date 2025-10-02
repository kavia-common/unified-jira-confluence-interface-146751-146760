# integration_frontend

This Next.js frontend depends on the `integration_backend` FastAPI service.

Readiness/Dependency check:
- Before starting, a script (`scripts/wait-for-backend.js`) probes the backend `/ready` endpoint.
- The backend exposes:
  - `GET /ready` -> `{ ready: true }` when ready
  - `GET /health` for basic liveness

Service discovery:
- By default, the frontend assumes the backend is reachable at `http://integration_backend:8000` (Docker network service name).
- You can override the base URL using environment variables:
  - `NEXT_PUBLIC_API_BASE_URL` (preferred)
  - `API_URL` (fallback)

Environment variables:
- `NEXT_PUBLIC_API_BASE_URL` – Full base URL of the backend (e.g., `https://api.example.com`).
- `BACKEND_WAIT_TIMEOUT_MS` – Optional, total wait time for backend readiness check (default 90000).
- `BACKEND_WAIT_INTERVAL_MS` – Optional, poll interval (default 2000).

Local development:
- Start backend on `http://localhost:8000` and set `NEXT_PUBLIC_API_BASE_URL=http://localhost:8000`.
- Then run `npm run dev`.

Production/preview notes:
- Ensure the container orchestrator defines the correct service name or sets `NEXT_PUBLIC_API_BASE_URL`.
- The readiness script will fail the start if the backend is unreachable within the timeout window.
