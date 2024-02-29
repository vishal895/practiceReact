import React, { useState } from "react";
import "../component/common.css";
import axios from "axios";

const Login2 = () => {
  const [name,setName]=useState("")
  const [number,setNumber]=useState("")
  const [pincode,setPincode]=useState("")
  const [locality,setLocality]=useState("")
  const [adress,setAdress]=useState("")
  const [city,setCity]=useState("")
  const [state,setState]=useState("")
  const [landmark,setLandmark]=useState("")
  const [alternative,setAlternative]=useState("")
  const [errorname,setErrorName]=useState("")
  const [errornumber,setErrorNumber]=useState("")
  const [errorpincode,setErrorPincode]=useState("")
  const [errorlocality,setErrorLocality]=useState("")
  const [erroradress,setErrorAdress]=useState("")
  const [errorcity,setErrorCity]=useState("")
  const [errorstate,setErrorState]=useState("")
  const [errorlandmark,setErrorLandmark]=useState("")
  const [erroralternative,setErrorAlternative]=useState("")



  
  const formdata = {
    "username":name,
    "number":number,
    "pincode":pincode,
    "locality":locality,
    "adress":adress,
    "city":city,
    "state":state,
    "landmark":landmark,
    "alternative-no":alternative
  }

  const handleSubmit =(e)=>{
    e.preventDefault()
    

    if(!name){
      setErrorName("please enter name")
      return
    }
    if(!number){
      setErrorNumber("please enter number")
      return
    }
    if( !pincode){
      setErrorPincode("please enter pincode")
      return
    }
    if(!locality){
      setErrorLocality("please enter locality")
      return
    }
    if(!adress){
      setErrorAdress("please enter address")
      return
    }
    if(!city){
      setErrorCity("please enter city")
      return
    }
    if(!state){
      setErrorState("please enter state")
      return
    }
    if(!landmark){
      setErrorLandmark("please enter landmark")
      return
    }
    if(!alternative){
      setErrorAlternative("please enter alternative no")
      return
    }

    // if(!name || !number || !pincode || !locality || !adress || !city || !state || !landmark || !alternative){
    //   seErrorAdress("please enter address"),setErrorAlternative("please enter alternative no"),setErrorName("please enter name"),setErrorNumber("please enter number"),setErrorPincode("please enter pincode"),setErrorLocality("please enter locality"),setErrorCity("please enter city"),setErrorState("please enter state"),setErrorLandmark("please enter landmark")
    //   return
    // } 


   axios.post("https://vishal.com",formdata)
   .then((res)=>{
    if(res.status===200){
      console.log("succes")
    }
   })
   .catch((err)=>{
    console.log("failed")
   })

  }

  return (
    <div className="container">
      <div className="radio">
      <input type="radio" id="css" name="fav_language" value="CSS"/>
      </div>
      <div className="content">
        <div className="">
          <form  onSubmit={handleSubmit}>
            <h3 className="form_heading">ADD A NEW ADREES</h3>
            <div className="content_box">
              <button className="button">
                <span>icon</span>Use my current location
              </button>
              <div className="box_portion">
                <div>
                <div className="input_box">
                  <input type="text" name="name" className="input_text" value={name} onChange={(e)=>setName(e.target.value)}/>
                  <label for="name" className="label_text">
                    Name
                  </label>
                </div>
                <p>{errorname}</p>
                </div>
                <div>
                <div className="input_box">
                  <input type="text" name="name" className="input_text" value={number} onChange={(e)=>setNumber(e.target.value)} />
                  <label for="name" className="label_text">
                    10 digit mobile number
                  </label>
                </div>
                <p>{errornumber}</p>
                </div>
              </div>
              <div className="box_portion">
              <div>
                <div className="input_box">
                  <input type="text" name="pincode" className="input_text" value={pincode} onChange={(e)=>setPincode(e.target.value)} />
                  <label for="name" className="label_text">
                    Pincode
                  </label>
                </div>
                <p>{errorpincode}</p>
              </div>
               <div>
                <div className="input_box">
                  <input type="text" name="locality" className="input_text" value={locality} onChange={(e)=>setLocality(e.target.value)} />
                  <label for="name" className="label_text">
                    Locality
                  </label>
                </div>
                <p>{errorlocality}</p>
                </div>
                
              </div>
              <div className="box_portion">
                <div className="input_box_Textarea">
                  <textarea
                    type="text"
                    name="name"
                    className="input_textarea"
                    rows={4}
                    cols={10}
                    value={adress} 
                    onChange={(e)=>setAdress(e.target.value)}
                  />
                  <label for="name" className="label_text">
                    Adress(Area and State)
                  </label>
                </div>
                <p>{erroradress}</p>
              </div>
              <div className="box_portion">
                <div className="input_box">
                  <input type="text" name="c/d/t" className="input_text" value={city} onChange={(e)=>setCity(e.target.value)}/>
                  <label for="c/d/t" className="label_text">
                    City/District/Town
                  </label>
                </div>
                <p>{errorcity}</p>
                <div className="drop_box">
                <label for="state" className="drop_head">
                    State
                  </label>
                 <select
            class="form-select"
            aria-label="Default select example"
            className="selectstate"
            value={state} 
            onChange={(e)=>setState(e.target.value)}
            
          >
            <option selected>--select state--</option>
            <option value="1">up</option>
            <option value="2">mp</option>
          </select>
                  
                  
                </div>
                <p>{errorstate}</p>
              </div>
              <div className="box_portion">
                <div>
                <div className="input_box">
                  <input type="text" name="landmark" className="input_text" value={landmark} onChange={(e)=>setLandmark(e.target.value)} />
                  <label for="landmark" className="label_text">
                    Landmark(optional)
                  </label>
                </div>
                <p>{errorlandmark}</p>
                </div>
                <div>
                <div className="input_box">
                  <input
                    type="text"
                    name="alternatephone"
                    className="input_text"
                    value={alternative} 
                    onChange={(e)=>setAlternative(e.target.value)}
                  />
                  <label for="alternatephone" className="label_text">
                    Alternate Phone(optional)
                  </label>
                </div>
                <p>{erroralternative}</p>
                </div>
              </div>
              <div className="radio_content">
                <h2 className="radio_head">Address Type</h2>
                <div className="radio">
                  <input
                    type="radio"
                    id="html"
                    name="fav_language"
                    value="HTML"

                  />
                    <label for="html" className="radio_text">Home(All day delivery)</label>
                  <input
                    type="radio"
                    id="html"
                    name="fav_language"
                    value="HTML"
                  />
                    <label for="html" className="radio_text">Work (Delivery between 10AM-5PM)</label>
                </div>
              </div>
              <div className="button_portion">
                <button className="O-btn">SAVE AND DELIVERY HERE</button>
                <button className="T-btn">CANCEL</button>

              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login2;
