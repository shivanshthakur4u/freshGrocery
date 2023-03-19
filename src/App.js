import React from 'react'
import {Route, Routes, BrowserRouter} from 'react-router-dom'
import Homepage from './Pages/Homepage'
import Notfound from './Pages/Notfound'
import './App.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductPage from './Pages/Product/ProductPage'
import About from './Pages/Extras/About'
import Contact from './Pages/Extras/Contact'
import Login from './Pages/Auth/Login'
import Register from './Pages/Auth/Register'
import Forgot from './Pages/Auth/Forgot'
function App() {
  return (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Homepage/>}/>
      <Route path='/home' element={<Homepage/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/product/:prodid' element={<ProductPage/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/forgot' element={<Forgot/>}/>
      <Route path='*' element={<Notfound/>}/>
    </Routes>
  </BrowserRouter>
  )
}

export default App