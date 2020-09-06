import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../../components/Button';
import Input from '../../../components/Input';

import './login.css';
import '../index.css';

import edustripeLogo from '../../../assets/images/Edustripelogo.png';

const Login = () => {
  return (
    <div className="login-page">
      <div className="logo">
        <Link to="/">
          <img alt="edustripeLogo logo" src={edustripeLogo} />
        </Link>
      </div>
      <p className="welcome-back">Welcome back</p>
      <div className="form-div">
        <form className="forms">
          <div className="input-div">
            <Input
              style={{
                border: '1px solid #000',
                borderRadius: '5px',
                height: '2rem',
                padding: '5px',
                outline: 'none',
                width: '17.5rem',
              }}
              name="email"
              type="email"
              className="input"
              label="Email:"
              id="email"
            />
          </div>
          <div className="input-div">
          <Input
              style={{
                border: '1px solid #000',
                borderRadius: '5px',
                height: '2rem',
                padding: '5px',
                outline: 'none',
                width: '17.5rem',
              }}
              name="password"
              type="password"
              className="input"
              label="Password:"
              id="password"
            />
          </div>
          <div>
            <Button
              label='Sign in'
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
                padding: '5px',
                fontSize: '24px',
                textAlign: 'center',
                alignItems: 'center',
                margin: '15px 0',
                width: '18.2rem',
              }}
            />
        </div>
        </form>
      </div>
      <div>
        <p className="txt">Don’t have an account? Sign up as a <Link to="/parent-signup">Parent</Link> or a <Link to="/parent-signup">School</Link></p>
      </div>
    </div>
  );
}

export default Login;
