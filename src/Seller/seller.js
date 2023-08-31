import React from 'react'
import '../Seller/seller.css'
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import StarIcon from '@mui/icons-material/Star';
import EuroIcon from '@mui/icons-material/Euro';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShuffleIcon from '@mui/icons-material/Shuffle';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import SearchIcon from '@mui/icons-material/Search';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Sellerimg1 from '../Seller/Sellerimg/product-1.webp';
import Sellerimg2 from '../Seller/Sellerimg/product-2.webp';
import Sellerimg3 from '../Seller/Sellerimg/product-15.webp';
import Sellerimg4 from '../Seller/Sellerimg/product-3.webp';
import Sellerimg5 from '../Seller/Sellerimg/product-4.webp';
import Sellerimg6 from '../Seller/Sellerimg/product-5.webp';
import Sellerimg7 from '../Seller/Sellerimg/product-6.webp';
import Sellerimg8 from '../Seller/Sellerimg/product-7.webp';
import Sellerimg9 from '../Seller/Sellerimg/product-8.webp';
import Sellerimg10 from '../Seller/Sellerimg/product-9.webp';
import Sellerimg11 from '../Seller/Sellerimg/product-10.webp';
import Sellerimg12 from '../Seller/Sellerimg/product-11.webp';
import Sellerimg13 from '../Seller/Sellerimg/product-12.webp';
import Sellerimg14 from '../Seller/Sellerimg/product-14.webp';
import  {Productitems} from '../Constant/Masterdata'
import {regFormFullData} from '../Constant/Masterdata'


function Seller() {
  const [product,setProduct]=React.useState([]);
  React.useEffect(()=>{
    setProduct(Productitems)
    console.log(regFormFullData)
    console.log(Productitems)
  },[])
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
      
        <div className='full-product'>
            {/* first box */}
          
        <div className='sellerfirst-box'>
          
            <Card id='card-items' >
       <div className='product-img'>
      <Card.Img variant="top"
      className='manago-img'
      
      src={Sellerimg1} 
    
      /> 
      <div className='product-icon'>
      <div className='product-search'> <SearchIcon className='search-icon'/></div>
      </div>
        <h6 className='new-box'>
        <Badge bg="secondary" className='badge-new'>New</Badge>
      </h6>
      </div>
      <Card.Body className='card-product'>
        <h4 className='product-title'>STUDIO DESIGN</h4>
        <p className='product-use'>Juicy Couture Juicy Quilted Ter..</p>
        <div> <StarIcon className='star'/><StarIcon className='star'/><StarIcon className='star'/><StarIcon className='star'/><StarIcon className='star'/></div>
        <div className='product-rate'><EuroIcon className='product-euroicon'/><span className='product-price'>18.90</span> <span className='secondproduct-rate'><EuroIcon className='secondproduct-euroicon'/>34.21</span>
          <Badge bg="secondary" className='badge-offer'>
            <div className='percentage'>-5%</div></Badge>   
        </div>
        <div className='product-footer'>
          <div className='add-cart'>ADD TO CART</div>
          <div className='leftside-icon'>
            <ShuffleIcon  className='cross-icon'/> &nbsp;<FavoriteBorderIcon  className='heart-icon'/>
          </div>
        </div>
      </Card.Body>
      
    </Card>
        </div> 
      
{/* product end */}
        </div>
    </div> 
    // seller products

   
  )
}


export default Seller
