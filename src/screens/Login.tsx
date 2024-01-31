/*
  File: Login.tsx
  Author: Udaya Prakash Jayaraman
  Created: January 31, 2024
  Description: This file contains the basic Login Setup.
*/

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

interface LoginForm {
  email: string;
  password: string;
}

const Login: React.FC = () => {
    const navigate = useNavigate();
  const [loginForm, setLoginForm] = useState<LoginForm>({
    email: "",
    password: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setLoginForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  const handleLogin = (): void => {
    // Add logic for handling login
    console.log("Logging in with:", loginForm);
  };

  const handleResetPassword = (): void => {
    // Add logic for handling reset password
    console.log("Resetting password for:", loginForm.email);
  };

  const handleRegister = (): void => {
    // Add logic for handling registration
    console.log("Registering with:", loginForm);
  };

  return (
    <div>
      <h2>Login</h2>
      <form>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={loginForm.email}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={loginForm.password}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <button type="button" onClick={handleLogin}>
          Login
        </button>
        <button type="button" onClick={handleResetPassword}>
          Reset Password
        </button>
        <button type="button" onClick={handleRegister}>
          Register
        </button>
        <button type="button" onClick={() => navigate("/")}>
          back
        </button>
      </form>
    </div>
  );
};

export default Login;
