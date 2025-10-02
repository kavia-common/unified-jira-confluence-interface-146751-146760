export const themeConstants = {
  colors: {
    primary: '#2563EB',
    secondary: '#F59E0B',
    success: '#F59E0B',
    error: '#EF4444',
    background: '#f9fafb',
    surface: '#ffffff',
    text: '#111827',
  },
  gradients: {
    primary: 'from-blue-500/10 to-gray-50',
  },
  shadows: {
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
  },
  rounded: {
    sm: '0.375rem',
    md: '0.5rem',
    lg: '1rem',
  },
  transitions: {
    default: '150ms cubic-bezier(0.4, 0, 0.2, 1)',
    smooth: '300ms cubic-bezier(0.4, 0, 0.2, 1)',
  },
} as const;
