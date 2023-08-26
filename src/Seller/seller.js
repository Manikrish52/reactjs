import React from 'react'
import '../Seller/seller.css'
import Button from 'react-bootstrap/Button';
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
        {/* second box */}
         <div className='sellersecond-box'>
            <Card id='card-items' >
       <div className='product-img'>
      <Card.Img variant="top"
      className='juice-img'
      
      src={Sellerimg2} 
    
      />
      <div className='productimg-over'>
          <Card.Img variant="top"
      className='juices-img'
      
      src={Sellerimg3} 
    
      />
      </div>
      
        <div className='product-icon'>
       <div className='product-search'> <SearchIcon className='search-icon'/></div>
       </div>
        <h6 className='new-box'>
        <Badge bg="secondary" className='badge-new'>New</Badge>
      </h6>
      </div>
      <Card.Body className='card-product'>
        <h4 className='product-title'>STUDIO DESIGN</h4>
        <p className='product-use'>New Balance Fresh Foam ka..</p>
        <div> <StarIcon className='star'/><StarIcon className='star'/><StarIcon className='star'/><StarIcon className='star'/><StarIcon className='star'/></div>
        <div className='product-rate'><EuroIcon className='product-euroicon'/><span className='product-price'>18.90</span> <span className='secondproduct-rate'><EuroIcon className='secondproduct-euroicon'/>15.12</span>
        <Badge bg="secondary" className='badge-offer'>
            <div className='discount_content'>-20%</div></Badge> 
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
         {/* third product */}
        <div className='sellersecond-box'>
            <Card id='card-items' >
       <div className='product-img'>
      <Card.Img variant="top"
      className='juice-img'
      
      src={Sellerimg4} 
    
      />
      <div className='productimg-over'>
          <Card.Img variant="top"
      className='juice-img'
      
      src={Sellerimg5} 
    
      />
      </div>
      
        <div className='product-icon'>
       <div className='product-search'> <SearchIcon className='search-icon'/></div>
       </div>
        <h6 className='new-box'>
        <Badge bg="secondary" className='badge-new'>New</Badge>
      </h6>
      </div>
      <Card.Body className='card-product'>
        <h4 className='product-title'>GRAPHIC CORNER</h4>
        <p className='product-use'>Brixton Patrol All Terrain Ano..</p>
        <div> <StarIcon className='star'/><StarIcon className='star'/><StarIcon className='star'/><StarIcon className='star'/><StarIcon className='star'/></div>
        <div className='product-rate'><EuroIcon className='product-euroicon'/><span className='product-pricerate'>18.90</span></div>
        <div className='product-footer'>
          <div className='add-cart'>ADD TO CART</div>
          <div className='leftside-icon'>
            <ShuffleIcon  className='cross-icon'/> &nbsp;<FavoriteBorderIcon  className='heart-icon'/>
          </div>
        </div>
      </Card.Body>
      
    </Card>
        </div>

        {/* fouth product  */}
  <div className='sellerfirst-box'>
            <Card id='card-items' >
       <div className='product-img'>
      <Card.Img variant="top"
      className='manago-img'
      
      src={Sellerimg6} 
    
      /> 
      <div className='product-icon'>
      <div className='product-search'> <SearchIcon className='search-icon'/></div>
      </div>
        <h6 className='new-box'>
        <Badge bg="secondary" className='badge-new'>New</Badge>
      </h6>
      </div>
      <Card.Body className='card-product'>
        <h4 className='product-title'>GRAPHIC CORNER</h4>
        <p className='product-use'>Juicy Couture Tricot Logo Strip..</p>
        <div> <StarIcon className='star'/><StarIcon className='star'/><StarIcon className='star'/><StarIcon className='star'/><StarIcon className='star'/></div>
        <div className='product-rate'><EuroIcon className='product-euroicon'/> <span className='product-pricerate'>18.90</span>      
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

        {/* fifth product */}
         <div className='sellerfirst-box'>
            <Card id='card-items' >
       <div className='product-img'>
      <Card.Img variant="top"
      className='manago-img'
      
      src={Sellerimg7} 
    
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
        <p className='product-use'>New Balance Arishi Sport V1</p>
        <div> <StarIcon className='star'/><StarIcon className='star'/><StarIcon className='star'/><StarIcon className='star'/><StarIcon className='star'/></div>
        <div className='product-rate'><EuroIcon className='product-euroicon'/><span className='product-pricerate'>18.90</span>
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

        {/* sixth product */}
        <div className='sellersecond-box'>
            <Card id='card-items' >
       <div className='product-img'>
      <Card.Img variant="top"
      className='juice-img'
      
      src={Sellerimg8} 
    
      />
      <div className='productimg-over'>
          <Card.Img variant="top"
      className='juice-img'
      
      src={Sellerimg9} 
    
      />
      </div>
      
        <div className='product-icon'>
       <div className='product-search'> <SearchIcon className='search-icon'/></div>
       </div>
        <h6 className='new-box'>
        <Badge bg="secondary" className='badge-new'>New</Badge>
      </h6>
      </div>
      <Card.Body className='card-product'>
        <h4 className='product-title'>GRAPHIC CORNAR</h4>
        <p className='product-use'>Fila Locker Room Varsity Jacket</p>
        <div> <StarIcon className='star'/><StarIcon className='star'/><StarIcon className='star'/><StarIcon className='star'/><StarIcon className='star'/></div>
        <div className='product-rate'><EuroIcon className='product-euroicon'/><span className='product-pricerate'>18.90</span>
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
        {/* seventh product */}
         <div className='sellerfirst-box'>
            <Card id='card-items' >
       <div className='product-img'>
      <Card.Img variant="top"
      className='manago-img'
      
      src={Sellerimg10} 
    
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
        <p className='product-use'>Water And Wind REsistant Ins..</p>
        <div> <StarIcon className='star'/><StarIcon className='star'/><StarIcon className='star'/><StarIcon className='star'/><StarIcon className='star'/></div>
        <div className='product-rate'><EuroIcon className='product-euroicon'/><span className='product-pricerate'>18.90</span>
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

        {/* eight product */}
           <div className='sellerfirst-box'>
            <Card id='card-items' >
       <div className='product-img'>
      <Card.Img variant="top"
      className='manago-img'
      
      src={Sellerimg11} 
    
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
        <p className='product-use'>New Luxury MEn's Slim Fit Shi..</p>
        <div> <StarIcon className='star'/><StarIcon className='star'/><StarIcon className='star'/><StarIcon className='star'/><StarIcon className='star'/></div>
        <div className='product-rate'><EuroIcon className='product-euroicon'/> <span className='product-pricerate'>29.90</span>
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

        {/* ninth product */}
           <div className='sellersecond-box'>
            <Card id='card-items' >
       <div className='product-img'>
      <Card.Img variant="top"
      className='juice-img'
      
      src={Sellerimg12} 
    
      />
      <div className='productimg-over'>
          <Card.Img variant="top"
      className='juice-img'
      
      src={Sellerimg13} 
    
      />
      </div>
      
        <div className='product-icon'>
       <div className='product-search'> <SearchIcon className='search-icon'/></div>
       </div>
        <h6 className='new-box'>
        <Badge bg="secondary" className='badge-new'>New</Badge>
      </h6>
      </div>
      <Card.Body className='card-product'>
        <h4 className='product-title'>STUDIO DESIGN</h4>
        <p className='product-use'>Originals Kaval Windbreaker..</p>
        <div> <StarIcon className='star'/><StarIcon className='star'/><StarIcon className='star'/><StarIcon className='star'/><StarIcon className='star'/></div>
        <div className='product-rate'><EuroIcon className='product-euroicon'/> <span className='product-price'>23.90</span><span className='secondproduct-rate'><EuroIcon className='secondproduct-euroicon'/>21.51</span>
        <Badge bg="secondary" className='badge-offer'>
            <div className='percentage'>-10%</div></Badge> 
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
        {/* 10th product */}
          <div className='sellersecond-box'>
            <Card id='card-items' >
       <div className='product-img'>
      <Card.Img variant="top"
      className='juice-img'
      
      src={Sellerimg5} 
    
      />
      <div className='productimg-over'>
          <Card.Img variant="top"
      className='juice-img'
      
      src={Sellerimg4} 
    
      />
      </div>
      
        <div className='product-icon'>
       <div className='product-search'> <SearchIcon className='search-icon'/></div>
       </div>
        <h6 className='new-box'>
        <Badge bg="secondary" className='badge-new'>New</Badge>
      </h6>
      </div>
      <Card.Body className='card-product'>
        <h4 className='product-title'>STUDIO DESIGN</h4>
        <p className='product-use'>Brixton Patrol All Terrain Anor..</p>
        <div> <StarIcon className='star'/><StarIcon className='star'/><StarIcon className='star'/><StarIcon className='star'/><StarIcon className='star'/></div>
        <div className='product-rate'><EuroIcon className='product-euroicon'/><span className='product-pricerate'>18.90</span>
       
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

        {/* 11th product */}
           <div className='sellerfirst-box'>
            <Card id='card-items' >
       <div className='product-img'>
      <Card.Img variant="top"
      className='manago-img'
      
      src={Sellerimg14} 
    
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
        <p className='product-use'>Madden By Steve Madden Cale 6</p>
        <div> <StarIcon className='star'/><StarIcon className='star'/><StarIcon className='star'/><StarIcon className='star'/><StarIcon className='star'/></div>
        <div className='product-rate'><EuroIcon className='product-euroicon'/><span className='product-price'>11.90</span> <span className='secondproduct-rate'><EuroIcon className='secondproduct-euroicon'/>10.12</span>
          <Badge bg="secondary" className='badge-offer'>
            <div className='percentage'>-15%</div></Badge>   
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

        {/* 12th product */}
          <div className='sellersecond-box'>
            <Card id='card-items' >
       <div className='product-img'>
      <Card.Img variant="top"
      className='juice-img'
      
      src={Sellerimg3} 
    
      />
      <div className='productimg-over'>
          <Card.Img variant="top"
      className='juice-img'
      
      src={Sellerimg2} 
    
      />
      </div>
      
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
        <div className='product-rate'><EuroIcon className='product-euroicon'/> <div className='product-price'><span className='product-pricerate'>35.90</span></div> <span className='secondproduct-rate'><EuroIcon className='secondproduct-euroicon'/>34.11</span>
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