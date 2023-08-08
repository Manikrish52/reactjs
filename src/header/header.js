import React from 'react';
import Nav from 'react-bootstrap/Nav';
import './header.css';
import EuroIcon from '@mui/icons-material/Euro';
import ShuffleIcon from '@mui/icons-material/Shuffle';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

function Header() {
  return (
    <Navbar expand="lg" className="rightside-navbar">
      {/* rightside header title */}
        <div className='right-side'>
        <Navbar.Brand className='rightside-title' href="#home">Welcome you to Ecolife store!</Navbar.Brand>
        </div>
        {/* leftside header navbar */}
        <div className='left-side'>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="  me-auto">
            {/* compare */}
           <div className='compare-content'>
            <Nav.Link className='leftside-lables' href="#home"> <ShuffleIcon className='ShuffleIcon'/>Compare (0)
            
             </Nav.Link>
            </div>
             <div className='line-content'>|</div>

            {/* wishlist */}
            <div className='wishlist-lable'>
          
            <Nav.Link className='leftside-lables' href="#link">  <FavoriteBorderIcon className='hearticon' />Wishlist (0)</Nav.Link>
            </div>
             <div className='line-content'>|</div>
            {/* setting  */}
            <div className='settings-contain'>
            <NavDropdown  title="Settings" id="dropdown-content" className='dropdown-content'>
              <div className='navdropdown-content'>
              <NavDropdown.Item   href="#action/3.1">My Account</NavDropdown.Item>
              <NavDropdown.Divider className='divider-content' />
              <NavDropdown.Item  href="#action/3.2">
                Clickout
              </NavDropdown.Item>
                <NavDropdown.Divider className='divider-content' />
              <NavDropdown.Item href="#action/3.3">Sign In</NavDropdown.Item>
              
              </div>
            </NavDropdown>
            </div>
             <div className='line-content'>|</div>

            {/* language*/}
            <div className='english-content'>
               <NavDropdown title="English" id="dropdown-content">
              <NavDropdown.Item  href="#action/3.1">English</NavDropdown.Item>
               <NavDropdown.Divider className='divider-content' />
              <NavDropdown.Item href="#action/3.3">Francais</NavDropdown.Item>
            </NavDropdown>
            </div>
             <div className='line-content'>|</div>
            {/* usd  */}
            <div className='usd-content'>
            <NavDropdown  title="USD $" id="dropdown-content">
              <NavDropdown.Item  href="#action/3.1">USD $</NavDropdown.Item>
               <NavDropdown.Divider className='divider-content' />
              <NavDropdown.Item  href="#action/3.2">
                USD <EuroIcon className='uroicon'/> 
            </NavDropdown.Item>
                         
            </NavDropdown>
            </div>
          </Nav>
        </Navbar.Collapse>
        </div>
     
    </Navbar>
  );
}

export default Header