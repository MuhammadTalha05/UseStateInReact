import React, { useState } from 'react'

const Increment = () => {

    const [inc, setInc] = useState(0);

    let incHandler = ()=>{
        setInc(inc+1);
    }

    let dicHandler =(()=>{
        if(inc>0)
        {
            setInc(inc-1);
        } 
    })

    let resetHandler = (()=>{
        setInc(0)
    })

  return (
    <>
        <h1>{inc}</h1>
        <button onClick={incHandler}>Increment</button>
        <button onClick={dicHandler}>Decrement</button>
        <button onClick={resetHandler}>Reset</button>
    </>
  )
}

export default Increment;
