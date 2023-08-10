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
import InputGroup from 'react-bootstrap/InputGroup';
import { ListItem } from '@mui/material';
import FiberNewIcon from '@mui/icons-material/FiberNew';


function Navbarheader() {
  return (
      <Navbar expand="lg" className="navbarheader-content">
      <Container fluid className='navbar-container'>
        
        <Navbar.Brand className='logo-content' href="#">
            
        </Navbar.Brand>
        
       <Navbar.Toggle aria-controls="navbarScroll" />
       
        <Navbar.Collapse id="navbarScroll">
            {/*  */}
            <div className='navbar-content'>
          <Nav>
               
          
           <div className='middle-content'>
            {/* home */}
            
           <NavDropdown title="Home" id="middle-nav-dropdown"  >
              <NavDropdown className='action-home' title='Home Organic' href="#action/1.1" id='homeorganic-content'>
                <ListGroup className='home-organic'>
                 <ListGroup.Item>Organic 1</ListGroup.Item>
                 <ListGroup.Item>Organic 2</ListGroup.Item>
                 <ListGroup.Item>Organic 3</ListGroup.Item>
                 <ListGroup.Item>Organic 4</ListGroup.Item>
                </ListGroup>      
               
              <ArrowForwardIosIcon className='arrowforwardicion'/> 
              </NavDropdown> 
              <NavDropdown.Divider className='navdrop-divider' />
              <NavDropdown className='action-home' href="#action/1.2" id='homeorganic-content' title='Home Cosmetic'>
               <ListGroup className='home-organic'>
               <ListGroup.Item>Cosmetic 1</ListGroup.Item>
               <ListGroup.Item>Cosmetic 2</ListGroup.Item>
               <ListGroup.Item>Cosmetic 3</ListGroup.Item>
               <ListGroup.Item>Cosmetic 4</ListGroup.Item>
                </ListGroup>
                {/* <ArrowForwardIosIcon className='arrowforwardicion'/> */}
                </NavDropdown>
               <NavDropdown.Divider className='navdrop-divider' />
               <NavDropdown className='action-home' href="#action/1.2" id='homeorganic-content' title='Home Digital'>
               <ListGroup className='home-organic'>
               <ListGroup.Item>Digital 1</ListGroup.Item>
               <ListGroup.Item>Digital 2</ListGroup.Item>
               <ListGroup.Item>Digital 3</ListGroup.Item>
               <ListGroup.Item>Digital</ListGroup.Item>
               </ListGroup>
                {/* <ArrowForwardIosIcon className='arrowforwardicion'/> */}
                </NavDropdown>
               <NavDropdown.Divider className='navdrop-divider' />
              <NavDropdown className='action-home' href="#action/1.2" id='homeorganic-content' title='Home Furniture'>
               <ListGroup className='home-organic'>
               <ListGroup.Item>Furniture 1</ListGroup.Item>
               <ListGroup.Item>Furniture 2</ListGroup.Item>
               <ListGroup.Item>Furniture 3</ListGroup.Item>
               <ListGroup.Item>Furniture 4</ListGroup.Item>
               </ListGroup>
                {/* <ArrowForwardIosIcon className='arrowforwardicion'/> */}
                </NavDropdown>
                <NavDropdown.Divider className='navdrop-divider' />
               <NavDropdown className='action-home' href="#action/1.2" id='homeorganic-content' title='Home Medical'>
               <ListGroup className='home-organic'>
               <ListGroup.Item>Medical 1</ListGroup.Item>
               <ListGroup.Item>Medical 2</ListGroup.Item>
               <ListGroup.Item>Medical 3</ListGroup.Item>
               <ListGroup.Item>Medical 4</ListGroup.Item>
               </ListGroup>
                {/* <ArrowForwardIosIcon className='arrowforwardicion'/> */}
                  </NavDropdown>  
                  <NavDropdown.Divider className='navdrop-divider' />
                 <div className='single-product'>Single Product
                 <FiberNewIcon/></div>
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
                 <NavDropdown.Divider className='navdrop-divider' />
                 <ListGroup.Item className='page-uses'>Cart Page</ListGroup.Item>
                 <NavDropdown.Divider className='navdrop-divider' />
                 <ListGroup.Item className='page-uses'>Checkout Page</ListGroup.Item>
                 <NavDropdown.Divider className='navdrop-divider' />
                 <ListGroup.Item className='page-uses'>Compare Page</ListGroup.Item>
                 <NavDropdown.Divider className='navdrop-divider' />
                 <ListGroup.Item className='page-uses'>Login & Regiter Page</ListGroup.Item>
                 <NavDropdown.Divider className='navdrop-divider' />
                 <ListGroup.Item className='page-uses'>Account Page</ListGroup.Item>
                 <NavDropdown.Divider className='navdrop-divider' />
                 <ListGroup.Item className='page-uses'>Wishlist Page</ListGroup.Item>
                </ListGroup>
            </NavDropdown>
               {/* blog */}
          <NavDropdown title="Blog" id="middle-nav-dropdown">
              <NavDropdown href="#action/3.5" title='Blog Grid' id='blog-title'>
                <ListGroup.Item className='blog-content'>Blog Grid Left sidebar</ListGroup.Item>
                <NavDropdown.Divider className='navdrop-divider' />
               <ListGroup.Item className='blog-content'>Blog Grid Right Sidebar</ListGroup.Item>
                 {/* <ArrowForwardIosIcon className='arrowforwardicion'/>        */}
              </NavDropdown>
               <NavDropdown.Divider className='navdrop-divider' />
              <NavDropdown href="#action/3.6" title='Blog List' id='blog-title' placement='right' >
                <ListGroup.Item className='blog-content'>Blog List Left sidebar</ListGroup.Item>
                <NavDropdown.Divider className='navdrop-divider' />
               <ListGroup.Item className='blog-content'>Blog List Right Sidebar</ListGroup.Item>
                 {/* <ArrowForwardIosIcon className='arrowforwardicion'/> */}
              </NavDropdown>  
              <NavDropdown.Divider className='navdrop-divider' />

              <NavDropdown href="#action/3.7" title='Blog Single' id='blog-title'>
                <ListGroup.Item className='blog-content'>Blog Single Left Sidebar</ListGroup.Item>
                <NavDropdown.Divider className='navdrop-divider' />
               <ListGroup.Item className='blog-content'>Blog Single Right Sidebar</ListGroup.Item>
                {/* <ArrowForwardIosIcon className='arrowforwardicion'/>          */}
              </NavDropdown>
            </NavDropdown>
               {/* contact us */}
                 <div className='contact-content'>Contact</div>
              </div>
                   {/* search */}
              <div className='search-box'>
            <NavDropdown id='search-content'>
            <InputGroup className='searchbox-content'>
              <Form.Control
          placeholder="Recipient's username"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
        />
        <NavDropdown>

          <ListGroup className='allcategoties-lists'>
            <ListItem> All Categoties</ListItem>
            <ListItem> Fresh Food</ListItem>
            <ListItem> -- Fresh Fruit</ListItem>
            <ListItem> ---- Bananas</ListItem>
            <ListItem> ---- Apples & Pears</ListItem>
            <ListItem> ---- Berries & Cherries</ListItem>
            <ListItem> ---- Oranges & Citrus Fruit</ListItem>
            <ListItem> ---- Graps</ListItem>
            <ListItem> ---- Fresh Vegetables</ListItem>
            <ListItem> ---- Potatoes & Sweet Potatoes</ListItem>
            <ListItem> ---- Onions & Leeks</ListItem>
            <ListItem> ---- Carrots & Root Vegetables</ListItem>
            <ListItem> ---- Broccoli & Cauliflower</ListItem>
            <ListItem> ---- Cabbages & Greens</ListItem>
            <ListItem> -- Fresh Salad & Dips</ListItem>
            <ListItem> ---- Lettuce & Salad bags</ListItem>
            <ListItem> ---- Tomatoes</ListItem>
            <ListItem> ---- Cucumber</ListItem>
            <ListItem> ---- Celery</ListItem>
            <ListItem> ----  Peppers</ListItem>
            <ListItem> -- Milk, Butter & Eggs</ListItem>
            <ListItem> ---- Milk</ListItem>
            <ListItem> ---- Spreads & Nargarine</ListItem>           

          </ListGroup>



        </NavDropdown>

        <InputGroup.Text>< SearchIcon className='searchicon-bar'/></InputGroup.Text>
      </InputGroup>
                </NavDropdown>
         <div className='search-containt'>
         
          </div>
           < SearchIcon className='searchicon'/>
             </div>
           {/* call */}
           <div className='call-content'>
            <Nav.Link > 
            <div className='image-content' id='contect-content'>call us:
            <div className='contact-number'>(+800)345678</div>
            </div>
                </Nav.Link>
            </div>
         {/* <div className='call-content'> */}
            <Nav.Link > 
            <div className='amount-content'> <ShoppingBagOutlinedIcon className='shoppingbag'  /> <div className='numbertwo-content'>
                <div className='number-two'>2</div></div>
            
            <div className='number-content'>$20.00</div>
            
            </div>
                </Nav.Link>
               
                {/* </div> */}
          
          </Nav>   
          </div>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Navbarheader