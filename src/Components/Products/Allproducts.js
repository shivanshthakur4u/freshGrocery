import React from 'react'
import ProductCard from './ProductCard'
import img1 from '../../Assets/Images/apple.png'
import img2 from '../../Assets/Images/capsicum.png'
import img3 from '../../Assets/Images/grocery.png'
import img4 from '../../Assets/Images/home.png'
import './Allproducts.css'
const Allproducts = () => {
  const products =[
    {
      id:1,
      productsimage :img1,
      productsname:'Product 1',
      counttype:'1 each',
      productprice:100,
      discountpercent:12

    },
    {
      id:2,
      productsimage :img2,
      productsname:'Product 2',
      productprice:100,
      counttype:'1 each',
      discountpercent:12

    },
    {
      id:3,
      productsimage :img3,
      productsname:'Product 3',
      productprice:100,
      counttype:'1 each',
      discountpercent:12

    },
    {
      id:4,
      productsimage :img4,
      productsname:'Product 4',
      productprice:100,
      counttype:'1 each',
      discountpercent:12

    },
  ]
  return (
    <div className='allproducts'>
    <h1>All products</h1>
    <div className='products'>
     {
      products.map((item)=>{
        return(
          <ProductCard key={item.id} data={item} />
        )
      })
     }
     </div>
    </div>
  )
}

export default Allproducts