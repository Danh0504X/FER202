import { Navbar, Container, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout } from '../store/authSlice';

function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.auth.user);

  const handleLogout = () => {
    dispatch(logout());
    navigate('/login');
  };

  return (
    <Navbar bg="white" variant="light" className="mb-4 shadow-sm">
      <Container>
        <Navbar.Brand className="d-flex align-items-center gap-2 text-dark">
          <img
            src="/images/logo/logo.jpg"
            alt="logo"
            style={{ width: "32px", height: "32px", objectFit: "cover" }}
          />
          PersonalBudget
        </Navbar.Brand>

        <div className="d-flex align-items-center gap-3 text-dark">
          <span>Signed in as {user?.fullName || user?.username}</span>
          <Button variant="outline-dark" size="sm" onClick={handleLogout}>
            Logout
          </Button>
        </div>
      </Container>
    </Navbar>
  );
}

export default Header;