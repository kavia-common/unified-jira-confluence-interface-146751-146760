'use client';

import { useState } from 'react';
import { themeConstants } from '@/styles/theme';
import { PlusCircleIcon, ArrowRightIcon, CalendarIcon, UserIcon } from '@heroicons/react/24/outline';

interface ConfluencePage {
  id: string;
  title: string;
  space: string;
  lastUpdated: string;
  updatedBy: string;
}

// Placeholder data - will be replaced with real API integration
const mockPages: ConfluencePage[] = [
  {
    id: 'PAGE-1',
    title: 'Project Requirements',
    space: 'Project Documentation',
    lastUpdated: '2024-01-15',
    updatedBy: 'John Doe'
  },
  {
    id: 'PAGE-2',
    title: 'Technical Architecture',
    space: 'Engineering',
    lastUpdated: '2024-01-14',
    updatedBy: 'Jane Smith'
  }
];

export default function ConfluencePanel() {
  const [pages] = useState<ConfluencePage[]>(mockPages);

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-gray-800">Confluence Pages</h2>
        <button 
          className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors flex items-center gap-2"
          style={{ backgroundColor: themeConstants.colors.primary }}
        >
          <PlusCircleIcon className="w-5 h-5" />
          New Page
        </button>
      </div>
      
      <div className="space-y-4">
        {pages.map((page) => (
          <div 
            key={page.id}
            className="border border-gray-200 rounded-md p-4 hover:bg-gray-50 transition-colors"
          >
            <div className="mb-2">
              <h3 className="text-base font-medium text-gray-900">{page.title}</h3>
              <span className="text-sm text-gray-500">Space: {page.space}</span>
            </div>
            
            <div className="flex items-center text-sm text-gray-500 mt-2 gap-4">
              <span className="flex items-center gap-1">
                <CalendarIcon className="w-4 h-4" />
                Last updated: {page.lastUpdated}
              </span>
              <span className="flex items-center gap-1">
                <UserIcon className="w-4 h-4" />
                By: {page.updatedBy}
              </span>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-4 text-center">
        <button 
          className="text-primary hover:underline text-sm font-medium inline-flex items-center gap-1"
          style={{ color: themeConstants.colors.primary }}
        >
          View All Pages
          <ArrowRightIcon className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
