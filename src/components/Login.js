import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import './Login.css';
export default class Login extends Component {
  constructor(props)
  {
    super();
    this.state = {error:""};

  }
  handleemail=(event)=>{
    event.preventDefault();
  
  const mailformat = /^[A-Z0-9._%+-]+@([A-Z0-9-]+\.)+[A-Z]{2,4}$/i;
  if(!mailformat.test(event.target.value)){
    this.setState({error:"email is invalid"});

  
  }
  else {
    this.setState({error:""});
  }
}
  render() {
    return (
      <div className="whole">
      <form className="was-validated">
        <h3>Sign In</h3>
        <div className="first">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email" name="email" onChange={this.handleemail}  required
          />{this.state.error}
        </div>
        <div className="first">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" required
          />
        </div>
        <div className="first">
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customCheck1"
            />
            <label className="custom-control-label" htmlFor="customCheck1">
              Remember me
            </label>
          </div>
        </div>
        <div className="d-grid">
          <button type="submit" className="btn btn-success">
            <Link to="/Category">Submit</Link>
          </button>
        </div>
        <p className="forgot-password text-right">
          <Link to="/SignUp">New User?</Link>
        </p>
        <p className="forgot-password text-right">
          <Link to="/FPage">Forgot password?</Link>
        </p>
      </form>
      </div>
    )
  }
}