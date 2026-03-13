import { useState } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { getAccounts } from "../services/accountService";
import MessageModal from "../components/MessageModal";

function LoginPage() {
  const [usernameOrEmail, setUsernameOrEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [welcomeUser, setWelcomeUser] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    // validation
    if (!usernameOrEmail) {
      setError("Username or Email is required.");
      return;
    }

    if (!password) {
      setError("Password is required.");
      return;
    }

    const accounts = await getAccounts();

    const user = accounts.find(
      (acc) =>
        (acc.username === usernameOrEmail ||
          acc.email === usernameOrEmail) &&
        acc.password === password
    );

    // sai tài khoản
    if (!user) {
      setError("Invalid username/email or password!");
      return;
    }

    // không phải admin
    if (user.role !== "admin") {
      setError("Access denied. Only admin users can log in.");
      return;
    }

   // account locked
if (user.status === "locked") {
  setError("Account is locked. Please contact admin.");
  return;
}

// login success
localStorage.setItem("currentUser", JSON.stringify(user));

setWelcomeUser(user.username);
setShowModal(true);
  };

  return (
    <>
      <Card style={{ width: "400px", margin: "100px auto" }}>
        <Card.Body>

          <h3 className="text-center mb-4">Login</h3>

          {error && <Alert variant="danger">{error}</Alert>}

          <Form onSubmit={handleLogin}>

            <Form.Group className="mb-3">
              <Form.Label>Username or email</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter username or email"
                value={usernameOrEmail}
                onChange={(e) => setUsernameOrEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>

            <div className="d-flex justify-content-between">
              <Button type="submit" variant="primary">
                Login
              </Button>

              <Button variant="secondary">
                Cancel
              </Button>
            </div>

          </Form>
        </Card.Body>
      </Card>

      <MessageModal
        show={showModal}
        message={`Welcome, ${welcomeUser}! Login successful.`}
        onContinue={() => navigate("/accounts")}
      />
    </>
  );
}

export default LoginPage;