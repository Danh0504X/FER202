import React, { createContext, useReducer, useContext } from "react";

// Bước 1. Khởi tạo giá trị ban đầu cho context
const initialState = {
  isAuthenticated: false,
  user: null,
  loading: false,
  error: null,
};

// Bước 2. Tạo reducer để quản lý trạng thái
const authReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN_START":
      return {
        ...state,
        loading: true,
        error: null,
      };

    case "LOGIN_SUCCESS":
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload.user,
        loading: false,
      };

    case "LOGIN_FAILURE":
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };

    case "LOGOUT":
      return {
        ...state,
        isAuthenticated: false,
        user: null,
      };

    case "CLEAR_ERROR":
      return {
        ...state,
        error: null,
      };

    default:
      return state;
  }
};

// Bước 3. Tạo context
export const AuthContext = createContext();

// Bước 4. Provider
export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook
export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return context;
};