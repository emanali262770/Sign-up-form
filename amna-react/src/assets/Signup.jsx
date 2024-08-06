import React, { useState } from "react";
import "../App.css";

const Signup = () => {
  
  const data = {
    name: "",
    email: "",
    password: "",
  };
  const [inputdata, setinput] = useState(data);
  let [show,setshow]=useState(false)
  function handler(e) {
    setinput({ ...inputdata, [e.target.name]: e.target.value });
  }
  console.log(inputdata);
const submit=(e)=>{
  
e.preventDefault();
if(!inputdata.name || !inputdata.email || !inputdata.password){
  alert('All Field Are Mandatory')
}
else{
  setshow(true)
  setTimeout(() => {
    setshow(false)
  }, 4000);
}
}
  return (
    <div>
      <form onSubmit={submit}>
        {
          show ?`${inputdata.name} Sign Up Successfully`:null
        }
        <h1>Sign Up</h1>
        
        <div className="inputs">
          <input
            type="text"
            placeholder="Name"
            name="name"
            value={inputdata.name}
            onChange={handler}
          />
          <input
            type="email"
            placeholder="Email"
            name="email"
            value={inputdata.email}
            onChange={handler}
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={inputdata.password}
            onChange={handler}
          />
        </div>
        <div className="btn-con">
          <button className="btn">Sign Up</button>
        </div>
      </form>
    </div>
  );
};

export default Signup;
