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
  otp?: EncryptedOTP;
};

export type EncryptedOTP = {
  userEmail: string;
  otpValue: string;
  expirationTime: number;
  publicKey?: string;
  iv?: string;
};
