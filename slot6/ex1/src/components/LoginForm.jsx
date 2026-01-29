import React, { useState } from "react";
import "../components/style.css";

export default function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onLogin = (e) => {
    e.preventDefault();
    alert(`Login (demo)\nUsername: ${username}\nPassword: ${password}`);
  };

  const onCancel = () => {
    setUsername("");
    setPassword("");
  };

  return (
    <div className="card">
      <h2 className="cardTitle">Login</h2>

      <form onSubmit={onLogin} className="form">
        <div className="formGroup">
          <label className="label">Username</label>
          <input
            className="input"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter username"
          />
        </div>

        <div className="formGroup">
          <label className="label">Password</label>
          <input
            className="input"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
          />
        </div>

        <div className="btnRow">
          <button className="btn btnPrimary" type="submit">
            Login
          </button>
          <button className="btn btnGhost" type="button" onClick={onCancel}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
