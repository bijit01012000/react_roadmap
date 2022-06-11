import React, { useState } from "react";
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

const ControlledInputs = () => {
  const [person, setPerson] = useState({name:'',mail:'',age:''});
  
  const [people, setPeople] = useState([]);
  const changeHandler= (e) =>
  {
      const name = e.target.name;
      const value = e.target.value;
      setPerson({...person,[name]:value});
  }
  const submitHandler = (e) => {
    e.preventDefault();
    if (person.name && person.mail && person.age) {
      const newperson = {...person, id: new Date().getTime().toString() };
      console.log(person);
      setPeople((people) => {
        return [...people, newperson];
      });
      // setPerson({name:'',mail:'',age:''});
     
      // console.log(people);
    } else {
      alert("empty values");
    }
  };
  return (
    <>
      <h1>controlled inputs</h1>
      <article className="form">
        <form onSubmit={submitHandler}>
          <div className="form-control">
            <label htmlFor="Name">Name: </label>
            <input
              type="text"
              name="name"
              value={person.name}
              onChange={changeHandler}
              // onChange={(e) => setName(e.target.value)}; for indivisual state change
            />
          </div>
          <div className="form-control">
            <label htmlFor="email">email: </label>
            <input
              type="email"
              name="mail"
              value={person.mail}
              onChange={changeHandler}
            />
          </div>
          <div className="form-control">
            <label htmlFor="Name">age: </label>
            <input
              type="age"
              name="age"
              value={person.age}
              onChange={changeHandler}
            />
          </div>
          <button className="btn" type="submit">
            add person
          </button>
        </form>
      </article>
      {people.map((person) => {
        const { id, name, mail, age } = person;
        return (
          <div className="item" key={id}>
            <h4>{name}</h4>
            <h4>{mail}</h4>
            <h4>{age}</h4>
          </div>
        );
      })}
    </>
  );
};



export default ControlledInputs;
