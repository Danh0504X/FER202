import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./ui.css";
import

import Navbar from "./components/Navbar";
import LoginPage from "./pages/LoginPage";
import ManageUsersPage from "./pages/ManageUsers";
import HomePage from "./pages/Home";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/manage-users" element={<ManageUsersPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
