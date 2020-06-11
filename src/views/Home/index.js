import React, { useEffect } from 'react';
import Navbar from '../../components/Navbar';
import Button from '../../components/Button';
import Footer from '../../components/Footer';

import './home.css';

import heroImg from '../../assets/images/firsthero.png';
import verticalTri from '../../assets/images/verticalrectangle.png';
import secondhero from '../../assets/images/secondhero.png';
import polygon from '../../assets/images/Polygon.png';
import bankbuilding from '../../assets/images/bankbuilding.png';
import cloudstorage from '../../assets/images/cloudstorage.png';
import graphreport from '../../assets/images/graphreport.png';
import learning from '../../assets/images/learning.png';
import medicalhistory from '../../assets/images/medicalhistory.png';
import laptopanalytic from '../../assets/images/laptopanalytic.png';
let scroll = window.scrollY;

const Home = () => {
  return (
    <div className="homa-page">
      <Navbar />
      <section>
        <div className="sec-one">
          <div className="content-left">
            <div className="lefts">
              <h1>The most comprehensive platform for all of your professional learning needs</h1>
            </div>
            <div className="lefts">
              <p>Edustripe Helps Educators to build fast-growing, efficient, and stress-free schools, by combining all tools necessary for running a modern school into one platform that is simple, flexible, and reliable.</p>
            </div>
            <div className="lefts">
              <Button
                label='Request a demo'
                id='demo'
                className="demo desktop-tablet"
                style={{
                  background: '#007EFF',
                  color: '#fff',
                  cursor: 'pointer',
                  borderRadius: '5px',
                  border: '1px solid #109CF1',
                  outline: 'none',
                  padding: window.innerWidth > 1560 ? '18px 30px' : '12px 20px',
                  fontSize: window.innerWidth > 1560 ? '18px' :'13px',
                  textAlign: 'center',
                  alignItems: 'center',
                  margin: '15px 0',
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
                  fontSize: '13px',
                  textAlign: 'center',
                  alignItems: 'center',
                  margin: '15px 0 25px 0',
                }}
              />
            </div>
          </div>
          <div className="hero-div">
            <img className="hero-img" id="hero-img" alt="hero" src={heroImg} />
          </div>
        </div>
      </section>
      <section className="sec-2-section">
        <div>
          <div className="sec-2-heading">
            <p>OUR CUSTOMERS</p>
            <h1>Who can use Edustripe</h1>
          </div>
          <div className="sec-2-div">
            <div className="sec-2-side-img-div">
              <img className="sec-2-img" alt="" src={verticalTri} />
            </div>
            <div className="sec-2-div-right sec-side">
              <h1>EDUSTRIPE FOR SCHOOLS</h1>
              <p>Edustripe helps Parents plan effectively towards their Children’s development</p>
              <div>
                <ul>
                  <li><span>Set periodical savings goals to pay school fees on time</span></li>
                  <li><span>Access quick loans to pay School Fees</span></li>
                  <li><span>Access all ward’s educational development easily.</span></li>
                  <li><span>Monitor and Track all children’s activities.</span></li>
                </ul>
              </div>
              <div className="sec-btn-div">
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
                  padding: window.innerWidth > 1560 ? '18px 30px' : '12px 20px',
                  fontSize: window.innerWidth > 1560 ? '18px' :'13px',
                  textAlign: 'center',
                  alignItems: 'center',
                  margin: '15px 0',
                }}
              />
            </div>
            </div>
          </div>
        </div>
      </section>
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
                  padding: window.innerWidth > 1560 ? '18px 30px' : '12px 20px',
                  fontSize: window.innerWidth > 1560 ? '18px' :'13px',
                  textAlign: 'center',
                  alignItems: 'center',
                  margin: '15px 0'
                }}
              />
            </div>
          </div>
          <div className="sec-3-side-img-div">
            <div>
              <img className="sec-3-img" alt="" src={secondhero} />
            </div>
          </div>
        </div>
      </section>
      <section className="sec-4-div-section">
        <div className="sec-4-div sec">
          <div className="sec-side-img-div">
            <div>
              <img className="sec-4-img" alt="" src={polygon} />
            </div>
          </div>
          <div className="sec-4-side">
            <h1>EDUSTRIPE FOR PARENT AND CHILDREN</h1>
            <p>Edustripe helps Parents plan effectively towards their Children’s development</p>
            <div>
              <ul>
                <li><span>Set periodical savings goals to pay school fees on time.</span></li>
                <li><span>Access quick loans to pay School Fees</span></li>
                <li><span>Access all ward’s educational development easily</span></li>
                <li><span>Monitor and Track all children’s activities</span></li>
              </ul>
              </div>
              <div className="sec-btn-div">
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
                  padding: window.innerWidth > 1560 ? '18px 30px' : '12px 20px',
                  fontSize: window.innerWidth > 1560 ? '18px' :'13px',
                  textAlign: 'center',
                  alignItems: 'center',
                  margin: '15px 0'
                }}
              />
            </div>
          </div>
        </div>
      </section>
      <section className="sec-5-div-section">
        <div className="sec-5-div">
          <h1>Features</h1>
          <div className="features-div">
            <div className="row">
              <div className="col">
                <div>
                  <img alt="Learning Analytics" src={laptopanalytic}/>
                  <h3>LEARNING ANALYTICS</h3>
                </div>
                <p>Group students / teachers, and identify strong and weak students.</p>
              </div>
              <div className="col">
                <div>
                  <img alt="" src={bankbuilding} />
                  <h3>SAVERS APP</h3>
                </div>
                <p>Set daily, weekly, monthly automated savings, educational goals.</p>
              </div>
              <div className="col">
                <div>
                  <img alt="" src={cloudstorage} />
                  <h3>CLOUD STORAGE</h3>
                </div>
                <p>Securely store and easily retrieve school information / data.</p>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <div>
                  <img alt="" src={learning} />
                  <h3>CUSTOM LEARNING</h3>
                </div>
                <p>Custom teachings plans / accessments, and special learning.</p>
              </div>
              <div className="col">
                <div>
                  <img alt="" src={medicalhistory} />
                  <h3>BUSINESS INTELLIGENCE</h3>
                </div>
                <p>Manage your finances, get detailed reports on finances.</p>
              </div>
              <div className="col">
                <div>
                  <img alt="" src={graphreport} />
                  <h3>DATA ANALYTICS</h3>
                </div>
                <p>Analyse historical school data for better school management.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="sec-6-section">
        <div className="sec-6-div">
          <div className="sec-why-edustripe">
            <div className="sec-why-edustripe-first">
              <div>
                <h1>Why Edustripe?</h1>
                <p>The real question should be Why not Edustripe?</p>
                <div className="mobile-only sec-why-edustripe-buttons">
                  <Button
                    label='Get Started'
                    id='getstarted'
                    className="getstarted mobile-only"
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
                      margin: '15px 0 0 0',
                      fontWeight: '400'
                    }}
                  />
                  <Button
                    label='Contact Us'
                    id='contactus'
                    className="contactus mobile-only"
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
                      fontWeight: '400'
                    }}
                  />
                </div>
              </div>
            </div>
            <div className="sec-why-edustripe-second">

            </div>
          </div>
          <div className="sec-join-edustripe desktop-tablet">
            <div className="sec-join-edustripe-first">
              <h1>Join Edustripe Now</h1>
              <p>Get on board the best Educational community and achieve all your goals.</p>
            </div>
            <div className="sec-join-edustripe-second">
              <div>
              <Button
                label='Create an account now!'
                id='creatAccount'
                className="creatAccount"
                style={{
                  background: '#007EFF',
                  color: '#fff',
                  cursor: 'pointer',
                  borderRadius: '5px',
                  border: '1px solid #109CF1',
                  outline: 'none',
                  padding: '14px 45px',
                  fontSize: window.innerWidth > 1560 ? '18px' :'13px',
                  textAlign: 'center',
                  alignItems: 'center',
                  margin: '15px 0 0 0',
                  fontWeight: '400'
                }}
              />
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