import React from 'react'
import {useState} from 'react';
const Counter = () => {

 const [Count, setCount] = useState(0);
const handleIncrement = ()=>{
    setCount(Count+1)
}
const handleDecrement = ()=>{
    setCount(Count-1)
};
  return (
    <div>  
<h1>{Count}</h1>
<button onClick={handleDecrement}>-</button>&nbsp; &nbsp;
<button onClick={handleIncrement}>+</button>&nbsp; &nbsp;
    
    </div>

  )
}

export default Counter