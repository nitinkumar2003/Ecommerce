import React from 'react';
import Button, { ButtonProps } from '@mui/material/Button';
import CustomBox from '../box/CustomBox';
// Define the types for the props
interface BasicButtonProps {
  children: React.ReactNode;  
  variant?: ButtonProps['variant']; 
  color?: ButtonProps['color'];     
  size?: ButtonProps['size'];     
  onClick?: React.MouseEventHandler<HTMLButtonElement>; 
  label?: string;                   
  [key: string]: any;               
}

const BasicButton: React.FC<BasicButtonProps> = ({
  children,
  variant = 'contained',
  color = 'primary',
  size = 'medium',
  onClick,
  label,
  ...props
}) => {
  
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    console.log('Button clicked', {
      label: label || children,     
      event,                        
      timestamp: new Date(),        
    });

    // Call the passed onClick function if provided
    if (onClick) {
      onClick(event);
    }
  };

  return (
    <CustomBox  sx={{
      display: 'flex',
      justifyContent: 'center', 
      alignItems: 'center',      
      textAlign: 'center',   
    }}>
    <Button
      variant={variant}
      color={color}
      size={size}
      onClick={handleClick}
      {...props}  
    >
      {children}
    </Button>
    </CustomBox>
  );
};

export default BasicButton;
