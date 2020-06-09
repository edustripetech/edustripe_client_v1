import React from 'react';
import { Link } from 'react-router-dom';

import './navbar.css';

import edustripeLogo from '../../assets/images/Edustripelogo.png';

const Navbar = () => {
  return (
    <div className="navbar-div">
      <div className="nav-div">
        <div className="logo">
          <Link to="/">
            <img alt="edustripe logo" src={edustripeLogo} />
          </Link>
        </div>
        <div className="navs">
          <ul>
            <li>
              <Link to="/about">
                  About us
              </Link>
            </li>
            <li>
              <Link to="/login">
                Login
              </Link>
            </li>
            <li className="reg">
              <Link to="/signup">
                Register
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
