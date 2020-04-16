import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../../components/Button';
import Input from '../../../components/Input';

import './signupS.css';
import '../index.css';

import edustripeLogo from '../../../assets/images/Edustripelogo.png';

const inputStyle = {
  border: '1px solid #000',
  borderRadius: '5px',
  height: '2rem',
  padding: '5px',
  outline: 'none',
  width: '17.5rem',
};

const StudentSignup = () => {
  return (
    <div className="signup-page">
      <div className="logo">
        <Link to="/">
          <img alt="editripe logo" src={edustripeLogo} />
        </Link>
      </div>
      <p className="welcome-back">Create a free student account</p>
      <div className="form-div">
        <form className="forms">
          <div className="input-div">
            <Input
              style={inputStyle}
              name="fullname"
              type="text"
              className="input"
              label="Fullname:"
              id="fullname"
            />
          </div>
          <div className="input-div">
            <Input
              style={inputStyle}
              name="email"
              type="email"
              className="input"
              label="Email:"
              id="email"
            />
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
            <Input
              style={inputStyle}
              name="phone"
              type="phone"
              className="input"
              label="Phone number:"
              id="phone"
            />
          </div>
          <div className="input-div">
            <Input
              style={inputStyle}
              name="password"
              type="password"
              className="input"
              label="Password:"
              id="password"
            />
          </div>
          <Button
            label='Register'
            type='submit'
            id='submit'
            className="submit"
            style={{
              background: '#109CF1',
              color: '#fff',
              cursor: 'pointer',
              borderRadius: '5px',
              border: '1px solid #109CF1',
              outline: 'none',
              height: '2rem',
              padding: '5px',
              height: '2.5rem',
              fontSize: '24px',
              textAlign: 'center',
              alignItems: 'center',
              margin: '15px 0',
              width: '18.2rem',
            }}
          />
        </form>
      </div>
      <div>
        <p className="txt">Already have an account? Click here to <Link to="/login">Sign in</Link></p>
        <p className="txt">Not a student? Click here to <Link to="/parent-signup">Register</Link> as a parent</p>
      </div>
    </div>
  );
}

export default StudentSignup;
