import React, { useEffect, useState } from 'react'
import "../component/common.css"
import axios from 'axios'

const Productfilter = () => {
    const [productdata,setProductData]=useState([])
    const [filterdata, setFilterData] = useState(productdata);
    const [searchinput,setSearchInput] = useState("")
    const [selectsortvalue,setSelectSortValue]=useState("")
    const [maximuminputvalue,setMaximumInputValue]=useState("")
    const [minimuminputvalue,setMinimumInputValue]=useState("")
    const [selectcategory,setSelectCategory]=useState("")

    const getProductData = () =>{
        axios.get("https://fakestoreapi.com/products")
        .then((res)=>{
            if(res.status === 200){
                setProductData(res.data)
                setFilterData(res.data)
            }
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    useEffect(()=>{
     getProductData()
    },[])
   
    const handleSearch = ()=>{
        let SearchResult = productdata.filter((key)=>{ 
            return key.title.toLowerCase().includes(searchinput.toLowerCase())
        })
        
        setFilterData(SearchResult)
    }

    const handleSortPrice = ()=>{
     let SortedResult = [...productdata].sort((a,b)=>{
        if(selectsortvalue === "1"){
            return a.price - b.price  
        }
        
        else if(selectsortvalue === "2"){
            return b.price - a.price  
        }
        
     })
     
     setFilterData(SortedResult)
    }

    const handlePriceRange = ()=>{
        let RangeMinimumResult = productdata.filter((key)=> key.price > minimuminputvalue)
        let RangeFinalResult = RangeMinimumResult.filter((key)=> key.price < maximuminputvalue)
        setFilterData(RangeFinalResult)
    }

    const handleCategory = () =>{
        let SortCategory;
        if(selectcategory === "default"){
            SortCategory = productdata
            console.log("product",productdata)

        }else{

        SortCategory = [...productdata].filter((key)=>{
            if(selectcategory === "1"){
                return key.category === "men's clothing"
            }else if(selectcategory === "2"){
                return key.category === "women's clothing"
            }else if(selectcategory === "3"){
                return key.category === "electronics"
            }else if(selectcategory === "4"){
                return key.category === "jewelery"
            }
        })
        console.log(SortCategory,"hgsdjj")
        setFilterData(SortCategory)
    }
}
     const handleALLFilter = ()=>{

        

        let SortedResult = [...productdata].sort((a,b)=>{
            if(selectsortvalue === "1"){
                return a.price - b.price  
            }
            
            else if(selectsortvalue === "2"){
                return b.price - a.price  
            }
            
         })
         let RangeMinimumResult = SortedResult.filter((key)=> key.price > minimuminputvalue)
        let RangeFinalResult = RangeMinimumResult.filter((key)=> key.price < maximuminputvalue)
        let SortCategory = [...RangeFinalResult].filter((key)=>{
            if(selectcategory === "1"){
                return key.category === "men's clothing"
            }else if(selectcategory === "2"){
                return key.category === "women's clothing"
            }else if(selectcategory === "3"){
                return key.category === "electronics"
            }else if(selectcategory === "4"){
                return key.category === "jewelery"
            }
        })
        setFilterData(SortCategory)
    }
     
 

  return (
    <>
    <div className='heading_product'>product filter page</div>
    <div className='flex'>
    <input type='text' name='searchinput' placeholder='search product here' value={searchinput} onChange={(e)=>setSearchInput(e.target.value)}/>
    <button onClick={handleSearch}>Search</button>
     
     <div className=''>
        <select type="select" value={selectsortvalue}  onChange={(e)=>setSelectSortValue(e.target.value)}>
            <option value="">Select price</option>
            <option value="1">select Price Assending</option>
            <option value="2">select Price Desending</option>
        </select>
        <button onClick={handleSortPrice}>Sort Price</button>
     </div>
     <div className='flex'>
        <p>PriceRange</p>
        <label>minimum</label>
        <input type='text' name='minimumValue' value={minimuminputvalue} onChange={(e)=> setMinimumInputValue(e.target.value)}/>
        <label>maximum</label>
        <input type='text' name='maximumValue' value={maximuminputvalue} onChange={(e)=> setMaximumInputValue(e.target.value)}/>
        <button onClick={handlePriceRange}>SubmitPriceRange</button>
     </div>
     <div className='flex'>
        <p>category</p>
        <select type="select" value={selectcategory}  onChange={(e)=>setSelectCategory(e.target.value)}>
            <option value="default">Select category</option>
            <option value="1">select mens's clothings</option>
            <option value="2">select women's clothings</option>
            <option value="3">select electronic</option>
            <option value="4">select jewelery</option>
        </select>
        <button onClick={handleCategory}>Sort category</button>
     </div>

     </div>

     <button onClick={handleALLFilter}>ALL filter apply</button>

    <div className='grid_product'>
    {filterdata.length > 0 && filterdata.map((key)=>{
        return(
            
            <div className='card_productCard'>
               <div className='image_port'>
                   <img src={key.image} alt='image' className='img_prod'/>
               </div>
               <div className='content_prod'>
                   <h1 className='heading_prod'>{key.title}</h1>
                   <p className='para_prod'>{key.description}</p>
                   <div className='flex_prod'>
                   <h1 className='cat_prod'>Cat:{key.category}</h1>
                   <h1 className='price_prod'>Price:{key.price}</h1>
                   </div>
                   
               </div>
            </div>
           
        )
    })}
    </div>
    
      </>
  )
}

export default Productfilter