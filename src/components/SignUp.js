import React, { Component} from 'react'
import {useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';
export default function SignUp()  {
const initial={firstname: "",lastname: "",username: "",password: ""};  
const[ formvalues, setformvalues]=useState(initial);
const[ formerrors, setformerrors]=useState({});
const[Issubmit,setIssubmit]= useState(false);
const handleChange =(e) => {
console.log(e.target);
const {name ,value} =e.target;
setformvalues({...formvalues, [name]: value });
};
const [email, setemail]=useState("");
const [emailerror, setemailerror]=useState("");
const handleemail=(event)=>{
  event.preventDefault();
setemail(event.target.value);
const mailformat = /^[A-Z0-9._%+-]+@([A-Z0-9-]+\.)+[A-Z]{2,4}$/i;
if(!mailformat.test(event.target.value)){
setemailerror("Email is invalid");
}
else {
  setemailerror("");
}



}

/*
const handlesubmit = (e)=> {
  e.preventDefault();
  setformerrors(validate(formvalues));
  setIssubmit(true);
};
useEffect(() =>{
  console.log(formerrors);
if(Object.keys(formerrors).length === 0 && Issubmit )
{
  console.log(formvalues);
}
},[formerrors]
)
const validate = (values)=>{
const errors ={};
const regex =/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
if(!values.firstname)
{
  errors.firstname="Firstname is required";

}
if(!values.lastname)
{
  errors.lastname="Lastname is required";

}
if(!values.username)
{
  errors.username="Username is required";

}
if(!values.password)
{
  errors.password="Password is required";

}
return errors;
};
*/

    return (
      <div className='whole'>
        <div className='container' style={{paddingTop:"10%"}}>
      <form className="was-validated">
        <h3>Sign Up</h3>
        <div className="first">
          <label>First name</label>
          <input
            type="label"
            className="form-control" name="Please Enter the firstname"
            placeholder="First name" pattern="[a-zA-Z]+" required
          />
        </div>
        <p>{formerrors.firstname}</p>
        <div className="first">
          <label>Last name</label>
          <input type="label" className="form-control" name="lastname" placeholder="Please Enter the Last name"
          pattern="[a-zA-Z]+" required/>
        </div>
        <p>{formerrors.lastname}</p>
        <div className="first">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            name="username"
            placeholder="Enter email" onChange={handleemail} value={email} required
          />{emailerror}
        </div>
        <p>{formerrors.username}</p>
        <div className="first">
          <label>Password</label>
          <input
            type="password"
            className="form-control validate"
            name="password"
            placeholder="Enter password" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" required
          />
          <label>Note: The password must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters</label>
        </div>
        <p>{formerrors.password}</p>
        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            <Link to ="/Category">
            Sign Up
            </Link>
            
          </button>
        </div>
        <p className="forgot-password text-right">
          Already registered <Link to="/Login">Login</Link>
        </p>

      </form>
      </div>
      </div>
    )
  }