import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
import Button from '../Button'
import edustripeLogo from '../../assets/images/Edustripelogo.png';

const Navbar = () => {
  const [dropDown, setDropDown] = useState('hide');
  // const divRef = useRef(null);
  let buttonRef = null;
  const Ref = (node) => { buttonRef = node;};
  
  const handleClick = () => {
    setDropDown(dropDown === 'hide' ? 'show' : 'hide');
  }
  
  const handleClickOutside = (event) => {
    console.log(event.target, event.target.id)
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
  // console.log(divRef, divRef && divRef.current && divRef.current.style.display);
  
  return (
    <div className="navbar-div">
      <div className="nav-div">
        <div className="logo">
          <Link to="/">
            <img alt="edustripe logo" src={edustripeLogo} />
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
        <div className="mobile-navs mobile-only">
          <Button
            label='|||'
            Ref={Ref}
            id='hamburger'
            className={`hamburger hamburger-${dropDown}`}
            handleClick={handleClick}
            style={{
              background: '#fff',
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
            <Link to="/login">
          <li>
              Login
          </li>
            </Link>
            <Link to="/signup">
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
