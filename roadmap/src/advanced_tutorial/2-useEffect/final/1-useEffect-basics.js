import React, { useState, useEffect } from 'react';
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {
  const [value1, setValue1] = useState(0);
  const [value2, setValue2] = useState(0);
  useEffect(() => {
    console.log('call useEffect');
    if (value1 >=1) {
      document.title = `New Messages(${value1})`;
    }
    else if(value2 >=1){
      document.title = `New Messages(${value2})`;
    }
    
  },[value1,value2]);

  console.log('render component');
  return (
    <>
      <h1>{value1}</h1>
      <button className='btn' onClick={() => setValue1(value1 + 1)}>
        click me
      </button>
      <h1>{value2}</h1>
      <button className='btn' onClick={() => setValue2(value2 + 1)}>
        click me
      </button>
    </>
  );
};

export default UseEffectBasics;
