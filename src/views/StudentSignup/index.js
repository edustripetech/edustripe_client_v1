import React from 'react';
import { Link } from 'react-router-dom'
import './signupS.css';

import edustripeLogo from '../../assets/images/Edustripelogo.png';

const StudentSignup = () => {
  return (
    <div className="signup-page">
      <div className="logo">
        <img alt="editripe logo" src={edustripeLogo} />
      </div>
      <p className="welcome-back">Create a free account</p>
      <div className="form-div">
        <form className="signup-form">
          <div className="input-div">
            <label htmlFor="fullname">Fullname:
            </label>
            <input className="input" type="text" required />
          </div>
          <div className="input-div">
            <label htmlFor="email">Email:
            </label>
            <input className="input" type="email" required />
          </div>
          <div className="custom-select">
            <label htmlFor="position">Position at school:
            </label>
            <select>
              Select position
              <option className="select-position">Select position</option>
            </select>
          </div>
          <div className="input-div">
            <label htmlFor="phone">Phone number:
            </label>
            <input className="input" type="tel" required />
          </div>
          <div className="input-div">
            <label htmlFor="password">Password:
            </label>
            <input  className="input" type="password" required />
          </div>
          <input className="submit" type="submit" value="Register" />
        </form>
      </div>
      <div>
        <p className="txt">Already have an account? Click here to <Link to="/login">Sign in</Link></p>
      </div>
    </div>
  );
}

export default StudentSignup;
