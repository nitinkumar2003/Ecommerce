import React from 'react';
import { TextField, TextFieldProps } from '@mui/material';

interface InputBoxProps  {
  label: string;
  value: string | number;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  error?: boolean;
  helperText?: string;
  variant?: 'standard' | 'outlined' | 'filled';
  fullWidth?: boolean;
  type?: string;
  disabled?: boolean;
  required?: boolean;
  multiline?: boolean;
  rows?: number;
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
  sx?: object;
}

const InputBox: React.FC<InputBoxProps> = ({
  label,
  value,
  onChange,
  error = false,
  helperText = '',
  variant = 'standard',
  fullWidth = true,
  type = 'text', // Default type is 'text', but can be customized
  disabled = false,
  required = false,
  multiline = false,
  rows = 4,
  inputProps = {},
  sx = {}, // Allows styling via the sx prop
  ...rest
}) => {
  return (
    <TextField
      {...rest}
      label={label}
      value={value}
      onChange={onChange}
      error={error}
      helperText={helperText}
      variant={variant}
      fullWidth={fullWidth}
      type={type}
      disabled={disabled}
      required={required}
      multiline={multiline}
      rows={multiline ? rows : 1}
      inputProps={inputProps}
      sx={sx}
    />
  );
};

export default InputBox;
