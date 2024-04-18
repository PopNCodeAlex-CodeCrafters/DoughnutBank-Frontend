export type LoginForm = {
  email: string;
  password: string;
};

export type LoginFormValidation = {
  email: boolean;
  password: boolean;
};

export type User = {
  email: string;
  password: string;
  otp?: OTP;
};

export type OTP = {
  userEmail?: string;
  otpValue?: string;
  expirationTime?: number;
  publicKey?: string;
  iv?: string;
};
