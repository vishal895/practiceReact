import React, { useState } from "react";

const Yourmaster = () => {
  const [taskvalue, setTaskValue] = useState("");
  const [listvalue, setListValue] = useState([]);
  

  const handleADD = () => {
    setListValue([...listvalue,taskvalue]);
    setTaskValue("")
  };
//   const handleRemove = (index) => {
//     let copytask = [...listvalue]
//   copytask.splice(index,1)
//   setListValue(copytask)

//   };
const handleRemove = (key) => {
    let updatedList = listvalue.filter((i) => i !== key);
    setListValue(updatedList);
  };
  return (
    <div className="todo_card">
      <h1>To-do list</h1>
      <div className="input_portion">
        <input
          type="text"
          name="todo"
          placeholder="enter task"
          value={taskvalue}
          onChange={(e) => setTaskValue(e.target.value)}
        />
        <button onClick={handleADD}>ADD</button>
      </div>
      <div className="output_portion">
        <h2>Here is your task list</h2>
      </div>
      
      {listvalue && listvalue.length > 0 &&
        listvalue.map((key,index) => {
          return (
            <>
              <div className="input_portion" key={index}>
                <h1>{key}</h1>
                <button onClick={()=>handleRemove(key)}>Remove</button>
              </div>
            </>
          );
        })}
    </div>
  );
};

export default Yourmaster;
