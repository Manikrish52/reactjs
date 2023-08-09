import React from 'react';
import './navbar.css';
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
import ListGroup from 'react-bootstrap/ListGroup';



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
          <Nav>
            {/* home */}
            
           <NavDropdown title="Home" id="middle-nav-dropdown"  >
              <NavDropdown.Item className='action-home' href="#action/1.1">Home Organic   
               


              <ArrowForwardIosIcon className='arrowforwardicion'/> 
              </NavDropdown.Item> 
              <NavDropdown.Divider className='navdrop-divider' />
              <NavDropdown.Item className='action-home' href="#action/1.2">
                Home Cosmetic <ArrowForwardIosIcon className='arrowforwardicion'/>
                </NavDropdown.Item>
               <NavDropdown.Divider className='navdrop-divider' />
              <NavDropdown.Item className='action-home' href="#action/1.3">Home Digital <ArrowForwardIosIcon className='arrowforwardicion'/> 
              </NavDropdown.Item>
              <NavDropdown.Divider  className='navdrop-divider' />
              <NavDropdown.Item className='action-home' href="#action/1.4">
                Home Furniture<ArrowForwardIosIcon className='arrowforwardicion'/>
                </NavDropdown.Item>
               <NavDropdown.Divider className='navdrop-divider' />
              <NavDropdown.Item className='action-home' href="#action/1.5">
                Home Medical<ArrowForwardIosIcon className='arrowforwardicion'/>
                </NavDropdown.Item>
             
            </NavDropdown>
               
               {/* shop */}
               <NavDropdown title="Shop" id="middle-nav-dropdown">
                      <Card className='card-content'>
                  
                   <Card.Body>
                    <Card.Title>
                      
                       <ListGroup>
                        <div className='listgroup-content'>
                       <ListGroup.Item className='shop-item'>
                        <div className='shop-list'>
                        <h4 className='shop-title'>Shop Grid</h4>
                        <p className='shop-opction'>Shop Grid 3 Column</p>
                         <p className='shop-opction'>Shop Grid 4 Column</p>
                         <p className='shop-opction'>Shop Grid Left Sidebar</p>
                         <p className='shop-opction'>Shop Grid Right Sidebar</p>
                        </div>
                      </ListGroup.Item>
                       <ListGroup.Item className='shop-item'>
                          <div className='shop-list'>
                        <h4 className='shop-title'>Shop List</h4>
                        <p className='shop-opction'>Shop List</p>
                         <p className='shop-opction'>Shop List Left Sidebar</p>
                         <p className='shop-opction'>Shop List Right Sidebar</p>
                         <p className='shop-opction'>Shop Filter Page</p>
                        </div>

                       </ListGroup.Item>
                       <ListGroup.Item className='shop-item'>
                        <div className='shop-list'>
                        <h4 className='shop-title'>Shop Single</h4>
                        <p className='shop-opction'>Shop Single</p>
                         <p className='shop-opction'>Shop Variable</p>
                         <p className='shop-opction'>Shop A</p>
                         <p className='shop-opction'>Shop Group</p>
                         <p className='shop-opction'>Shop Tab 2</p>
                         <p className='shop-opction'>Shop Tab 3</p>
                        </div>
                       </ListGroup.Item>
                       <ListGroup.Item className='shop-item'>
                        <div className='shop-list'>
                        <h4 className='shop-title'>shop Single </h4>
                        <p className='shop-opction'>Shop Slide</p>
                         <p className='shop-opction'>Shop Slider</p>
                         <p className='shop-opction'>Shop Gallery Right</p>
                         <p className='shop-opction'>Shop Sticky Left</p>
                         <p className='shop-opction'>Shop Sticky Right</p>
                        </div></ListGroup.Item>
                         </div>
                     </ListGroup>
                    
                    </Card.Title>
                    <Card.Text>
                     
               </Card.Text>
                <Card.Img className='card-img' variant="bottom" />
              
           </Card.Body>
           </Card>
  
            </NavDropdown>
               {/* pages */}
            <NavDropdown title="Pages" id="middle-nav-dropdown">
                 <ListGroup className='page-lists'>
                 <ListGroup.Item className='page-uses'>About Page</ListGroup.Item>
                 <ListGroup.Item className='page-uses'>Cart Page</ListGroup.Item>
                 <ListGroup.Item className='page-uses'>Checkout Page</ListGroup.Item>
                 <ListGroup.Item className='page-uses'>Compare Page</ListGroup.Item>
                 <ListGroup.Item className='page-uses'>Login & Regiter Page</ListGroup.Item>
                 <ListGroup.Item className='page-uses'>Account Page</ListGroup.Item>
                 <ListGroup.Item className='page-uses'>Wishlist Page</ListGroup.Item>
                </ListGroup>
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