import React, { useEffect } from 'react';
import Navbar from '../../components/Navbar';
import Button from '../../components/Button';
import Footer from '../../components/Footer';
import { Link } from 'react-router-dom';
import './home.css';

import heroImg from '../../assets/images/firsthero.png';
import verticalTri from '../../assets/images/verticalrectangle.png';
import secondhero from '../../assets/images/secondhero.png';
import polygon from '../../assets/images/Polygon.png';
import bankbuilding from '../../assets/images/bankbuilding.png';
import cloudstorage from '../../assets/images/cloudstorage.png';
import learning from '../../assets/images/learning.png';
import medicalhistory from '../../assets/images/medicalhistory.png';
import laptopanalytic from '../../assets/images/laptopanalytic.png';
import creditcard from '../../assets/images/credit_card_24px_outlined.svg';

// Design elements
import {
  Dots,
  PacmanCircle,
  KiteElement,
  Circles,
  BigCircle,
  FlowerElement, 
  FanLikeElement,
  PolygonElement,
  SquareAndInvertedTriangle,
  SquareAndCircle,
  SquareAndCircle2,
  PlusElement,
  MobileDots,
  MobileCircles,
  MobileFlowerElement
} from '../../assets/svg/DesignElements';

import { BusinessDay, TechCity, InnovationVillage, Meristem, Monnify, DisruptAfrica, SterlingBank } from "../../assets/svg";

const Home = () => {
  const highlightContactInfo = () => {
    const footerContainer = document.getElementById("contactUs");
    footerContainer.classList.add("highlightContactInfo");
    setTimeout(() => {
      footerContainer.classList.remove("highlightContactInfo");
    }, 1500)
  }
  return (
    <div className="homa-page">
      <Navbar />
      <section className="sec-one-section">
        <div className="sec-one">
          <div className="content-left">
            <div className="lefts">
              <h1>A Simple Tool For Managing Your Educational Goals</h1>
            </div>
            <div className="lefts">
              <p>Edustripe improves already existing educational systems using the very best
technologies, making them more efficient, fast and 100% stress free. Our tools are built into one simple,
flexible and reliable platform.</p>
            </div>
            <div className="lefts">
            <span className="btnanchor" id="signup"></span>
            <a className="get-started" target="_blank" href="https://app.edustripe.com/signup">
              <Button
                label='Get Started'
                id='register'
                className="register desktop-tablet"
                style={{
                  background: '#007EFF',
                  color: '#fff',
                  cursor: 'pointer',
                  borderRadius: '5px',
                  border: '1px solid #109CF1',
                  outline: 'none',
                  padding: window.innerWidth > 2000 ? '18px 30px' : '12px 20px',
                  fontSize: window.innerWidth > 2000 ? '26px' :'13px',
                  textAlign: 'center',
                  alignItems: 'center',
                  margin: '15px 0',
                  display: 'flex',
                  justifyContent: 'center'
                }}
              />
              <Button
                label='Get Started'
                id='register'
                className="register mobile-only"
                style={{
                  background: '#007EFF',
                  color: '#fff',
                  cursor: 'pointer',
                  borderRadius: '5px',
                  border: '1px solid #109CF1',
                  outline: 'none',
                  padding: '9px 40px',
                  width: '200px',
                  fontSize: '13px',
                  textAlign: 'center',
                  alignItems: 'center',
                  margin: '15px 0 25px 0',
                  justifyContent: 'center'
                }}
              />
            </a>
            </div>
          </div>
          <div className="hero-div">
            <div className="dot-element-container mobile-only">
              <div className="dot-element">
                <MobileDots />
              </div>
            </div>
            <img className="hero-img" id="hero-img" alt="hero" src={heroImg} />
            <div className="dot-element-container desktop-tablet">
              <div className="dot-element">
                <Dots width={window.innerWidth <= 768 ? "225px" : "100%"} height={window.innerWidth <= 768 ? "111px" : "100%"} />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="featuredSection">
        <div>
          <p>We've Been Featured On</p>
          <div className="featuredIcons">
            <div><BusinessDay /></div>
            <div><TechCity /></div>
            <div><InnovationVillage /></div>
            <div><DisruptAfrica /></div>
          </div>
        </div>
      </section>
      <section className="sec-2-section">
        <div>
          <div className="sec-2-heading">
            <p>OUR CUSTOMERS</p>
            <h1>Who can use Edustripe</h1>
          </div>
          <div className="pacman-element-container">
            <div className="pacman-element">
              <PacmanCircle width={ window.innerWidth <= 1024 ? "86px" : "40%"} height={window.innerWidth <= 1024 ? "85px" : "40%"} />
            </div>
          </div>
          <div className="sec-2-div">
            <div className="sec-2-side-img-div">
              <img className="sec-2-img" alt="" src={verticalTri} />
              <div className="kite-element">
                <KiteElement width={"100%"} height={"100%"} />
              </div>
            </div>
            <div className="sec-2-div-right sec-side">
              <h1>EDUSTRIPE FOR SCHOOLS</h1>
              <p>Edustripe is geared towards reducing workload while increasing efficiency</p>
              <div>
                <ul>
                  <li><span>Instantly-generated reports from exams, tests, and attendance scores.</span></li>
                  <li><span>Better insight into, and control over school activities with easy and fast access to school records.</span></li>
                  <li><span>Elimination of human error and fraud.</span></li>
                  <li><span>Increased revenue from online fees payment.</span></li>
                </ul>
              </div>
              <div className="sec-btn-div">
              <a className="noDecoration" href="#signup">
                <Button
                  label='Learn more'
                  id='learnmore'
                  className="learnmore"
                  style={{
                    background: '#007EFF',
                    color: '#fff',
                    cursor: 'pointer',
                    borderRadius: '5px',
                    border: '1px solid #109CF1',
                    outline: 'none',
                    padding: window.innerWidth > 2000 ? '18px 30px' : '12px 20px',
                    fontSize: window.innerWidth > 2000 ? '18px' :'13px',
                    textAlign: 'center',
                    alignItems: 'center',
                    margin: '15px 0',
                  }}
                />
              </a>
            </div>
            </div>
          </div>
        </div>
      </section>
      <div className="cirles-element-container mobile-only">
        <div className="cirles-element">
          <MobileCircles />
        </div>
      </div>
      <div className="cirles-element-container desktop-tablet">
        <div className="cirles-element">
          <Circles width={ window.innerWidth <= 1024 ? "192px" : "100%"} height={window.innerWidth <= 1024 ? "241px" : "100%"} />
        </div>
      </div>
      <div className="flower-element-container">
        <div className="flower-element">
          <div className="desktop-tablet">
            <FlowerElement />
          </div>
          <div class="mobile-only">
            <MobileFlowerElement />
          </div>
        </div>
      </div>
      <section className="sec-3-section">
        <div className="sec-3-div sec"> 
          <div className="scside">
            <h1>EDUSTRIPE FOR TEACHERS</h1>
            <p>Edustripe provides the necessary tools for Teachers to teach effectively</p>
            <div>
              <ul>
                <li><span>Improved welfare programs for Teachers</span></li>
                <li><span>Trainings and certification for Teachers to aid growth and development</span></li>
                <li><span>Custom lesson plans to improve Teaching efficiency.</span></li>
              </ul>
              </div>
              <div className="sec-btn-div">
                <a href="#signup">
                  <Button
                    label='Learn more'
                    id='learnmore'
                    className="learnmore"
                    style={{
                      background: '#007EFF',
                      color: '#fff',
                      cursor: 'pointer',
                      borderRadius: '5px',
                      border: '1px solid #109CF1',
                      outline: 'none',
                      padding: window.innerWidth > 2000 ? '18px 30px' : '12px 20px',
                      fontSize: window.innerWidth > 2000 ? '26px' :'13px',
                      textAlign: 'center',
                      alignItems: 'center',
                      margin: '15px 0'
                    }}
                  />
                </a>
            </div>
          </div>
          <div className="sec-3-side-img-div">
            <div>
              <div className="big-circle-element-container">
                <div className="big-circle-element">
                  <BigCircle width={"100%"} height={"100%"} />
                </div>
              </div>
              <img className="sec-3-img" alt="" src={secondhero} />
            </div>
          </div>
                  </div>
      </section>
      <section className="sec-4-div-section">
        <div className="sec-4-div sec">
          <div className="fan-like-element-container">
            <div className="fan-like-element">
              <FanLikeElement />
            </div>
          </div>
          <div className="sec-side-img-div">
            <div>
          <div className="polygon-container">
            <div className="polygon">
              <PolygonElement style={{zIndex: '-2'}} width={"100%"} height={"100%"} />
            </div>
          </div>
              <img className="sec-4-img" alt="" src={polygon} />
            </div>
          </div>
          <div className="sec-4-side">
            <h1>EDUSTRIPE FOR PARENT AND CHILDREN</h1>
            <p>Edustripe helps Parents plan effectively towards their Children’s development</p>
            <div>
              <ul>
                <li><span>Set periodical savings goals to pay school fees on time.</span></li>
                <li><span>Access quick loans to pay School Fees.</span></li>
                <li><span>Access and view all child’s educational grades easily.</span></li>
                <li><span>Monitor all educational activities, events and deadlines</span></li>
              </ul>
              </div>
              <div className="sec-btn-div">
                <a href="#signup">  
                  <Button
                  label='Learn more'
                  id='learnmore'
                  className="learnmore"
                  style={{
                    background: '#007EFF',
                    color: '#fff',
                    cursor: 'pointer',
                    borderRadius: '5px',
                    border: '1px solid #109CF1',
                    outline: 'none',
                    padding: window.innerWidth > 2000 ? '18px 30px' : '12px 20px',
                    fontSize: window.innerWidth > 2000 ? '18px' :'13px',
                    textAlign: 'center',
                    alignItems: 'center',
                    margin: '15px 0'
                  }}
                />
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="sec-5-div-section">
      <div className="square-triangle-container">
        <div className="square-triangle">
          <SquareAndInvertedTriangle />
        </div>
      </div>
      <div className="square-circle-container desktop-tablet">
        <div className="square-circle">
          <SquareAndCircle />
        </div>
      </div>
      <div className="square-circle-container mobile-only">
        <div className="square-circle">
          <SquareAndCircle2 />
        </div>
      </div>
        <div className="sec-5-div">
          <h1>Features</h1>
          <div className="features-div">
            <div className="row">
            <div className="col">
                <img alt="Grade Viewer" src={laptopanalytic}/>
                <h3>GRADES VIEWER</h3>
                <p>Access and view all student grades easily to monitor performance and growth</p>
              </div>
              <div className="col">
                <img alt="Savers App" src={bankbuilding} />
                <h3>SAVERS APP</h3>
                <p>Set daily, weekly or monthly automated saving educational goals</p>
              </div>
              <div className="col">
                <img alt="Cloud Storage" src={cloudstorage} />
                <h3>CLOUD STORAGE</h3>
                <p>Securely store and easily retrieve all educational information or data</p>
              </div>
            </div>
            
            <div className="row">
              <div className="col">
                <img alt="Custom Learning" src={learning} />
                <h3>CUSTOM LEARNING</h3>
                <p>Create custom teaching plans or assessments and special learning</p>
              </div>
              <div className="col">
                <img alt="Activity Tracker" src={medicalhistory} />
                <h3>ACTIVITY TRACKER</h3>
                <p>Stay up to date with all educational activities, events and deadlines</p>
              </div>
              <div className="col">
                <img alt="Quick Loans" src={creditcard} />
                <h3>QUICK LOANS</h3>
                <p>Access quick loans for educational expenses and repay in installments</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="partnersSection">
        <div>
          <p>Our Partners</p>
          <div className="partnersIcons">
            <div><Meristem /></div>
            <div><Monnify /></div>
            <div><SterlingBank /></div>
          </div>
        </div>
      </section>
      <div className="plus-element-container">
        <div className="plus-element">
          <PlusElement />
        </div>
      </div>
      <section className="sec-6-section">
        <div className="sec-6-div">
            <div className="sec-why-edustripe-second">

            </div>
          <div className="sec-why-edustripe">
            <div className="sec-why-edustripe-first">
              <div className="sec-why-edustripe-first-text">
                <h1>Why Edustripe?</h1>
                <p>Because We Are With You All The Way Helping You Achieve All Your Goals</p>
              </div>
              <div className= "sec-why-edustripe-buttons">
              <a className="noDecoration" href="https://app.edustripe.com/login" target="_blank">
                <Button
                  label='Get Started'
                  id='getstarted'
                  className="getstarted"
                  style={{
                    background: '#FFF',
                    color: '#000',
                    cursor: 'pointer',
                    borderRadius: '5px',
                    border: '1px solid #109CF1',
                    outline: 'none',
                    padding: '9px 0',
                    width: '80%',
                    fontSize: '16px',
                    justifyContent: 'center',
                    alignItems: 'center',
                    margin: '15px 15px 0 0',
                    fontWeight: '400',
                    minWidth: "150px",
                    maxWidth: "250px"
                  }}
                />
                </a>
                <a className="noDecoration" href="#footerAnchor">
                  <Button
                    label='Contact Us'
                    id='contactus'
                    handleClick={() => highlightContactInfo()}
                    className="contactus"
                    style={{
                      background: 'rgba(194, 207, 224, 0.52)',
                      color: '#fff',
                      cursor: 'pointer',
                      borderRadius: '5px',
                      border: '1px solid #109CF1',
                      outline: 'none',
                      padding: '9px 0',
                      width: '80%',
                      fontSize: '16px',
                      justifyContent: 'center',
                      alignItems: 'center',
                      margin: '15px 0 0 0',
                      fontWeight: '400',
                      minWidth: "150px",
                      maxWidth: "250px"
                    }}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Home;