import React from 'react'
import Bannerslider from '../Components/Banner/Bannerslider'
import HomeCategories from '../Components/Categories/HomeCategories'
import Footer1 from '../Components/Footer/Footer1'
import Footer2 from '../Components/Footer/Footer2'
import Navbar from '../Components/Navbar/Navbar'
import ProductSidebar from '../Components/Products/ProductSidebar'

const Homepage = () => {
  return (
  <div>
    <Navbar page="home"/>
    <Bannerslider />
    <HomeCategories />
    <ProductSidebar />
    <Footer1/>
    <Footer2/>
    <div>Home</div>
  </div>
  )
}

export default Homepage