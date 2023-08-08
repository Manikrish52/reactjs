import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import SearchIcon from '@mui/icons-material/Search';
import Card from 'react-bootstrap/Card';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

function Navbarheader() {
  return (
      <Navbar expand="lg" className="navbarheader-content">
      <Container fluid>
        <Navbar.Brand className='logo-content' href="#">
            
        </Navbar.Brand>
        
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
            {/*  */}
            <div className='navbar-content'>
          <Nav
            className="me-auto my-2 my-lg-0"
            
            navbarScroll
          >
            {/* home */}
            
           <NavDropdown title="Home" id="middle-nav-dropdown" >
            <div className='action-content'>
              <NavDropdown.Item className='action-home' href="#action/1.1">Home Organic  <ArrowForwardIosIcon className='arrowforwardicion'/> </NavDropdown.Item> </div>
               <NavDropdown.Divider className='navdrop-divider' />
              <NavDropdown.Item href="#action/1.2">
                Home Cosmetic <ArrowForwardIosIcon className='arrowforwardicion'/></NavDropdown.Item>
               <NavDropdown.Divider className='navdrop-divider' />
              <NavDropdown.Item href="#action/1.3">Home Digital <ArrowForwardIosIcon className='arrowforwardicion'/></NavDropdown.Item>
              <NavDropdown.Divider className='navdrop-divider' />
              <NavDropdown.Item href="#action/1.4">
                Home Furniture<ArrowForwardIosIcon className='arrowforwardicion'/></NavDropdown.Item>
               <NavDropdown.Divider className='navdrop-divider' />
              <NavDropdown.Item href="#action/1.5">
                Home Medical<ArrowForwardIosIcon className='arrowforwardicion'/></NavDropdown.Item>
             
            </NavDropdown>
               
               {/* shop */}
               <NavDropdown title="Shop" id="middle-nav-dropdown">
              <NavDropdown.Item href="#action/2.1">Action</NavDropdown.Item>
               <NavDropdown.Divider className='navdrop-divider' />
              <NavDropdown.Item href="#action/2.2">
                Another action<ArrowForwardIosIcon className='arrowforwardicion'/>
              </NavDropdown.Item>
               <NavDropdown.Divider className='navdrop-divider' />
              <NavDropdown.Item href="#action/2.3">Something</NavDropdown.Item>
               <NavDropdown.Divider className='navdrop-divider' />
              <NavDropdown.Item href="#action/2.4">
                Separated link
              </NavDropdown.Item> <NavDropdown.Divider className='navdrop-divider' />
            </NavDropdown>
               {/* pages */}
            <NavDropdown title="Pages" id="middle-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">About Page<ArrowForwardIosIcon className='arrowforwardicion'/></NavDropdown.Item>
               <NavDropdown.Divider className='navdrop-divider' />
              <NavDropdown.Item href="#action/3.2">
                Cart Page <ArrowForwardIosIcon className='arrowforwardicion'/>
              </NavDropdown.Item> <NavDropdown.Divider className='navdrop-divider' />
              <NavDropdown.Item href="#action/3.3">Checkout Page <ArrowForwardIosIcon className='arrowforwardicion'/></NavDropdown.Item>
               <NavDropdown.Divider className='navdrop-divider' />
              <NavDropdown.Item href="#action/3.4">Compare Page <ArrowForwardIosIcon className='arrowforwardicion'/>         
              </NavDropdown.Item>  <NavDropdown.Divider className='navdrop-divider' />
              <NavDropdown.Item href="#action/3.5">Login & Regiter Page   <ArrowForwardIosIcon className='arrowforwardicion'/>       
              </NavDropdown.Item>  <NavDropdown.Divider className='navdrop-divider' />
              <NavDropdown.Item href="#action/3.6">Account Page <ArrowForwardIosIcon className='arrowforwardicion'/>
              </NavDropdown.Item>  <NavDropdown.Divider className='navdrop-divider' />
              <NavDropdown.Item href="#action/3.7">Wishlist Page <ArrowForwardIosIcon className='arrowforwardicion'/>         
              </NavDropdown.Item>
            </NavDropdown>
               {/* blog */}
          <NavDropdown title="Blog" id="middle-nav-dropdown">
              <NavDropdown.Item href="#action/3.5">Blog Grid <ArrowForwardIosIcon className='arrowforwardicion'/>       
              </NavDropdown.Item>  <NavDropdown.Divider className='navdrop-divider' />
              <NavDropdown.Item href="#action/3.6">Blog List <ArrowForwardIosIcon className='arrowforwardicion'/>
              </NavDropdown.Item>  <NavDropdown.Divider className='navdrop-divider' />
              <NavDropdown.Item href="#action/3.7">Blog Single<ArrowForwardIosIcon className='arrowforwardicion'/>         
              </NavDropdown.Item>
            </NavDropdown>
               {/* contact us */}
                 <div className='contact-content'>Contact</div>
                   {/* search */}
        
         <div className='search-containt'>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              
            />
            
            < Button variant="outline-success">Search</Button>
          </Form>
          </div>
           < SearchIcon className='searchicon'/>
       
           {/* call */}
           <div className='call-content'>
            <Nav.Link > 
            <div className='image-content' id='contect-content'>call us:
            <div className='contact-number'>(+800)345678</div>
            </div>
                </Nav.Link>
            </div>
         <div className='call-content'>
            <Nav.Link > 
            <div className='amount-content'> <ShoppingBagOutlinedIcon className='shoppingbag'/>$20.00
            
            </div>
                </Nav.Link>
            </div>
          </Nav>   
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Navbarheader