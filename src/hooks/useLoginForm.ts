import React, { useState } from "react";
import { LoginForm } from "../global";

type LoginFormReturnType = {
  loginForm: LoginForm;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function useLoginForm(): LoginFormReturnType {
  const [loginForm, setLoginForm] = useState<LoginForm>({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputElement = e.target;
    const { type, value } = inputElement;
    const passwordFieldUpdated = type === "password";
    passwordFieldUpdated
      ? setLoginForm({
          ...loginForm,
          password: value,
        })
      : setLoginForm({
          ...loginForm,
          email: value,
        });
  };

  return { loginForm, handleChange };
}
