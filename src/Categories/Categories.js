import React from 'react'
import '../Categories/Categories.css'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

function Categories() {
  return (
//   {/* categories-content start */}
   <div className='categories-content'>
    
    {/* categories-heading */}
    <div className='categories-heading'>
      Popular Categories
    </div>
    {/* categories details */}
    <div className='categories-para'>
    <div className='categories-left'>Add Popular Categories to weekly line up</div>
      <div className='categories-right'>
        <div className='first-arrow'>
      <ArrowBackIosIcon className='left-arrow' />
      </div>
      <div className='second-arrow'>
      <ArrowForwardIosIcon className='right-arrow' />
      </div>
      </div>
</div>


{/* categories-content end */}
   </div>
  )
}

export default Categories