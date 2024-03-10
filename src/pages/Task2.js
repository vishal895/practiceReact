import React, { useState } from 'react'

const Task2 = () => {
    const [word,setWord]=useState("")
    const [firstvalue,setFirstValue]=useState("")
    const [secondvalue,setSecondValue]=useState("")
    const [result, setResult] = useState("")
    const [show,setShow] =useState(false)
    const [sentence, setSentence] = useState("")
    const [replaceword, setReplaceWord] = useState("")
    const [withword, setWithWord] = useState("")
    const [finalresult, setFinalResult] = useState("")

    


    const handlesumbitLower =()=>{
       let temp = word.toLowerCase()
       setWord(temp)
    }
    const handlesumbitUpper =()=>{
        let temp = word.toUpperCase()
        setWord(temp)
    }
    const handleAdd =()=>{
    
    setResult(+firstvalue + +secondvalue)
    setShow(true) 
    }

    const handleReplace =()=>{
    let result = sentence.replace(replaceword,withword );
   setFinalResult(result)
    }
  return (
    // lower & upper case task
    <>
          
          <div>
              <input type='text' name='name' placeholder='entervalue' value={word} onChange={(e) => setWord(e.target.value)} />
              <button onClick={handlesumbitLower}>Lowewrcase</button>
              <button onClick={handlesumbitUpper}>Uppercase</button>
              <p>{word}</p>
          </div>
          {/* add no with string */}
          <div>
           <input type='text' name='firstvalue' placeholder='1stvalue' value={firstvalue} onChange={(e)=> setFirstValue(e.target.value)}/>
           <input type='text' name='secondvalue' placeholder='2ndvalue' value={secondvalue} onChange={(e)=> setSecondValue(e.target.value)}/>
           <button onClick={handleAdd}>Add</button>
           {show &&
           <p>{result}</p>
}
          </div>

          {/* replace input */}
          <div>
          <input type='text' name='sentence' placeholder='entersentence' value={sentence} onChange={(e)=> setSentence(e.target.value)}/>
           <input type='text' name='Replaceword' placeholder='Replaceword' value={replaceword} onChange={(e)=> setReplaceWord(e.target.value)}/>
           <input type='text' name='withword' placeholder='withword' value={withword} onChange={(e)=> setWithWord(e.target.value)}/>
           <button onClick={handleReplace}>Replace</button>
          </div>
          <p>{finalresult}</p>
          </>
  )
}

export default Task2