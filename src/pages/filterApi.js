import React, { useEffect, useState } from "react";
import "../component/common.css";
import axios from "axios";

const FilterApi = () => {
  const [tabledata, setTableData] = useState("");
  const [age, setAge] = useState("");
  const [weight, setWeight] = useState("");
  const [valueToReplace, setValueToReplace] = useState("");
  const [replaceValue, setReplaceValue] = useState("");
  const [searchinput, setSearchInput] = useState(" ");
  const [filterdata, setFilterData] = useState(tabledata);
  const [optionfilter, setOptionFilter] = useState(tabledata);
  const getData = () => {
    axios
      .get("https://dummyjson.com/users?limit=100")
      .then((res) => {
        if (res.status == 200) {
          setTableData(res.data.users);
          setFilterData(res.data.users);
          setOptionFilter(res.data.users);
          console.log("data comming", res.data.users);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  const handlefilter = () => {
    const selectoption = [...tabledata].sort((a, b) => {
      if (optionfilter === "1") {
        console.log(optionfilter,"option1")
        return parseInt(a.age) - parseInt(b.age);
        
      }
       else if (optionfilter === "2") {
        console.log(optionfilter,"option2")
        return +b.age - +a.age;
      } else if (optionfilter === "3") {
        console.log(optionfilter,"option3")
        return +a.weight - +b.weight;
      } else if (optionfilter === "4") {
        console.log(optionfilter,"option4")
        return +b.weight - +a.weight;
      }
      
    });
    setFilterData(selectoption);

    const agefilter = tabledata.filter((key)=> key.age < age)
    const weightfilter = agefilter.filter((key)=> key.weight < weight)
    setFilterData(weightfilter)


   
  };
  const handleReplace = ()=>{
    if(valueToReplace !== "" && replaceValue !==""){
      let text = tabledata.map((key)=>{
        return{
          ...key,
          age: key.age.toString().replace(valueToReplace, replaceValue),
        }
    })
    setFilterData(text)
    setTableData(text)
  }
}
  


 

  const handleSearch =()=>{
        const searchfilter = tabledata.filter((key)=>{
            return key.firstName.toLowerCase().includes(searchinput.toLowerCase())
        })
        setTableData(searchfilter)
        setFilterData(searchfilter);
      }

     
    
  


  
  
  return (
    <>
      <div>
        <input
          type="text"
          name="age"
          placeholder="enter age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <input
          type="text"
          name="weight"
          placeholder="enter weight"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />
        <select
          name="optionfilter"
          value={optionfilter}
          onChange={(e) => setOptionFilter(e.target.value)}
        >
          <option value={"default"}>select sort</option>
          <option value={"1"}>sort by age assending</option>
          <option value={"2"}>sort by age desending</option>
          <option value={"3"}>sort by weight assending</option>
          <option value={"4"}>sort by weight desending</option>
        </select>
        <button onClick={handlefilter}>apply</button>

        <label>replace</label>
        <input type="text" name="valueforreplace" placeholder="enter value" value={valueToReplace} onChange={(e)=>setValueToReplace(e.target.value)}/>
        <input type="text" name="replacevalue" placeholder="enter replace value" value={replaceValue} onChange={(e)=>setReplaceValue(e.target.value)}/>
        <button onClick={handleReplace}>replace</button>

        <input
        type="text"
        placeholder="enter search"
        value={searchinput}
        onChange={(e) => setSearchInput(e.target.value)}
      />
      <button onClick={handleSearch}>search</button>
        
      
      </div>
      <div>
        <table>
          <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>LASTNAME</th>
            <th>AGE</th>
            <th>PHONE.NO</th>
            <th>EMAIL</th>
            <th>WEIGHT</th>
          </tr>
          {filterdata.length > 0 &&
            filterdata.map((key, index) => {
              return (
                <tr key={index}>
                  <td>{key.id}</td>
                  <td>{key.firstName}</td>
                  <td>{key.lastName}</td>
                  <td>{key.age}</td>
                  <td>{key.phone}</td>
                  <td>{key.email}</td>
                  <td>{key.weight}</td>
                </tr>
              );
            })}
        </table>
      </div>
    </>
  );
};

export default FilterApi;
