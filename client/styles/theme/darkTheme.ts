// styles/theme/darkTheme.ts
import { createTheme } from '@mui/material/styles';
import { colors, breakpoints, typography, spacing, shadows } from './themeUtils';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: colors.primary,
    secondary: colors.secondary,
    background: {
      default: '#121212', // Dark background
      paper: '#1e1e1e',
    },
    text: {
      primary: '#ffffff',
      secondary: '#b0b0b0',
      disabled: '#888888',
      // hint property removed
    },
    error: colors.error,
    success: colors.success,
    warning: colors.warning,
  },
  typography,
  spacing,
  breakpoints: {
    values: breakpoints,
  },
  shape: {
    borderRadius: 8,
  },
  shadows, // Using the shadows array from themeUtils.ts
  components: {
    MuiButton: {
      defaultProps: {
        disableRipple: true,
      },
      styleOverrides: {
        root: {
          textTransform: 'none',
          padding: '8px 16px',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: '12px',
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          fontFamily: typography.fontFamily,
        },
      },
    },
  },
});

export default darkTheme;
