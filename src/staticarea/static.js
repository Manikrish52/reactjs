import React from 'react'
import './static.css'
import StaticImg1 from '../staticarea/staticimg/static-icons-1.webp'
import StaticImg2 from '../staticarea/staticimg/static-icons-2.webp'
import StaticImg3 from '../staticarea/staticimg/static-icons-3.webp'
import StaticImg14 from '../staticarea/staticimg/static-icons-4 (1).webp'
function Static() {
  return (
      <div className='static-content'>
        <div className='static-box'>
        <div className='row'>
          {/* first box */}
          <div className='col-sm-6 col-md-6 col-lg-3' >
            <div className='first-box'>
              <img
              className='firststatic-img'
              src={StaticImg1}
              alt='truch-img'
              />
              <div className='static-lable'>
              <h4 className='static-title'>Free Shipping</h4>
              <p className='static-para'>on all ordrers over $ 75.00</p>
            </div>
            </div>
          </div>
          {/* second box */}
              <div className='col-sm-6 col-md-6 col-lg-3' >
            <div className='second-box'>
              <img
              className='secondstatic-img'
              src={StaticImg2}
              alt='net-img'
              />
              <div className='static-lable'>
              <h4 className='static-title'>Free Returns</h4>
              <p className='static-para'>REturns are free within 9 days</p>
            </div>
            </div>
          </div>
          {/* third box*/}
              <div className='col-sm-6 col-md-6 col-lg-3' >
            <div className='third-box'>
              <img
              className='thirdstatic-img'
              src={StaticImg3}
              alt='payment-img'
              />
              <div className='static-lable'>
              <h4 className='static-title'>100% Payment Secure</h4>
              <p className='static-para'>Your payment are safe with us.</p>
            </div>
            </div>
          </div>
          {/* fourth box */}
              <div className='col-sm-6 col-md-6 col-lg-3' >
            <div className='fourth-box'>
              <img
              className='fourthstatic-img'
              src={StaticImg14}
              alt='call-img'
              />
              <div className='static-lable'>
              <h4 className='static-title'>Support 24/7</h4>
              <p className='static-para'>Contact us 24 hours a day</p>
            </div>
            </div>
          </div>
          </div>
        </div>
      </div>
  )
}

export default Static