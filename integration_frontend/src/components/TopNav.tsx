'use client';

// PUBLIC_INTERFACE
export default function TopNav() {
  return (
    <header className="fixed top-0 right-0 h-16 bg-surface shadow-sm z-30 flex items-center justify-between px-6 ml-64 w-[calc(100%-16rem)]">
      <div className="flex items-center space-x-4">
        <h1 className="text-xl font-semibold text-gray-900">
          JIRA & Confluence Integration
        </h1>
      </div>
      <div className="flex items-center space-x-4">
        <button 
          className="btn btn-secondary"
          aria-label="Synchronize data"
        >
          Sync Now
        </button>
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary">
            👤
          </div>
          <span className="text-sm font-medium">User</span>
        </div>
      </div>
    </header>
  );
}
