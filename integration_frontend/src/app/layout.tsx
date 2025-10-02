import type { Metadata } from "next";
import "./globals.css";
import Sidebar from "../components/Sidebar";
import TopNav from "../components/TopNav";

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
        <Sidebar />
        <div className="ml-64">
          <TopNav />
          <main className="pt-24 px-6">
            <div className="max-w-7xl mx-auto">
              {children}
            </div>
          </main>
        </div>
      </body>
    </html>
  );
}
