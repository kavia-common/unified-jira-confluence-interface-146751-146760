'use client';

import { useState } from 'react';
import { themeConstants } from '@/styles/theme';
import { PlusCircleIcon, ArrowRightIcon, TagIcon, UserIcon } from '@heroicons/react/24/outline';

interface JiraIssue {
  id: string;
  title: string;
  status: string;
  priority: string;
  assignee: string;
}

// Placeholder data - will be replaced with real API integration
const mockIssues: JiraIssue[] = [
  {
    id: 'PROJ-1',
    title: 'Implement user authentication',
    status: 'In Progress',
    priority: 'High',
    assignee: 'John Doe'
  },
  {
    id: 'PROJ-2',
    title: 'Design dashboard layout',
    status: 'Done',
    priority: 'Medium',
    assignee: 'Jane Smith'
  }
];

export default function JiraPanel() {
  const [issues] = useState<JiraIssue[]>(mockIssues);

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-gray-800">JIRA Issues</h2>
        <button 
          className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors flex items-center gap-2"
          style={{ backgroundColor: themeConstants.colors.primary }}
        >
          <PlusCircleIcon className="w-5 h-5" />
          New Issue
        </button>
      </div>
      
      <div className="space-y-4">
        {issues.map((issue) => (
          <div 
            key={issue.id}
            className="border border-gray-200 rounded-md p-4 hover:bg-gray-50 transition-colors"
          >
            <div className="flex justify-between items-start mb-2">
              <div>
                <span className="text-sm font-medium text-gray-500">{issue.id}</span>
                <h3 className="text-base font-medium text-gray-900">{issue.title}</h3>
              </div>
              <span 
                className={`px-2 py-1 text-xs font-medium rounded-full ${
                  issue.status === 'Done' ? 'bg-green-100 text-green-800' : 
                  'bg-blue-100 text-blue-800'
                }`}
              >
                {issue.status}
              </span>
            </div>
            
            <div className="flex items-center text-sm text-gray-500 mt-2 gap-4">
              <span className="flex items-center gap-1">
                <TagIcon className="w-4 h-4" />
                Priority: {issue.priority}
              </span>
              <span className="flex items-center gap-1">
                <UserIcon className="w-4 h-4" />
                Assignee: {issue.assignee}
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
          View All Issues
          <ArrowRightIcon className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
