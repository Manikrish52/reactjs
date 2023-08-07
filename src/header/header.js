import React from 'react';
import Nav from 'react-bootstrap/Nav';
import EuroIcon from '@mui/icons-material/Euro';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

function Header() {
  return (
    <Navbar expand="lg" className="rightside-navbar">
      
        <div className='right-side'>
        <Navbar.Brand className='rightside-title' href="#home">Welcome you to Ecolife store!</Navbar.Brand>
        </div>
        {/*  */}
        <div className='left-side'>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="  me-auto">
        
            <Nav.Link className='leftside-lables' href="#home">Compare (0) </Nav.Link>
            <div className='wishlist-lable'>
            <FavoriteBorderIcon className='hearticon' />
            <Nav.Link className='leftside-lables' href="#link">Wishlist (0)</Nav.Link>
            </div>
            <NavDropdown  title="Settings" id="basic-nav-dropdown">
              <NavDropdown.Item  href="#action/3.1">My Account</NavDropdown.Item>
              <NavDropdown.Item  href="#action/3.2">
                Clickout
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Sign In</NavDropdown.Item>
              {/*  */}
            </NavDropdown>
               <NavDropdown title="English" id="basic-nav-dropdown">
              <NavDropdown.Item  href="#action/3.1">English</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Francais</NavDropdown.Item>
            </NavDropdown>
            {/*  */}
            <NavDropdown  title="USD $" id="basic-nav-dropdown">
              <NavDropdown.Item  href="#action/3.1">USD $</NavDropdown.Item>
              <NavDropdown.Item  href="#action/3.2">
                USD <EuroIcon className='uroicon'/> 
            </NavDropdown.Item>
                         
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        </div>
     
    </Navbar>
  );
}

export default Header