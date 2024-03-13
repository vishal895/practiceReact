import React, { useEffect, useState } from 'react'
import "../component/common.css"
import axios from 'axios'


const Snapshot = () => {
    const [snapdata,setSnapData]= useState([])
    const [seachinputvalue,setSeachInputValue]=useState("")

     const getSnapdata = ()=>{
        axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=636e1481b4f3c446d26b8eb6ebfe7127&tags=${!!seachinputvalue? seachinputvalue : "bird"}&per_page=24&format=json&nojsoncallback=1`)
        .then((res)=>{
            if(res.status === 200){
                setSnapData(res.data.photos.photo)
            }
        })
     }
     useEffect(()=>{
       getSnapdata()
     },[])

     useEffect(()=>{
        getSnapdata()
      },[seachinputvalue])

     const handleSearchResult = ()=>{
       getSnapdata()
    //    setSeachInputValue()
     }

     const handlemountainresult = ()=>{
        setSeachInputValue("mountain")
 

     }
     const handlebeachesresult = ()=>{
        setSeachInputValue("beache")
     }
     const handlebirdsresult = ()=>{
        setSeachInputValue("birds")
     }
     const handlefoodresult = ()=>{
        setSeachInputValue("food")
     }
  return (
    <>
    <div className='heading_product'>snapshot</div>
    <input type='text' name='searchinput' placeholder='enter search' value={seachinputvalue} onChange={((e)=>setSeachInputValue(e.target.value))}/>
        <button onClick={handleSearchResult}>search</button>
    <div className='flex'>
        <button onClick={handlemountainresult}>Mountain</button>
        <button onClick={handlebeachesresult}>Beaches</button>
        <button onClick={handlebirdsresult}>Birds</button>
        <button onClick={handlefoodresult}>Food</button>
    </div>

    <div className='grid_product'>
        {snapdata.length && snapdata.map((key)=>{
            return(
                <div className='image_snap'>
               <img src={`https://farm66.staticflickr.com/${key.server}/${key.id}_${key.secret}_m.jpg`} alt='image' className='snap_img'/>
          </div>
            )
        })}
   
    </div>
      </>
  )
}

export default Snapshot