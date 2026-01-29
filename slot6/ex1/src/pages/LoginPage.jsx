import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const nav = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    // demo: login xong chuyển sang manage users
    nav("/manage-users");
  };

  const onCancel = () => {
    setUsername("");
    setPassword("");
  };

  return (
    <div className="screen">
      <div className="login-wrap">
        <div className="card">
          <div className="card-icon">
            <span className="round-icon">↩</span>
          </div>

          <h2 className="card-title">User Login</h2>
          <p className="card-subtitle">Please sign in to continue</p>

          <form onSubmit={onSubmit} className="form">
            <div className="field">
              <label className="label">Username</label>
              <input
                className="input"
                placeholder="Enter your username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>

            <div className="field">
              <div className="label-row">
                <label className="label">Password</label>
                <button type="button" className="link">Forgot?</button>
              </div>

              <div className="input-with-icon">
                <input
                  className="input"
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <span className="eye" aria-hidden="true">👁</span>
              </div>
            </div>

            <button className="btn btn-primary" type="submit">Login</button>
            <button className="btn btn-ghost" type="button" onClick={onCancel}>Cancel</button>

            <div className="muted-center">
              Don&apos;t have an account? <button type="button" className="link">Request Access</button>
            </div>
          </form>
        </div>
      </div>

      <div className="screen-footer">STORMI ADMINISTRATIVE PLATFORM © 2024</div>
    </div>
  );
}
