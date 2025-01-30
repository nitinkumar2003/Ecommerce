import React, { useState } from 'react';
import { TextField, IconButton, InputAdornment } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';

interface PasswordInputBoxProps {
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

const PasswordInputBox: React.FC<PasswordInputBoxProps> = ({
  label,
  value,
  onChange,
  error = false,
  helperText = '',
  variant = 'standard',
  fullWidth = true,
  type = 'text',
  disabled = false,
  required = false,
  multiline = false,
  rows = 4,
  inputProps = {},
  sx = {},
  ...rest
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const inputType = type === 'password' && !showPassword ? 'password' : 'text';

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
      type={inputType}
      disabled={disabled}
      required={required}
      multiline={multiline}
      rows={multiline ? rows : 1}
      inputProps={inputProps}
      sx={{
        ...sx,
        '& .MuiInputLabel-root': {
          fontSize: '1.25rem',
          lineHeight: '2rem',
        },
      }}
      InputProps={{
        endAdornment: type === 'password' && (
          <InputAdornment position="end">
            <IconButton
              onClick={handleTogglePasswordVisibility}
              edge="end"
              aria-label="toggle password visibility"
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
};

export default PasswordInputBox;
