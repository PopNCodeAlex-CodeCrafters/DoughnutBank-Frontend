import React, { useState } from 'react';
import { LoginForm, LoginFormValidation } from '../global';
import authenticationService from '../services/Authentication';
import validationUtil from '../utils/Validation';

type LoginFormReturnType = {
  loginForm: LoginForm;
  // eslint-disable-next-line no-unused-vars
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  isValid: LoginFormValidation;
  formSubmit: () => void;
};

export default function useLoginForm(): LoginFormReturnType {
  const [loginForm, setLoginForm] = useState<LoginForm>({
    email: '',
    password: ''
  });
  const [isValid, setIsValid] = useState<LoginFormValidation>({
    email: false,
    password: false
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputElement = event.target;
    const { type, value } = inputElement;
    const isPasswordFieldUpdated = type === 'password';
    isPasswordFieldUpdated ? updateAndValidatePassword(value) : updateAndValidateEmail(value);
  };

  const updateAndValidatePassword = (pass: string) => {
    setLoginForm({
      ...loginForm,
      password: pass
    });
    setIsValid({
      ...isValid,
      password: validationUtil.validatePassword(pass)
    });
  };

  const updateAndValidateEmail = (email: string) => {
    setLoginForm({
      ...loginForm,
      email: email
    });
    setIsValid({
      ...isValid,
      email: validationUtil.validateEmail(email)
    });
  };

  const allFieldsAreValid = (): boolean => {
    return isValid.email && isValid.password
  }
  const formSubmit = async () => {
    if(allFieldsAreValid())
      {
        authenticationService.login(loginForm.email, loginForm.password);
      }
  };

  return { loginForm, handleChange, isValid, formSubmit };
}
