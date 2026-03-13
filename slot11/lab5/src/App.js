import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { AuthProvider, useAuth } from "./contexts/AuthContext";
import { ThemeProvider } from "./contexts/ThemeContext";
import LoginForm from "./components/LoginForm";
import CounterComponent from "./components/CounterComponent";
import LightSwitch from "./components/LightSwitch";

// Modal thông báo đăng nhập thành công
function LoginSuccessModal({ username, onClose }) {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0,0,0,0.4)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 1050,
      }}
    >
      <div className="card shadow" style={{ minWidth: 360 }}>
        <div className="card-header d-flex justify-content-between align-items-center">
          <span className="fw-semibold">Login Success</span>
          <button
            type="button"
            className="btn-close"
            aria-label="Close"
            onClick={onClose}
          />
        </div>
        <div className="card-body">
          <p className="mb-0">Welcome {username}</p>
        </div>
        <div className="card-footer text-end">
          <button className="btn btn-primary px-4" onClick={onClose}>
            OK
          </button>
        </div>
      </div>
    </div>
  );
}

// Component nội bộ để sử dụng useAuth
function AppContent() {
  const { isAuthenticated, user, logout } = useAuth();
  const [hasConfirmedLogin, setHasConfirmedLogin] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  // Khi đăng nhập thành công, hiện modal; khi logout thì reset state
  useEffect(() => {
    if (isAuthenticated) {
      setShowSuccessModal(true);
      setHasConfirmedLogin(false);
    } else {
      setShowSuccessModal(false);
      setHasConfirmedLogin(false);
    }
  }, [isAuthenticated]);

  // Nếu chưa login hoặc chưa bấm OK trên modal, hiển thị màn login
  if (!isAuthenticated || !hasConfirmedLogin) {
    return (
      <>
        <div
          className="d-flex align-items-center justify-content-center"
          style={{
            minHeight: "100vh",
            background:
              "linear-gradient(135deg, #4c6fff 0%, #6f9bff 40%, #f5f7fb 100%)",
            padding: "24px",
          }}
        >
          <LoginForm />
        </div>
        {isAuthenticated && showSuccessModal && user && (
          <LoginSuccessModal
            username={user.username}
            onClose={() => {
              setShowSuccessModal(false);
              setHasConfirmedLogin(true);
            }}
          />
        )}
      </>
    );
  }

  // Nếu đã login, wrap với ThemeProvider cho Dashboard
  return (
    <ThemeProvider>
      <div className="container mt-4">
        <h1 className="text-center">Welcome, {user.username}!</h1>
        <div className="row">
          <div className="col-md-6">
            <CounterComponent />
          </div>
          <div className="col-md-6">
            <LightSwitch />
          </div>
        </div>
        <div className="text-center mt-4">
          <button className="btn btn-danger" onClick={logout}>
            Logout
          </button>
        </div>
      </div>
    </ThemeProvider>
  );
}

function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}

export default App;
