// styles/theme/themeUtils.ts
import { TypographyOptions } from '@mui/material/styles/createTypography';

// Define the colors, spacing, breakpoints, and typography as before
export const colors = {
  primary: {
    main: '#1976d2', // Blue
    light: '#63a4ff',
    dark: '#004ba0',
    contrastText: '#fff',
  },
  secondary: {
    main: '#9c27b0', // Purple
    light: '#d05ce3',
    dark: '#6a0080',
    contrastText: '#fff',
  },
  background: {
    default: '#f5f5f5',
    paper: '#ffffff',
  },
  text: {
    primary: '#212121', // Dark text for readability
    secondary: '#757575', // Light grey text
    disabled: '#bdbdbd',
    // hint is removed due to TypeScript type mismatch
  },
  error: {
    main: '#f44336', // Red
    light: '#e57373',
    dark: '#d32f2f',
    contrastText: '#fff',
  },
  success: {
    main: '#4caf50',
    light: '#81c784',
    dark: '#388e3c',
    contrastText: '#fff',
  },
  warning: {
    main: '#ff9800',
    light: '#ffb74d',
    dark: '#f57c00',
    contrastText: '#fff',
  },
};

// Spacing function (default 8px base)
export const spacing = (factor: number) => `${factor * 8}px`;

// Breakpoints for responsive design
export const breakpoints = {
  xs: 0,    // Small devices
  sm: 600,  // Tablets, small desktops
  md: 960,  // Medium desktops
  lg: 1280, // Large desktops
  xl: 1920, // Extra large screens
};

// MUI Typography Options type
export const typography: TypographyOptions = {
  fontFamily: "'Roboto', sans-serif",
  h1: { fontSize: '3rem', fontWeight: 600 },
  h2: { fontSize: '2.5rem', fontWeight: 600 },
  h3: { fontSize: '2rem', fontWeight: 500 },
  h4: { fontSize: '1.75rem', fontWeight: 500 },
  h5: { fontSize: '1.5rem', fontWeight: 400 },
  h6: { fontSize: '1.25rem', fontWeight: 400 },
  body1: { fontSize: '1rem', fontWeight: 400 },
  body2: { fontSize: '0.875rem', fontWeight: 400 },
  subtitle1: { fontSize: '1rem', fontWeight: 400 },
  subtitle2: { fontSize: '0.875rem', fontWeight: 400 },
  button: { fontSize: '0.875rem', fontWeight: 600, textTransform: 'uppercase' },
  caption: { fontSize: '0.75rem', fontWeight: 400 },
  overline: { fontSize: '0.75rem', fontWeight: 400, textTransform: 'uppercase' },
};

// MUI Shadows as an array of strings (25 items)
export const shadows: any = [
  'none',
  '0px 2px 4px rgba(0, 0, 0, 0.1)',
  '0px 3px 6px rgba(0, 0, 0, 0.1)',
  '0px 10px 15px rgba(0, 0, 0, 0.1)',
  '0px 14px 28px rgba(0, 0, 0, 0.2)',
  '0px 20px 40px rgba(0, 0, 0, 0.25)',
  '0px 24px 48px rgba(0, 0, 0, 0.3)',
  '0px 30px 60px rgba(0, 0, 0, 0.35)',
  '0px 35px 70px rgba(0, 0, 0, 0.4)',
  '0px 40px 80px rgba(0, 0, 0, 0.45)',
  '0px 45px 90px rgba(0, 0, 0, 0.5)',
  '0px 50px 100px rgba(0, 0, 0, 0.55)',
  '0px 55px 110px rgba(0, 0, 0, 0.6)',
  '0px 60px 120px rgba(0, 0, 0, 0.65)',
  '0px 65px 130px rgba(0, 0, 0, 0.7)',
  '0px 70px 140px rgba(0, 0, 0, 0.75)',
  '0px 75px 150px rgba(0, 0, 0, 0.8)',
  '0px 80px 160px rgba(0, 0, 0, 0.85)',
  '0px 85px 170px rgba(0, 0, 0, 0.9)',
  '0px 90px 180px rgba(0, 0, 0, 0.95)',
  '0px 95px 190px rgba(0, 0, 0, 1)',
  '0px 100px 200px rgba(0, 0, 0, 1)',
  '0px 105px 210px rgba(0, 0, 0, 1)',
  '0px 110px 220px rgba(0, 0, 0, 1)',
  '0px 115px 230px rgba(0, 0, 0, 1)',
  '0px 120px 240px rgba(0, 0, 0, 1)',
];
