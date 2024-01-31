/*
  File: LandingScreen.tsx
  Author: Udaya Prakash Jayaraman
  Created: January 31, 2024
  Description: This file contains the basic Landing screen before auth.
*/


import React from "react";
import { Link } from "react-router-dom";

const Landing: React.FC = () => {
  return (
    <div>
      <h2>Welcome to Our App</h2>
      <Link to="/login">
        <button>Login</button>
      </Link>
      <Link to="/register">
        <button>Register</button>
      </Link>
    </div>
  );
};

export default Landing;
