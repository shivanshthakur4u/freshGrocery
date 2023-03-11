import React from 'react'
import veges from '../../Assets/Images/chillie.png'
import '../Footer/Footer1.css'
const Footer1 = () => {
  return (
    <div className='footer1'>

       <div className='left'>
        <img src={veges} alt="veges" />
       </div>
       <div className='right'>
        <h1>Fresh Vegetables & Fruits at your doorstep</h1>
        <p>We deliver Fresh Vegetables & Fruits at your doorstep. </p>
       </div>
    </div>
  )
}

export default Footer1