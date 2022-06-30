import React, { useState } from 'react'
import { Link } from 'react-router-dom';

function FPage() {

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

  return (
<>
<div className="first">
    <label>Email address</label>
    <input
      type="email"
      className="form-control"
      name="username"
      placeholder="Enter email" onChange={handleemail} value={email} required
    />{emailerror}
  </div>
  <div className="d-grid">
  <button type="submit" className="btn btn-primary">
    <Link to ="/Otp">
    Get OTP
    </Link>
    
  </button>
</div>
</>
  )
}

export default FPage;