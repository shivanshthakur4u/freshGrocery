import React from 'react'
import Slider from 'react-slick'
import './BannerSlider.css'
const Bannerslider = () => {
    const data =[
        {
            id:1,
            image:'https://cdn.pixabay.com/photo/2015/05/30/01/18/vegetables-790022_960_720.jpg',
            title:'Fresh Vegetables &  Fruits at your doorstep',
            description:'We deliver Fresh Vegetables &  Fruits at your doorstep',
            button:'',

        },
        {
            id:2,
            image:'https://cdn.pixabay.com/photo/2016/10/27/22/52/apples-1776744_960_720.jpg',
            title:'Fresh Vegetables &  Fruits at your doorstep',
            description:'We deliver Fresh  Fruits  & Vegetables at your doorstep',
            button:'',
            
        }
    ]

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
  return (
    <div className='bannerSlider'>
        <Slider className='bannerSlider' {...settings}>
        {
            data.map((item)=>{
                return(
                    <div className='imagecontainer' key={item.id}>
                    <img src={item.image} alt="noimg"/>
                     <div className='content'>
                     <h1>{item.title}</h1>
                     <p>{item.description}</p>
                     <button>Shop More</button>
                     </div>
                    </div>
                )
            })
        }
        </Slider>
    </div>
  )
}

export default Bannerslider