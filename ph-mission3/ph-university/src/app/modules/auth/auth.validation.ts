import { z } from 'zod';

const loginValidatioinSchema = z.object({
  body: z.object({
    id: z.string({ required_error: 'ID is required' }),
    password: z.string({ required_error: 'Password is required' }),
  }),
});

const changePasswordValidatioinSchema = z.object({
  body: z.object({
    oldPassword: z.string({ required_error: 'Old password is required' }),
    newPassword: z.string({ required_error: 'New Password is required' }),
  }),
});

const refreshTokenValidationSchema = z.object({
  cookies: z.object({
    refreshToken: z.string({ required_error: 'Refresh token is required' }),
  }),
});

const forgetPasswordValidationSchema = z.object({
  body: z.object({
    id: z.string({ required_error: 'user ID is required' }),
  }),
});

export const AuthValidations = {
  loginValidatioinSchema,
  changePasswordValidatioinSchema,
  refreshTokenValidationSchema,
  forgetPasswordValidationSchema,
};
