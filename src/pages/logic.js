import React, { useState } from 'react'

const Logic = () => {
    const [role,setRole]=useState("")
    const [roleshow,setRoleShow]=useState("")
    const [theam, setTheam] = useState("");
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [successloginmessege, setSuccessLoginMessage] = useState("");
    const [errorloginmessage, setErrorLoginMessage] = useState("");
    const [tableinput, setTableInput] = useState("");
    const [showtableresult, setShowTableResult] = useState("");
    
    const handleshowtable =()=>{
         setShowTableResult(tableinput)
    }
    

const handletheam = () => {
    if (theam === true) {
      setTheam(false);
    } else {
      setTheam(true);
    }
  };
    

    const handleLogin = () =>{
          setRoleShow(role)
    }
    const handleLogin2 = () =>{
        if(username === "vishal" && password === "123456"){
            setSuccessLoginMessage(true)
        }else{
            setErrorLoginMessage(true)
        }
  }
  const logout = () =>{
     setUserName("")
     setPassword("")
     setSuccessLoginMessage("")
  }
  return (
    // task 1st show show dropdown select in line
    <>    
          <div className="box">
          <select
            class="form-select"
            aria-label="Default select example"
            className="select_p"
            onChange={(e) => setRole(e.target.value)}
            value={role}
          >
            <option selected>select</option>
            <option value="manager">manager</option>
            <option value="admin">admin</option>
            <option value="user">user</option>
          </select>
        <button onClick={handleLogin}>Check age</button>
    </div>
    
          {roleshow &&
          <p>Hello I'm login as:{roleshow}</p>
          }

          {/* theam box */}
          <button onClick={handletheam}>{theam ? "dark mode" : "light mode"}</button>
          {"primt bgos" + theam}
          <div className='theam_box' style={{background:theam ? "black" : "white"}}>
            
          </div>
           {/* login box portal */}
           <div className=''>
            <input type='text' name='username' placeholder='username' value={username} onChange={(e)=>setUserName(e.target.value)}/>
            <input type='text' name='password' placeholder='password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
            <button onClick={handleLogin2}>Login</button>
            {
                successloginmessege == true&&
                <>
                <p>hi vishal</p>
                <button onClick={logout}>Logout</button>
                </>
            }
            {
                errorloginmessage  &&
                <>
                <p>Invalid user name password</p>
               
                </>
            }

           </div>

           {/* table */}
           <input type='text' name='table' placeholder='table' value={tableinput} onChange={(e)=>setTableInput(e.target.value)}/>
           <button onClick={handleshowtable}>showtable</button>
          {showtableresult &&
           <ul>
            {[1,2,3,4,5,6,7,8,9,10].map((key)=>{
                return(
                    <li>{tableinput * key}</li>
                )
            })}
            
            
           </ul>

        
}
          
          </>

  )
}

export default Logic