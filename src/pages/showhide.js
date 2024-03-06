import React, { useState } from 'react'


const Showhide = () => {
const [age,setAge]=useState("")
const [show, setShow] = useState("");
const handleShowHide = () => {
    if (show === true) {
      setShow(false);
    } else {
      setShow(true);
    }
  };

  const handleCheckAge = () =>{
    if(age > 18){
        setShow("you are adult")
    }else{
        setShow("you are minor")
    }
  }
  return (
    <>
    <div>
          {show === true && <p>vishal srivastava</p>}
          <button onClick={handleShowHide}>{show ? "HIDE" : "shpw"}</button>

    </div>
    <div className="box_demo">
              <h1>What is Netflix?</h1>
              <button onClick={handleShowHide}>{show ? "hide" : "show"}</button>
    </div>
    
      {show &&
      <div className="content_demo">
        <p>
          Netflix is a streaming service that offers a wide variety of
          award-winning TV shows, movies, anime, documentaries and more – on
          thousands of internet-connected devices. You can watch as much as you
          want, whenever you want, without a single ad – all for one low monthly
          price. There's always something new to discover, and new TV shows and
          movies are added every wee
        </p>
      </div>
} 
<div className="box_demo">
        <input type="number"  name="age" value={age} onChange={(e)=>setAge(e.target.value)}/>
        <button onClick={handleCheckAge}>Check age</button>
    </div>
    <p>{show}</p>
 </>
  )
}

export default Showhide