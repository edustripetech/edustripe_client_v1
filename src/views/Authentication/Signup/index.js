import React from 'react';
import { Link } from 'react-router-dom';

import RightArrow from '../../../assets/svg/RightArrow';
import edustripeLogo from '../../../assets/images/Edustripelogo.png';
import './signup.css';
import '../index.css';

const Signup = () => {
  return (
    <div className="signup-div">
      <div className="logo">
        <Link to="/">
          <img alt="edustripeLogo logo" src={edustripeLogo} />
        </Link>
      </div>
      <p className="welcome-back">Create a free account</p>
      <div className="input-div">
        <Link to="#">
          <div className="div">
            Teacher <RightArrow />
          </div>
        </Link>
        <Link to="/parent-signup">
          <div className="div">
            Parent <RightArrow />
          </div>
        </Link>
        <Link to="/student-signup">
          <div className="div">
            School <RightArrow />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Signup;
