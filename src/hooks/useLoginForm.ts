import React, { useState } from 'react';
import { LoginForm } from '../global';
import authenticationService from '../services/Authentication';

type LoginFormReturnType = {
  loginForm: LoginForm;
  // eslint-disable-next-line no-unused-vars
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  formSubmit: () => void;
};

export default function useLoginForm(): LoginFormReturnType {
  const [loginForm, setLoginForm] = useState<LoginForm>({
    email: '',
    password: ''
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputElement = event.target;
    const { type, value } = inputElement;
    const passwordFieldUpdated = type === 'password';
    passwordFieldUpdated
      ? setLoginForm({
          ...loginForm,
          password: value
        })
      : setLoginForm({
          ...loginForm,
          email: value
        });
  };

  const formSubmit = async () => {
    authenticationService.login(loginForm.email, loginForm.password);
  };

  return { loginForm, handleChange, formSubmit };
}
