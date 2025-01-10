export interface LoginRequest {
  email: string;
  password: string;
  secure: boolean;
}

export interface ForgotPasswordRequest {
  email: string;
}

export interface ResetPasswordRequest {
  password: string;
  password_confirmation: string;
  otp?: string | null;
}
