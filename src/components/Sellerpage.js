import React, { Component } from 'react'
import { useState } from 'react';
import Swal from 'sweetalert2'


export default function SellerPage(){
  const [email, setemail]=useState("");
  const [emailerror, setemailerror]=useState("");
  
  const Swal = require('sweetalert2');
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

  function popup()
  {
    alert("Thank you for filling the details!!");
    window.location.href="./Category";
  }

  
  
  
    return (
        <div className='whole'>
          <div className='container' style={{paddingTop:"10%"}}>
        <form>
          <h3 style={{textAlign:"center",color:"white"}}>Post your AD</h3>
          <div className="first">
          <label>First name</label>
          <input
            type="label"
            className="form-control" name="Please Enter the firstname"
            placeholder="First name" pattern="[a-zA-Z]+" 
          />
        </div>
        <div className="first">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            name="username"
            placeholder="Enter email" onChange={handleemail} value={email} 
          />{emailerror}
        </div>
          <div className="first">
          <label>Choose your category</label>
          <select class="form-control">
            
  <option value="1">Mobiles</option>
  <option value="2">Books</option>
  <option value="3">Furniture</option>
  <option value="4">Laptops</option>
  <option value="5">accessories</option>
</select>

          </div>
          <div>
    <label style={{color:"white"}}>Brand/Company/Title</label>

    <textarea className='form-control' rows={1} cols={4}></textarea>
          <div >
          <div className="first">
          <label>SetPrice</label>
          <input type="label" className="form-control" name="price" placeholder="Please Enter the price"
          pattern="[0-9]+" />
        </div>
    <label style={{color:"white"}}>Description</label>
<textarea className='form-control' rows={5} cols={29}></textarea>

    </div></div>
    
    <div>
      
    <label style={{color:"white"}}>Upload related images</label>
<input type="file" multiple></input>

    </div>
    <div className="d-grid">
  
        <button onclick={popup()}>
          Submit
        </button>
          </div>

        </form>
        </div>
        </div>
      )
}