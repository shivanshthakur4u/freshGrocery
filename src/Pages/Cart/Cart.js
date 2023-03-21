import React from 'react'
import Footer1 from '../../Components/Footer/Footer1'
import Footer2 from '../../Components/Footer/Footer2'
import Navbar from '../../Components/Navbar/Navbar'
import SingleBanner from '../../Components/Banner/SingleBanner'
const Cart = () => {
  return (
    <div>
    <Navbar/>
    <SingleBanner
        heading="My Cart"
        bannerimage= 'https://images.unsplash.com/photo-1610348725531-843dff563e2c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
        />
    Cart
    <Footer1/>
    <Footer2/></div>
  )
}

export default Cart