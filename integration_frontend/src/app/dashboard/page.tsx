import JiraPanel from '@/components/dashboard/JiraPanel';
import ConfluencePanel from '@/components/dashboard/ConfluencePanel';
import { themeConstants } from '@/styles/theme';
import {
  PlusCircleIcon,
  DocumentPlusIcon,
  MagnifyingGlassIcon,
  BookOpenIcon
} from '@heroicons/react/24/outline';

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gray-50" style={{ backgroundColor: themeConstants.colors.background }}>
      <div className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
          <p className="mt-1 text-sm text-gray-500">
            Welcome to your unified JIRA and Confluence workspace
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* JIRA Panel */}
          <div className="col-span-1">
            <JiraPanel />
          </div>

          {/* Confluence Panel */}
          <div className="col-span-1">
            <ConfluencePanel />
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mt-8">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Quick Actions</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <button
              className="p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow text-left"
            >
              <div className="font-medium text-gray-900 flex items-center gap-2">
                <PlusCircleIcon className="w-5 h-5 text-primary" style={{ color: themeConstants.colors.primary }} />
                Create Issue
              </div>
              <p className="text-sm text-gray-500 mt-1">Create a new JIRA issue</p>
            </button>
            <button
              className="p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow text-left"
            >
              <div className="font-medium text-gray-900 flex items-center gap-2">
                <DocumentPlusIcon className="w-5 h-5 text-primary" style={{ color: themeConstants.colors.primary }} />
                Create Page
              </div>
              <p className="text-sm text-gray-500 mt-1">Create a new Confluence page</p>
            </button>
            <button
              className="p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow text-left"
            >
              <div className="font-medium text-gray-900 flex items-center gap-2">
                <MagnifyingGlassIcon className="w-5 h-5 text-primary" style={{ color: themeConstants.colors.primary }} />
                Search Issues
              </div>
              <p className="text-sm text-gray-500 mt-1">Search through JIRA issues</p>
            </button>
            <button
              className="p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow text-left"
            >
              <div className="font-medium text-gray-900 flex items-center gap-2">
                <BookOpenIcon className="w-5 h-5 text-primary" style={{ color: themeConstants.colors.primary }} />
                Search Pages
              </div>
              <p className="text-sm text-gray-500 mt-1">Search Confluence pages</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
