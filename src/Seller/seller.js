import React from 'react'
import '../Seller/seller.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import StarIcon from '@mui/icons-material/Star';
import EuroIcon from '@mui/icons-material/Euro';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShuffleIcon from '@mui/icons-material/Shuffle';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import SearchIcon from '@mui/icons-material/Search';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Sellerimg1 from '../Seller/Sellerimg/product-1.webp'
function Seller() {
  return (
    // sellertitle
    <div className='seller-content'>
        <div className='seller-title'>
            <div className='sellerfirst-title'>Best Sellers</div>
              <div className='leftside-seller'>
               <div className='seller-para'>Add bestselling products to weekly line up</div>
              <div className='rightside-seller'>
                
              <div className='leftt-arrow'><ArrowBackIosIcon className='sellerr-arrow'/> </div>
              <div className='right-arrow'><ArrowForwardIosIcon className='sellerl-arrow'/></div>

              </div>
              </div>
        </div>
        {/* seller product */}
        <div className='sellerfirst-box'>
            <Card id='card-items' >
       <div className='product-img'>
      <Card.Img variant="top"
      className='manago-img'
      
      src={Sellerimg1} 
    
      /> <div className='product-search'> <SearchIcon className='search-icon'/></div>
      </div>
      <Card.Body className='card-product'>
        <h4 className='product-title'>STUDIO DESIGN</h4>
        <p className='product-use'>Juicy Couture Juicy Quilted Ter..</p>
        <div> <StarIcon className='star'/><StarIcon className='star'/><StarIcon className='star'/><StarIcon className='star'/><StarIcon className='star'/></div>
        <div className='product-rate'><EuroIcon className='product-euroicon'/>18.90 <span className='secondproduct-rate'><EuroIcon className='product-euroicon'/>34.21</span></div>
        <div className='product-footer'>
          <div className='add-cart'>ADD TO CART</div>
          <div className='leftside-icon'>
            <ShuffleIcon  className='cross-icon'/> &nbsp;<FavoriteBorderIcon  className='heart-icon'/>
          </div>
        </div>
      </Card.Body>
      
    </Card>
        </div>
       
    </div> 
    // seller products

   
  )
}

export default Seller