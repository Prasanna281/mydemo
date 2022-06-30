import React from 'react'
import { Link } from 'react-router-dom'

function Otp() {
  return (
    <>
<div className="first">
    <label>Enter OTP</label>
    <input
      type="number"
      className="form-control"
      name="username"
      placeholder="Enter OTP" pattern="[0-9]{6}" required
    />
  </div>
  <div className="d-grid">
  <button type="submit" className="btn btn-primary">
    <Link to ="/Login">
    Submit
    </Link>
    
  </button>
</div>
</>
  )
}

export default Otp;