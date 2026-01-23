import React, { useState } from "react";
import { Navbar, Nav, Container, Form, FormControl, Button } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";
import "./Header.css";

function Header() {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    const q = searchQuery.trim();
    if (!q) return;
    navigate(`/pizzas?search=${encodeURIComponent(q)}`);
  };

  return (
    <header className="app-header">
      <Navbar expand="lg" className="app-navbar" variant="dark">
        <Container fluid className="px-4">
          <Navbar.Brand as={NavLink} to="/" className="app-brand">
            <span className="app-brand-badge" aria-hidden="true">🍕</span>
            <span className="app-brand-text">Pizza House</span>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="main-navbar" />
          <Navbar.Collapse id="main-navbar">
            <Nav className="me-auto ms-lg-4 gap-lg-2 app-nav">
              <Nav.Link as={NavLink} to="/" end className="app-link">
                Home
              </Nav.Link>
              <Nav.Link as={NavLink} to="/about" className="app-link">
                About Us
              </Nav.Link>
              <Nav.Link as={NavLink} to="/contact" className="app-link">
                Contact
              </Nav.Link>

            
            </Nav>

            <Form className="app-search" onSubmit={handleSearch}>
              <span className="app-search-icon" aria-hidden="true">⌕</span>
              <FormControl
                type="search"
                placeholder="Search pizza..."
                className="app-search-input"
                aria-label="Search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Button className="app-search-btn" type="submit" aria-label="Search">
                Search
              </Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;
