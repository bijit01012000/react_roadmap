import React, { useState } from "react";

const Basics = () => {
  
  const [text, setText] = useState('random text');
  function changeHandler()
  {
    if(text === 'random text')
     setText('hello world');
     else
     setText('random text');
  }
  return (
    <>
      <h1>{text}</h1>
      <button className="btn" onClick = {changeHandler} >change text</button>
    </>
  );
}

export default Basics;
