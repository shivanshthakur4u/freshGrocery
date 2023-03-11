import React from 'react'
import Pay from '../../Assets/Images/pay.png';
import Logo from '../../Assets/logo.png'
import instagram from '../../Assets/Images/instagram.png'
import facebook from '../../Assets/Images/facebook.png'
import whatsapp from '../../Assets/Images/whatsapp.png'
import '../Footer/Footer2.css'
const Footer2 = () => {
  
  const date =new Date().getFullYear()
  
  return (
    <div className='footer'>
      <div className='footerin1'>
        <div className='f1'>
          <img src={Logo} alt="logo" className='logo' />
          <p>Fresh Grocery is a leading online grocery store in India. we are commited
          to provide you the best quality and fresh products in best price at your doorstep.</p>
        
       <div className='social-icons'>
       <img src={instagram} alt='social' className='social'/>
        <img src={facebook} alt='social' className='social'/>
        <img src={whatsapp} alt='social' className='social'/>
       </div>
</div>
        <div className='f2'>
          <h3>About Us</h3>
          <p>About Us</p>
          <p>Contact Us</p>
          <p>About Team</p>
          <p>Customer Support</p>
        </div>


        <div className='f2'>
        <h3>Our Information</h3>
          <p>Privacy Policy update</p>
          <p>Terms & conditions</p>
          <p>Return Policy</p>
          <p>Site Map</p>
        </div>


        <div className='f2'>
        <h3>Community</h3>
          <p>Announcements</p>
          <p>Answer Center</p>
          <p>Discussion boards</p>
          <p>Giving works</p>
        </div>


        <div className='f2'>
        <h3>Subscribe Now</h3>
          <p>Subscribe your email for newsletter and featured news based on your interest</p>
          <div className='inputcontainer'>
            <span className='icon1'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 13.5h3.86a2.25 2.25 0 012.012 1.244l.256.512a2.25 2.25 0 002.013 1.244h3.218a2.25 2.25 0 002.013-1.244l.256-.512a2.25 2.25 0 012.013-1.244h3.859m-19.5.338V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 00-2.15-1.588H6.911a2.25 2.25 0 00-2.15 1.588L2.35 13.177a2.25 2.25 0 00-.1.661z" />
</svg>

            </span>
            <input type='text' placeholder='Enter your Email' />
            <span className='icon2'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
</svg>

            </span>
          </div>
        </div>
      </div>


      <div className='footerin2'>
        <h3>© Copyright {date}  Fit Grocery, Inc. All right reserved</h3>
        <img src={Pay} alt="payimg" />
      </div>
     
    </div>
  )
}

export default Footer2