import React, { useState } from 'react'
import axios  from 'axios'

const Task = () => {
    const [username, setUserName]=useState("")
    const [password, setPassword]=useState("")
    const [position, setPosition]=useState("")
    const [count, setCount]=useState("")




    const handleDecrement =()=>{
       setCount(count - 1)
    }
    const handleIncrement =()=>{
       setCount(1 + +count)
    }

    const handlesubmit = ()=>{
        const data = {
            'name':username,
            'pass':password,
            'role':position
        }
            axios
            .post("https://vishal.com", data)
            .then((res) => {
              if (res.status === 200) {
                console.log("data there");
              }
            })
            .catch((Err) => {
              console.error("failed");
            })
    }
  return (
    // post api with payload
    <>
          
        <div>
              <input type='text' name="name" placeholder='username' value={username} onChange={(e) => setUserName(e.target.value)} />
              <input type='text' name="password" placeholder='password' value={password} onChange={(e) => setPassword(e.target.value)} />
            <select type="select" name='select' value={position} onChange={(e) => setPosition(e.target.value)} >
                      <option value="select">select</option>
                      <option value="Admin">ADMIN</option>
                      <option value="manager">MANAGER</option>
                      <option value="user">USER</option>
          </select>
          <button onClick={handlesubmit}>submit</button>
         </div>

         {/* count button */}

         <input type='number' name='count' placeholder='value' value={count} onChange={(e)=>setCount(e.target.value)}/>
         <button onClick={handleIncrement}>increment</button>
         <button onClick={handleDecrement}>decrement</button>
         <p>{count}</p>
         
         </>

  )
}

export default Task