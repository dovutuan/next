import {
  ForgotPasswordRequest,
  LoginRequest,
  ResetPasswordRequest,
} from '@/types/Request.type';
import { baseQuery } from './api';

export const login = (data: LoginRequest) => {
  return baseQuery({
    url: '/auth/login',
    method: 'POST',
    data,
  });
};

export const sendEmailForgotPassword = (data: ForgotPasswordRequest) => {
  return baseQuery({
    url: '/auth/send-forgot-email',
    method: 'POST',
    data,
  });
};

export const resetPassword = (data: ResetPasswordRequest) => {
  return baseQuery({
    url: '/auth/reset-password',
    method: 'POST',
    data,
  });
};

export const logout = () => {
  return baseQuery({
    url: '/auth/logout',
    method: 'POST',
  });
};
