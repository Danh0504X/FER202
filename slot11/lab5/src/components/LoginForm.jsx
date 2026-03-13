import React, { useReducer } from "react";
import { useAuth } from "../contexts/AuthContext";

// Reducer cho form state
const formReducer = (state, action) => {
  switch (action.type) {
    case "SET_FIELD":
      return {
        ...state,
        [action.field]: action.value,
        errors: { ...state.errors, [action.field]: "" }, // Clear error on change
      };
    case "SET_ERRORS":
      return {
        ...state,
        errors: action.errors,
      };
    case "RESET":
      return {
        username: "",
        password: "",
        errors: {},
      };
    default:
      return state;
  }
};

const LoginForm = () => {
  const [formState, dispatchForm] = useReducer(formReducer, {
    username: "",
    password: "",
    errors: {},
  });

  const { login, error: authError } = useAuth();

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatchForm({ type: "SET_FIELD", field: name, value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Client-side validation
    const errors = {};
    if (!formState.username.trim()) {
      errors.username = "Username/Email is required";
    }
    if (!formState.password.trim()) {
      errors.password = "Password is required";
    }

    if (Object.keys(errors).length > 0) {
      dispatchForm({ type: "SET_ERRORS", errors });
      return;
    }

    // Call login from context
    login(formState.username, formState.password);
  };

  return (
    <div className="card shadow-sm" style={{ maxWidth: 480, width: "100%" }}>
      <div className="card-header bg-white border-0 text-center">
        <h5 className="mb-0">Login with AuthContext</h5>
      </div>
      <div className="card-body">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Username or Email</label>
            <input
              type="text"
              name="username"
              className="form-control"
              placeholder="Enter your username"
              value={formState.username}
              onChange={handleChange}
            />
            {formState.errors.username && (
              <div className="text-danger small mt-1">
                {formState.errors.username}
              </div>
            )}
          </div>

          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              name="password"
              className="form-control"
              placeholder="Enter your password"
              value={formState.password}
              onChange={handleChange}
            />
            {formState.errors.password && (
              <div className="text-danger small mt-1">
                {formState.errors.password}
              </div>
            )}
          </div>

          {authError && (
            <div className="alert alert-danger py-2" role="alert">
              {authError}
            </div>
          )}

          <button type="submit" className="btn btn-primary w-100">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;