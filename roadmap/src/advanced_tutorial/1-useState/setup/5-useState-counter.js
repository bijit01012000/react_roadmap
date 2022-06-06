import React, { useState } from 'react';

const UseStateCounter = () => {
  const [num,setNum] = useState(0);
  const increase = () => {
    setTimeout(() => {
      setNum((num)=> {return num+1})
    }, 2000);
      
  }
  const decrease = () => {
      setNum((num)=>{return num-1});
  }

  return (
    <>
      <h2>useState counter example</h2>;
      <h3>{num}</h3>
      <button className='btn' onClick = {increase}>increase</button>
      <button className='btn' onClick = {decrease}>decrease</button>
      <button className='btn' onClick = {()=>setNum(0)}>reset</button>
    </>
  )};

export default UseStateCounter;
