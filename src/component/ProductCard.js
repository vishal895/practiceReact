import axios from 'axios'
import React, { Fragment, useEffect, useState } from 'react'

const ProductCard = () => {
    const [data, setData]=useState("")
    const [filter, setFilter]=useState(data)

    const getData = () =>{
        axios.get("https://fakestoreapi.com/products")
        .then((res)=>{
            if(res.status === 200){
                console.log("data available",res.data)
                setData(res.data)
                setFilter(res.data)
            }
        })
        .catch((err)=>{
            console.log(err)
        })
    }
        useEffect(()=>{
            getData()
        },[])

        const handlegreaterthan =()=>{
            const filterlist = data.filter((key) => key.price > 100);
            setFilter(filterlist);
            console.log("hello")
        }
        const handlelessthan =()=>{
            const filterlist = data.filter((key) => key.price < 100);
            setFilter(filterlist);
            console.log("hello2")   
        }
    
  return (
    <Fragment> 
        <div>
        <button onClick={handlelessthan}>less than 100</button>
        <button onClick={handlegreaterthan}>greater than 100</button>
      </div>
    {filter.length > 0 && filter.map((key,index)=>{
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