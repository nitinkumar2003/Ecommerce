'use client';

import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import InputBox from '@/components/input/InputBox';
import { Divider } from '@mui/material';

const LoginForm: React.FC = () => {
  const { control, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data: any) => {
    console.log('Form Data:', data);
  };

  console.log("errors", errors);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="Name"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <InputBox
            {...field}
            label="Name"
            error={!!errors.Name}
            helperText={errors.Name ? 'Name is required' : ''}
            sx={{ marginBottom: '2px' }}  // Add space between input boxes
          />
        )}
      />
      
      <Controller
        name="Email"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <InputBox
            {...field}
            label="Email"
            error={!!errors.Email}
            helperText={errors.Email ? 'Email is required' : ''}
            sx={{ marginBottom: '2px' }}  // Add space between input boxes
          />
        )}
      />
      
      <button type="submit">Submit</button>
    </form>
  );
};

export default LoginForm;
