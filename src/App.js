import React from 'react'
import {Route, Routes, BrowserRouter} from 'react-router-dom'
import Homepage from './Pages/Homepage'
import Notfound from './Pages/Notfound'
import './App.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductPage from './Pages/Product/ProductPage'
function App() {
  return (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Homepage/>}/>
      <Route path='/home' element={<Homepage/>}/>
      <Route path='/product/:prodid' element={<ProductPage/>}/>
      <Route path='*' element={<Notfound/>}/>
    </Routes>
  </BrowserRouter>
  )
}

export default App