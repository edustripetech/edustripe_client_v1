import React from 'react';
import { Link } from 'react-router-dom'
import './login.css';

import edustripeLogo from '../../assets/images/Edustripelogo.png';

const Login = () => {
  return (
    <div className="login-page">
      <div className="logo">
        <img alt="editripe logo" src={edustripeLogo} />
      </div>
      <p className="welcome-back">Welcome back</p>
      <div className="form-div">
        <form className="login-form">
          <div className="input-div">
            <label htmlFor="email">Email:
            </label>
            <input className="input" type="email" required />
          </div>
          <div className="input-div">
            <label htmlFor="password">Password:
            </label>
            <input  className="input" type="password" required />
          </div>
          <input className="submit" type="submit" value="Sign in" />
        </form>
      </div>
      <div>
        <p className="txt">Don’t have an account? Click here to <Link to="/parent-signup">sign up</Link></p>
      </div>
    </div>
  );
}

export default Login;
