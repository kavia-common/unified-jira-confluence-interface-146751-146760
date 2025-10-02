'use client';

import { useState } from 'react';
import Link from 'next/link';

// PUBLIC_INTERFACE
export default function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const navItems = [
    { name: 'Dashboard', href: '/', icon: '📊' },
    { name: 'JIRA Issues', href: '/jira', icon: '🎯' },
    { name: 'Confluence', href: '/confluence', icon: '📝' },
    { name: 'Settings', href: '/settings', icon: '⚙️' },
  ];

  return (
    <aside className={`fixed left-0 top-0 h-full bg-surface shadow-lg transition-all duration-300 ${
      isCollapsed ? 'w-16' : 'w-64'
    } z-40`}>
      <div className="flex h-16 items-center justify-between px-4 border-b border-gray-200">
        {!isCollapsed && (
          <span className="text-lg font-semibold text-primary">Integration Hub</span>
        )}
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="p-2 rounded-md hover:bg-gray-100"
          aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
        >
          {isCollapsed ? '→' : '←'}
        </button>
      </div>
      <nav className="mt-4">
        <ul className="space-y-2">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className={`flex items-center px-4 py-2 text-gray-700 hover:bg-primary/10 hover:text-primary ${
                  isCollapsed ? 'justify-center' : 'space-x-3'
                }`}
              >
                <span className="text-xl">{item.icon}</span>
                {!isCollapsed && <span>{item.name}</span>}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
