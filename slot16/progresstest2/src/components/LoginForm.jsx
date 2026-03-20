import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Form,
  Button,
  Alert,
} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { loginThunk, clearError } from "../redux/slices/authSlice";
import ModalConfirm from "../components/ModalConfirm";

function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setError] = useState({});
  const [showModal, setShowModal] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, isAuthenticated, loading, error } = useSelector(
    (state) => state.auth
  );

  React.useEffect(() => {
    if (isAuthenticated) {
      navigate("/", { replace: true });
    }
  }, [isAuthenticated, navigate]);

  const handleInputChange = (setter, field) => (e) => {
    setter(e.target.value);

    setError((prevErrors) => ({
      ...prevErrors,
      [field]: "",
    }));

    if (error) {
      dispatch(clearError());
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    const newErrors = {};

    if (!username) {
      newErrors.username = "Username is required";
    }

    if (!password) {
      newErrors.password = "Password is required";
    }

    if (username && username.includes("@")) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(username)) {
        newErrors.username = "Invalid email format";
      }
    }

    if (password && password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    if (Object.keys(newErrors).length > 0) {
      setError(newErrors);
      return;
    }

    setError({});

    try {
      const loggedInUser = await dispatch(
        loginThunk({ username, password })
      ).unwrap();

      console.log("Login successful:", loggedInUser);

      setShowModal(true);

      setTimeout(() => {
        setShowModal(false);
        navigate("/");
      }, 3000);
    } catch (err) {
      // err is the rejectWithValue payload (string) when available
      if (typeof err === "string") {
        // error already stored in redux state via rejected reducer
        return;
      }
      // fallback (should be rare)
      console.error(err);
    }
  };

  const handleCancel = () => {
    setUsername("");
    setPassword("");
    setError({});
    if (error) {
      dispatch(clearError());
    }
  };

  return (
    <Container className="mt-5">
      <Row className="justify-content-md-center">
        <Col xs={12} md={6}>
          <Card className="shadow-sm">
            <Card.Header className="bg-white py-3">
              <h3 className="text-center mb-0">Login</h3>
            </Card.Header>

            <Card.Body className="p-4">
              {error && <Alert variant="danger">{error}</Alert>}
              {user && isAuthenticated && (
                <Alert variant="success" className="mb-3">
                  Logged in as{" "}
                  <strong>{user?.fullName || user?.username || "User"}</strong>
                </Alert>
              )}

              <Form onSubmit={handleLogin}>
                <Form.Group controlId="identifier" className="mb-3">
                  <Form.Label>Username or email</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter username or email"
                    value={username}
                    onChange={handleInputChange(setUsername, "username")}
                    disabled={loading}
                    isInvalid={!!errors.username}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.username}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group controlId="password" className="mb-3">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    value={password}
                    onChange={handleInputChange(setPassword, "password")}
                    placeholder="Enter password"
                    disabled={loading}
                    isInvalid={!!errors.password}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.password}
                  </Form.Control.Feedback>
                </Form.Group>

                <div className="d-flex gap-2 mt-4">
                  <Button
                    variant="primary"
                    type="submit"
                    className="flex-fill"
                    disabled={loading}
                  >
                    {loading ? "Logging in..." : "Login"}
                  </Button>

                  <Button
                    variant="secondary"
                    type="button"
                    className="flex-fill"
                    onClick={handleCancel}
                    disabled={loading}
                  >
                    Cancel
                  </Button>
                </div>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <ModalConfirm
        show={showModal}
        title="Login Successful"
        message="You have successfully logged in. Redirecting to dashboard..."
        onConfirm={() => setShowModal(false)}
        onCancel={() => setShowModal(false)}
      />
    </Container>
  );
}

export default LoginForm;