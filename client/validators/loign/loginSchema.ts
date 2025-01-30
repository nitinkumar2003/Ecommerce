import { object, string } from 'yup';

// Create the validation schema
export const loginSchemaValidate = object({
  email: string()
    .email('Invalid email format') // Valid email format
    .required('Email is required'), // Email is required

  password: string()
    .min(6, 'Password must be at least 6 characters') // Minimum 6 characters
    .matches(/[a-z]/, 'Password must contain at least one lowercase letter') // At least one lowercase letter
    .matches(/[A-Z]/, 'Password must contain at least one uppercase letter') // At least one uppercase letter
    .matches(/\d/, 'Password must contain at least one number') // At least one number
    .matches(/[@$!%*?&]/, 'Password must contain at least one special character') // At least one special character
    .required('Password is required'), // Password is required
});
