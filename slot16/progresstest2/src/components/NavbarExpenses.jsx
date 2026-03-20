//NavbarExpenses.jsx thanh điều hướng chứa logo+tên app "Personal Budget" bên trái, bên phải hiển thị "Signed in as [username]" và nút "Logout". Navbar này sẽ xuất hiện trên tất cả các trang sau khi người dùng đăng nhập thành công, giúp người dùng dễ dàng nhận biết trạng thái đăng nhập và có thể đăng xuất bất cứ lúc nào.
import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../redux/slices/authSlice';
function NavbarExpenses() {
    const dispatch = useDispatch();
    const { isAuthenticated, user } = useSelector((state) => state.auth);
    const navigate = useNavigate(); //Sử dụng useNavigate để điều hướng sau khi đăng xuất
    const handleLogout = () => {
        dispatch(logout());
        navigate('/login'); // Chuyển hướng về trang đăng nhập sau khi đăng xuất
    }
    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container>
                 <Navbar.Brand className="d-flex align-items-center gap-2 text-white">
          <img
            src="/images/logo/logo.jpg"
            alt="logo"
            style={{ width: "32px", height: "32px", objectFit: "cover" }}
          />
          PersonalBudget
        </Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto align-items-center">
                        {isAuthenticated && (
                            <>
                                <Navbar.Text className="me-3">
                                    Signed in as <strong>{user?.fullName || user?.username || 'User'}</strong>
                                </Navbar.Text>
                                <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
                            </>
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
export default NavbarExpenses;
