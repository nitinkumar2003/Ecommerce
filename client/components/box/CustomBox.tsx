import React from 'react';
import { Box, BoxProps } from '@mui/material';

// Define the types for the props, extending MUI's BoxProps
interface CustomBoxProps extends BoxProps {
  children: React.ReactNode;
  backgroundColor?: string; // Optional, background color for the box
  padding?: number | string; // Optional, padding inside the box
  borderRadius?: number;     // Optional, rounded corners
  boxShadow?: number;        // Optional, shadow around the box
  flexDirection?: 'row' | 'column'; // Optional, flex direction
  alignItems?: 'center' | 'flex-start' | 'flex-end'; // Optional, alignment of items
}

const CustomBox: React.FC<CustomBoxProps> = ({
  children,
  sx,
  ...props
}) => {
  return (
    <Box
      sx={{...sx,  }}
      {...props}
    >
      {children}
    </Box>
  );
};

export default CustomBox;
