'use client';

import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import InputBox from '@/components/input/InputBox';
import BasicButton from '@/components/button/BasicButton';
import PasswordInputBox from '@/components/input/PasswordInputBox';
import { loginSchemaValidate } from '@/validators/loign/loginSchema';

const LoginForm: React.FC = () => {
  const { control, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(loginSchemaValidate),
  });

  const onSubmit = (data: any) => {
    console.log('Form Data:', data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} style={{ width: '100%' }}>
      <Controller
        name="email"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <InputBox
            {...field}
            label="Email"
            error={!!errors.email}
            helperText={errors.email ? errors.email.message : ''}
            sx={{
              marginBottom: '16px',  // Space between inputs
            }}
          />
        )}
      />

      <Controller
        name="password"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <PasswordInputBox
            {...field}
            label="Password"
            type="password"
            error={!!errors.password}
            helperText={errors.password ? errors.password.message : ''}
            sx={{
              marginBottom: '16px',  // Space between inputs
            }}
          />
        )}
      />

      <BasicButton
        size="large"
        type="submit"
        label="Primary Button"
      >
        Click Me
      </BasicButton>
    </form>
  );
};

export default LoginForm;
