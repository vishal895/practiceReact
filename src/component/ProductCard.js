import axios from 'axios'
import React, { Fragment, useEffect, useState } from 'react'

const ProductCard = () => {
    const [data, setData]=useState("")

    const getData = () =>{
        axios.get("https://fakestoreapi.com/products")
        .then((res)=>{
            if(res.status === 200){
                console.log("data available",res.data)
                setData(res.data)
            }
        })
        .catch((err)=>{
            console.log(err)
        })
    }
        useEffect(()=>{
            getData()
        },[])
    
  return (
    <Fragment> 
    {data.length > 0 && data.map((key,index)=>{
        return(
            <div className='card_product' key={index}>
            <div className='image_portion'>
                <img src={key.image} alt='image' className='img'/>
            </div>
            <div className='text_portion'>
                <h1 className='card_heading'>{key.title}</h1>
                <p className='card_paragraph'>{key.description}</p>
                <h2 className='card_price'>Price:{key.price}</h2>
            </div>
        </div>
        )
    })}
     </Fragment>
    
  )
}

export default ProductCard