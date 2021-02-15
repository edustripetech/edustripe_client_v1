import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
import Button from '../Button'
import edustripeLogo from '../../assets/images/Edustripelogo.png';
import edustripeLogoWhite from '../../assets/images/All white.png';

const Navbar = ({ logo = "" }) => {
  const [dropDown, setDropDown] = useState('hide');
  // const divRef = useRef(null);
  let buttonRef = null;
  const Ref = (node) => { buttonRef = node;};
  
  const handleClick = () => {
    setDropDown(dropDown === 'hide' ? 'show' : 'hide');
  }
  
  const handleClickOutside = (event) => {
    if (event.target.id !== "hamburger") {
      setDropDown('hide');
    }
  }

  useEffect(() => {
    const divElement = document.getElementsByClassName("dropdown")[0];
    const newClassName = `mobile-${dropDown}`;
    const oldClassName = `mobile-${dropDown === 'hide' ? 'show' : 'hide'}`
    divElement.classList.remove(oldClassName);
    divElement.classList.add(newClassName);
  }, [dropDown]);

  useEffect(() => {
    document.addEventListener('mouseup', handleClickOutside);
    return () => {
      document.removeEventListener('mouseup', handleClickOutside);
    }
  }, []);

  
  return (
    <div className="navbar-div">
      <div className="nav-div">
        <div className="logo">
        <span className="anchor" id="top"></span>
          <Link to="/">
            <img alt="edustripe logo" src={logo === "white" ? edustripeLogoWhite : edustripeLogo} />
          </Link>
        </div>
        <div className="navs desktop-tablet">
          <ul>
            <li>
              <Link to="/about">
                  About us
              </Link>
            </li>
            <li>
              <Link to="#">
                Login
              </Link>
            </li>
            <li className="reg">
              <Link to="#">
                Register
              </Link>
            </li>
          </ul>
        </div>
        <div className="mobile-navs mobile-only">
          <Button
            label='|||'
            Ref={Ref}
            id='hamburger'
            className={`hamburger hamburger-${dropDown}`}
            handleClick={handleClick}
            style={{
              background: 'transparent',
              color: '#000',
              cursor: 'pointer',
              outline: 'none',
              textAlign: 'center',
              alignItems: 'center'
            }}
          />
        </div>
      </div>
      <div className="dropdown mobile-hide">
        <ul>
            <Link to="/about">
          <li>
                About us
          </li>
            </Link>
            <Link to="#">
          <li>
              Login
          </li>
            </Link>
            <Link to="#">
          <li>
              Register
          </li>
            </Link>
        </ul>

      </div>
    </div>
  );
}

export default Navbar;
