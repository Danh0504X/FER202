import { useState } from 'react';
import { Container, Card, Form, Button, Alert } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginApi } from '../services/authService';
import { loginSuccess } from '../store/authSlice';

function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!username.trim() || !password.trim()) {
      setError('Username và password không được để trống');
      return;
    }

    if (password.length < 6) {
      setError('Password phải có ít nhất 6 ký tự');
      return;
    }

    try {
      console.log('Submitting login with:', { username, password });

      const users = await loginApi(username, password);
      console.log('LOGIN RESULT:', users);

      if (!Array.isArray(users)) {
        setError('Dữ liệu trả về không hợp lệ');
        return;
      }

      if (users.length === 0) {
        setError('Sai username hoặc password');
        return;
      }

      dispatch(loginSuccess(users[0]));
      navigate('/home');
    } catch (err) {
      console.error('LOGIN ERROR:', err);

      if (err.response) {
        setError(`Lỗi server: ${err.response.status}`);
      } else if (err.request) {
        setError('Không kết nối được tới JSON Server. Hãy kiểm tra server và baseURL.');
      } else {
        setError(`Lỗi: ${err.message}`);
      }
    }
  };

  return (
    <Container className="d-flex justify-content-center align-items-center vh-100">
      <Card className="shadow p-4" style={{ width: '400px' }}>
        <h2 className="text-center mb-4">Login</h2>

        {error && <Alert variant="danger">{error}</Alert>}

        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              placeholder="Nhập username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Nhập password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>

          <Button type="submit" variant="primary" className="w-100">
            Login
          </Button>
        </Form>
      </Card>
    </Container>
  );
}

export default LoginPage;