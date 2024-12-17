"use client"
import { useState } from 'react';


const State= () => {
  const [count,setCount] = useState (0);
  const handleincrement = ()=>{
    setCount(count + 1)
  }
  const handleDecrement = ()=>{
    setCount(count - 1)
  }
  

  return (
    <div>
      <h1 className='text-5xl'>{count}</h1>
      <button className="py-3 px-14 bg-orange-600 text-white rounded-md ml-8"onClick={handleincrement}>Increment</button>
      <button className="py-3 px-14 bg-green-800 text-white rounded-md ml-8"onClick={handleDecrement}>Decrement</button>
    </div>
  );
};

export default State;
