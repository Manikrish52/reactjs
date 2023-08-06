import React from 'react';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Header() {
  return (
    <Navbar expand="lg" className="rightside-navbar">
      <Container>
        <Navbar.Brand href="#home">Welcome you to Ecolife store!</Navbar.Brand>
        {/*  */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Compare (0)</Nav.Link>
            <Nav.Link href="#link">Wishlist (0)</Nav.Link>
            <NavDropdown title="Settings" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">My Account</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Clickout
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Sign In</NavDropdown.Item>
              {/*  */}
            </NavDropdown>
               <NavDropdown title="English" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">English</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Francais</NavDropdown.Item>
            </NavDropdown>
            {/*  */}
            <NavDropdown title="USD $" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">USD $</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                USD 
            </NavDropdown.Item>
                         
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header