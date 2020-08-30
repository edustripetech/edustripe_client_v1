import React, { useState, useEffect } from 'react';
import './footer.css';
import edustripesmall from '../../assets/images/edustripesmall.png';
import Facebook from '../../assets/svg/Facebook';
import Twitter from '../../assets/svg/Twitter';
import Linkedin from '../../assets/svg/Linkedin';
import Instagram from '../../assets/svg/Instagram';
import RightSide from '../../assets/svg/RightSide';
import EdustripeWhite from '../../assets/svg/EdustripeWhite';
import { Link } from 'react-router-dom';

const Footer = () => {
  const [footerLink, setFooterLink] = useState("none");

  const showLinks = (string) => {
    return footerLink === string ? setFooterLink("none") : setFooterLink(string);
  }

  useEffect(() => {
    const CompanyLinks = document.querySelectorAll('.company');
    const LegalLinks = document.querySelectorAll('.legal');
    const ContactLinks = document.querySelectorAll('.contact');

    [...CompanyLinks, ...LegalLinks, ...ContactLinks].forEach(link => {
      const classValue = Array.from(link.classList).find(value => ["company", "legal", "contact"].includes(value))
      link.classList.remove(`${classValue}-show`);
      link.classList.add(`${classValue}-hide`);
    });

    const Links = document.querySelectorAll(`.${footerLink}`);
    
    Links.forEach(link => {
      link.classList.remove(`${footerLink}-hide`);
      link.classList.add(`${footerLink}-show`);
    });

  }, [footerLink]);

  return (
    <div className="footer-div">
      <div className="footer-inner">
        <div>
          <div className="footer-img">
            <div className="footer-logo">
              <a href="#top">
                <EdustripeWhite />
              </a>
            </div>
            <div className="footer-socials">
              <a href={process.env.facebookUrl || "/"}><Facebook /></a>
              <a href={process.env.twitterUrl || "/"}><Twitter /></a>
              <a href={process.env.linkedInUrl || "/"}><Linkedin /></a>
              <a href={process.env.instagramUrl || "/"}><Instagram /></a>
            </div>
          </div>
        </div>
        <div className="footer-ul-div">
          <ul>
            <li className="head">Company <span onClick={() => showLinks("company")} className={`show-menu ${footerLink === "company" ? "show-menu-company" : ""}`}> <RightSide /> </span></li>
            <Link className="link" to="/about"><li className="company company-hide">About us</li></Link>
            <li className="company company-hide">Blog</li>
            <li className="company company-hide">FAQ</li>    
            <li className="company company-hide">Contact</li>
            <li className="company company-hide">Help</li>
          </ul>
          <ul>
          <li className="head">Legal <span onClick={() => showLinks("legal")} className={`show-menu ${footerLink === "legal" ? "show-menu-legal" : ""}`}><RightSide /></span></li>
          <Link className="link" to="/privacy"><li className="legal legal-hide">Privacy policy</li></Link>
            <li className="legal legal-hide">Term of use</li>
          </ul>
          <ul id="contactUs">
            <li className="head">Contact <span onClick={() => showLinks("contact")} className={`show-menu ${footerLink === "contact" ? "show-menu-contact" : ""}`}><RightSide /></span></li>
            <li className="contact contact-hide">{process.env.addressInfo || "294 Herbert Macaulay,"}</li>
            <li className="contact contact-hide">{process.env.addressCityState || "Yaba, Lagos,"}</li>
            <li className="contact contact-hide">{process.env.addressCountry || "Nigeria"}</li>
            <li className="phoneNumber contact contact-hide">{process.env.phoneNumber || "08025129751"}</li>
            <li className="contact contact-hide">{process.env.email || "info@edustripe.com"}</li>
          </ul>
        </div>
      </div>
        <span className="footeranchor" id="footerAnchor"></span>
    </div>
  );
}

export default Footer;
