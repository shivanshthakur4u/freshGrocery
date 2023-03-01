import React from 'react'
import Bannerslider from '../Components/Banner/Bannerslider'
import HomeCategories from '../Components/Categories/HomeCategories'
import Navbar from '../Components/Navbar/Navbar'

const Homepage = () => {
  return (
  <div>
    <Navbar/>
    <Bannerslider />
    <HomeCategories />
    <div>Home</div>
  </div>
  )
}

export default Homepage