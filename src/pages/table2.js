import React, { useState } from 'react'

const Table2 = () => {
    const [firstvalue,setFirstValue]= useState("") 
    const [secondvalue,setSecondValue]= useState("")
    const [showresult,setShowResult] = useState("")
    const [symbol ,setSymbol] = useState("")
    const [outputresult,setOutoutResult]= useState(false)

    const handleAddResult = () =>{
        let add = parseInt(firstvalue) + parseInt(secondvalue)  
        setShowResult(add)
        setSymbol("+")
        setOutoutResult(true)
    }
    const handleMinusResult = () =>{
        let minus = parseInt(firstvalue) - parseInt(secondvalue)  
        setShowResult(minus)
        setSymbol("-")
        setOutoutResult(true)
    }
    const handleMultiResult = () =>{
        let multi = parseInt(firstvalue) * parseInt(secondvalue)  
        setShowResult(multi)
        setSymbol("*")
        setOutoutResult(true)
    }
    const handleDivideResult = () =>{
        let divide = parseInt(firstvalue) % parseInt(secondvalue)  
        setShowResult(divide)
        setSymbol("%")
        setOutoutResult(true)
    }
    const handleTableResult = () =>{
        let table = parseInt(firstvalue) + parseInt(secondvalue)  
        setShowResult(table)
        setSymbol("*")
        setOutoutResult(true)
    }
  return (
    <>
    <input type='text' name='one' placeholder='1st value' value={firstvalue} onChange= {(e)=>setFirstValue(e.target.value)}/>
    <input type='text' name='two' placeholder='2nd value' value={secondvalue} onChange={(e)=>setSecondValue(e.target.value)} />
    <button onClick={handleAddResult}>ADD</button>
    <button onClick={handleMinusResult}>minus</button>
    <button onClick={handleMultiResult}>multi</button>
    <button onClick={handleDivideResult}>divide</button>
    <button onClick={handleTableResult}>Table</button>
    {outputresult &&
    <>
    <ul>
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((key) => {
                      return (
                          <li>{showresult * key}</li>
                      )
                  })}


              </ul>
              <p>{firstvalue}{symbol}{secondvalue}={showresult}</p></>
}
    
    </>
  )
}

export default Table2