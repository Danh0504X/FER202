import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext();

/* =========================
   Auth Provider
========================= */
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  const login = (username, password) => {
    // Fake login logic (demo)
    if (username === "admin" && password === "123456") {
      setUser({ username });
      setError(null);
      return true;
    } else {
      setError("Invalid username or password");
      return false;
    }
  };

  const logout = () => {
    setUser(null);
    setError(null);
  };

  // Xác định trạng thái đăng nhập dựa trên user hiện tại
  const isAuthenticated = !!user;

  const value = {
    user,
    isAuthenticated,
    login,
    logout,
    error
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

/* =========================
   Custom Hook
========================= */
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used inside AuthProvider");
  }
  return context;
};