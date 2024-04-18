import React, { useState } from 'react';
import { LoginForm, LoginFormValidation, User } from '../global';
import Authentication from '../services/Authentication';
import validationUtil from '../utils/Validation';
import { sendMessage } from '../components/general/ToastMessage';
import { useNavigate } from '@tanstack/react-router';
import cookiesUtil from '../utils/Cookies';

type LoginFormReturnType = {
  loginForm: LoginForm;
  // eslint-disable-next-line no-unused-vars
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  isValid: LoginFormValidation;
  formSubmit: () => void;
};

export default function useLoginForm(): LoginFormReturnType {
  const navigate = useNavigate();
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
    return isValid.email && isValid.password;
  };
  const formSubmit = async () => {
    if (allFieldsAreValid()) {
      try {
        const authenticationService = new Authentication();
        const user: User = await authenticationService.login(loginForm.email, loginForm.password);

        saveCredentialsToCookies(user);
        navigate({
          to: '/purchase'
        });
      } catch (Error) {
        sendMessage('Could not log in');
      }
    } else sendMessage('Make sure all fields are valid');
  };

  const saveCredentialsToCookies = (user: User) => {
    cookiesUtil.saveCookie('email', user.email);
    cookiesUtil.saveCookie('password', user.password);
  };

  return { loginForm, handleChange, isValid, formSubmit };
}
