import React from 'react';
import './footer.css';

import edustripesmall from '../../assets/images/edustripesmall.png';
import Facebook from '../../assets/svg/Facebook';
import Twitter from '../../assets/svg/Twitter';
import Linkedin from '../../assets/svg/Linkedin';

const Footer = () => {
  return (
    <div className="footer-div">
      <div className="footer-inner">
        <div>
          <div className="footer-img">
            <img alt="" src={edustripesmall} />
            <div className="footer-socials">
              <Facebook />
              <Twitter />
              <Linkedin />
            </div>
          </div>
        </div>
        <div className="footer-ul-div">
          <ul>
            <li className="head">Company</li>
            <li>About us</li>
            <li>Blog</li>
            <li>FAQ</li>
            <li>Contact</li>
            <li>Help</li>
          </ul>
          <ul>
            <li className="head">Legal</li>
            <li>Privacy policy</li>
            <li>Term of use</li>
          </ul>
          <ul>
            <li className="head">Contact</li>
            <li>Airport road Ikeja Lagos,</li>
            <li>Nigeria</li>
            <li className="phoneNumber">08099778866</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
