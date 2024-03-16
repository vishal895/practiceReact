import React, { useEffect, useState } from 'react'
import "../component/common.css"
import axios from 'axios'

const ThreeApi = () => {
    const [productdata,setProductData]= useState([])
    const [categorydata,setCategoryData]= useState([])
    const [usersdata,setUsersData]= useState([])
    const [sortproduct,setSortProduct]= useState("")

    const getProductData = ()=>{
        axios.get("https://api.escuelajs.co/api/v1/products")
        .then((res)=>{
            if(res.status === 200){
                setProductData(res.data)
            }
        })
    }
    const getCategoryData = ()=>{
        axios.get("https://api.escuelajs.co/api/v1/categories")
        .then((res)=>{
            if(res.status === 200){
                setCategoryData(res.data)
            }
        })
    }

    
    const getUserData = ()=>{
        axios.get("https://api.escuelajs.co/api/v1/users")
        .then((res)=>{
            if(res.status === 200){
                setUsersData(res.data)
            }
        })
    }

    const handlesortresult = () =>{
        let sort = [...productdata].sort((a,b)=>{
                if(sortproduct === "1"){
                    return a.price - b.price
                }else if(sortproduct === "2"){
                    return b.price - a.price
                }
            
                   
        })
        setProductData(sort)
    }

    useEffect(()=>{
        getProductData()
        getCategoryData()
       getUserData()
    },[])
  return (
    <>
    <div className='heading_product'>ThreeApi</div>
    <div className=''>
        <div className='flex_three'>
        <h2>Get Product</h2>
        <div>
        <select type="select" value={sortproduct} onChange={(e)=> setSortProduct(e.target.value)}>
            <option value={"default"}>select sort by price</option>
            <option value={"1"}>sort by ass</option>
            <option value={"2"}>sort by des</option>
        </select>
        <button onClick={handlesortresult}>sumbit</button>
        </div>
        </div>
        
        <div className='grid'>
        {productdata.length > 0 && productdata.map((key)=>{
            return (
                <>
                <div>
                <div className='image_threeapi'>
                <img src={key.images} alt='image' className='img'/>
                </div>
                <h3>${key.price}</h3>
                <p>{key.title}</p>
                </div>
                </>
                
            )
        })}
    </div>
        

    </div>
    <div className=''>
    <h2>Get categories</h2>
        <div className='grid'>
        {categorydata.length > 0 && categorydata.map((key)=>{
            return (
                <>
                <div>
                <div className='image_threeapi'>
                <img src={key.image} alt='image' className='img'/>
                </div>
                <p>{key.name}</p>
                </div>
                </>
                
            )
        })}
    </div>
    </div>
    <div className=''>
    <h2>Get users </h2>
        <div className='grid'>
        {usersdata.length > 0 && usersdata.map((key)=>{
            return (
                <>
                <div>
                <div className='image_threeapi'>
                <img src={key.avatar} alt='image' className='img'/>
                </div>
                <h3>${key.name}</h3>
                <p>{key.email}</p>
                </div>
                </>
                
            )
        })}
    </div>
    </div>
      </>

  )
}

export default ThreeApi