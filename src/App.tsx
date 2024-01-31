/*
  File: App.tsx
  Author: Udaya Prakash Jayaraman
  Created: January 31, 2024
  Description: This file contains the Routs and other required definitions.
*/


import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./screens/Login";
import Landing from "./screens/LandingScreen";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Landing />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Login />} />
          <Route path="login" element={<Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
export default App;
