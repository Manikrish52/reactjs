import React from 'react'
import '../Seller/seller.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
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
            <Card >
      <Card.Img variant="top"
      className='manago-img'
      src={Sellerimg1} />
      <Card.Body>
        <Card.Title></Card.Title>
        <Card.Text>

        </Card.Text>
      
      </Card.Body>
    </Card>
        </div>
    </div>
    // seller products
  )
}

export default Seller