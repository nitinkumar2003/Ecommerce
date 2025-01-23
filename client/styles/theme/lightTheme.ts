// styles/theme/lightTheme.ts
import { createTheme } from '@mui/material/styles';
import { colors, breakpoints, typography, spacing, shadows } from './themeUtils';

const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: colors.primary,
    secondary: colors.secondary,
    background: {
      default: colors.background.default,
      paper: colors.background.paper,
    },
    text: {
      primary: colors.text.primary,
      secondary: colors.text.secondary,
      disabled: colors.text.disabled,
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
    borderRadius: 8, // Rounded corners across components
  },
  shadows, // Using the shadows array from themeUtils.ts
  components: {
    MuiButton: {
      defaultProps: {
        disableRipple: true, // Remove button ripple effect
      },
      styleOverrides: {
        root: {
          textTransform: 'none', // Prevent uppercase by default
          padding: '8px 16px',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: '12px', // Rounded card corners
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

export default lightTheme;
