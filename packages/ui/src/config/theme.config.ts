export const themeConfig = {
  typography: {
    fontFamily: {
      sans: ['Inter', 'system-ui', 'sans-serif'],
      mono: ['JetBrains Mono', 'monospace']
    },
    scale: {
      base: '16px',
      ratio: 1.25
    }
  },
  colors: {
    primary: {
      50: '#f0f9ff',
      100: '#e0f2fe',
      500: '#0ea5e9',
      600: '#0284c7',
      700: '#0369a1'
    },
    neutral: {
      50: '#f8fafc',
      100: '#f1f5f9',
      500: '#64748b',
      900: '#0f172a'
    }
  },
  spacing: {
    unit: 4,
    scale: [
      0,
      4,
      8,
      12,
      16,
      24,
      32,
      48,
      64,
      96
    ]
  },
  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px'
  }
};

export default themeConfig;