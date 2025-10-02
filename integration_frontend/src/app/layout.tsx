import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "JIRA Confluence Integration",
  description: "Unified interface for JIRA and Confluence integration",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning className="min-h-screen bg-background text-text">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {children}
        </div>
      </body>
    </html>
  );
}
