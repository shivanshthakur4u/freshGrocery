import React, { useEffect, useState } from 'react';
import { Route, useParams } from 'react-router-dom';
import img1 from '../../Assets/Images/apple.png';
import img2 from '../../Assets/Images/capsicum.png';
import img3 from '../../Assets/Images/chillie.png'
const ProductPage = () => {
    const {prodid} = useParams();
    const {images, setimages}=useState(null);
    const {productData, setproductData}=useState(null);
    const {activeimg, setactiveimg}=useState(null);

    const getproductdatabyid = async()=>{
        let temp ={
            'code':200,
            'message':'Success',
            "Data":[
                {
                    'ProductId':1,
                    'ProductName':'Product 1',
                    'ProductDescription':'Product 1 Description',
                    'ProductImages':[
                        {
                            id:1,
                            image:img1,
                        },
                        {
                            id:2,
                            image:img2,
                        },
                        {
                            id:3,
                            image:img3,
                        },
                    
                    ],

                }
            ]
        }

        if(temp.code === 200){
            setimages(temp.Data[0].ProductImages)
            setproductData(temp.Data[0])
            setactiveimg(temp.Data[0].ProductImages[0])
        }
    }

    useEffect(()=>{
        getproductdatabyid()
    },[])
  return (
    <div>
        <h1>Product id is-{prodid}</h1>
        <p>{JSON.stringify(productData)}</p>
    </div>
  )
}

export default ProductPage