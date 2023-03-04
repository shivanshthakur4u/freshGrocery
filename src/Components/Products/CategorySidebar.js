import React from 'react'
import img1 from '../../Assets/Images/apple.png'
import img2 from '../../Assets/Images/capsicum.png'
import img3 from '../../Assets/Images/grocery.png'
import img4 from '../../Assets/Images/home.png'
import './CategorySidebar.css'
const CategorySidebar = () => {
  const data=[
    {id:1,
      Categoryimage:img1,
      Categoryname:'Fruits'},
      {id:2,
        Categoryimage:img2,
        Categoryname:'Vegetables'},
        {id:3,
          Categoryimage:img3,
          Categoryname:'Grocery'},
          {id:4,
            Categoryimage:img4,
            Categoryname:'More'},

  ]
  return (
    <div className='categorysidebar'>
    {
      data.map((item)=>{
        return(
          <div className='category'>
          <img src={item.Categoryimage} alt="categoryimages"/>
          <h3>{item.Categoryname}</h3>
          </div>
        )

      })
    }
    </div>
  )
}

export default CategorySidebar