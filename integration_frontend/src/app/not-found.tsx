import React from "react";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-background flex items-center justify-center p-4">
      <section className="card text-center" role="alert" aria-live="assertive">
        <h1 className="text-4xl font-light mb-2 text-error">404 – Page Not Found</h1>
        <p className="text-gray-600">
          The page you&apos;re looking for doesn&apos;t exist.
        </p>
      </section>
    </main>
  );
}
