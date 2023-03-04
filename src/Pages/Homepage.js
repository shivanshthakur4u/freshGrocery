import React from 'react'
import Bannerslider from '../Components/Banner/Bannerslider'
import HomeCategories from '../Components/Categories/HomeCategories'
import Navbar from '../Components/Navbar/Navbar'
import ProductSidebar from '../Components/Products/ProductSidebar'

const Homepage = () => {
  return (
  <div>
    <Navbar/>
    <Bannerslider />
    <HomeCategories />
    <ProductSidebar />
    <div>Home</div>
  </div>
  )
}

export default Homepage