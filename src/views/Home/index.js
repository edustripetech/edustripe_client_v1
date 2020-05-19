import React from 'react';
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
                className="demo"
                style={{
                  background: '#007EFF',
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
                  width: '17.5rem',
                }}
              />
            </div>
          </div>
          <div className="hero-div">
            <img className="hero-img" alt="hero" src={heroImg} />
          </div>
        </div>
      </section>
      <section>
        <div>
          <div className="sec-2-heading">
            <p>OUR CUSTOMERS</p>
            <h1>Who can use Edustripe</h1>
          </div>
          <div className="sec-2-div">
            <div className=".sec-side-img-div">
              <img className="sec-2-img" alt="" src={verticalTri} />
            </div>
            <div className="sec-2-div-right sec-side">
              <h1>EDUSTRIPE FOR SCHOOLS</h1>
              <p>Edustripe geared towards reducing workload and increasing efficiency</p>
              <div>
                <ul>
                  <li>Instantly-generated reports from exams, tests, and attendance scores.</li>
                  <li>Better insight info, and control over school activities with easy and fast access to school records.</li>
                  <li>Elimination of human error and fraud increased revenue from online fees payment.</li>
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
                  height: '2rem',
                  padding: '5px',
                  height: '2.5rem',
                  fontSize: '24px',
                  textAlign: 'center',
                  alignItems: 'center',
                  margin: '15px 0',
                  width: '13rem',
                }}
              />
            </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="sec-3-div sec"> 
          <div className="sec-side">
            <h1>EDUTRIPE FOR TEACHERS</h1>
            <p>Edustripe geared towards reducing workload and increasing efficiency</p>
            <div>
              <ul>
                <li>Instantly-generated reports from exams, tests, and attendance scores.</li>
                <li>Better insight info, and control over school activities with easy and fast access to school records.</li>
                <li>Elimination of human error and fraud increased revenue from online fees payment.</li>
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
                  height: '2rem',
                  padding: '5px',
                  height: '2.5rem',
                  fontSize: '24px',
                  textAlign: 'center',
                  alignItems: 'center',
                  margin: '15px 0',
                  width: '13rem',
                }}
              />
            </div>
          </div>
          <div className="sec-side-img-div">
            <img className="sec-3-img" alt="" src={secondhero} />
          </div>
        </div>
      </section>
      <section>
        <div className="sec-4-div sec">
          <div className=".sec-side-img-div">
            <img className="sec-4-img" alt="" src={polygon} />
          </div>
          <div className="sec-side">
            <h1>EDUSTRIPE FOR PARENT AND CHILDREN</h1>
            <p>Edustripe geared towards reducing workload and increasing efficiency</p>
            <div>
              <ul>
                <li>Instantly-generated reports from exams, tests, and attendance scores.</li>
                <li>Better insight info, and control over school activities with easy and fast access to school records.</li>
                <li>Elimination of human error and fraud increased revenue from online fees payment.</li>
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
                  height: '2rem',
                  padding: '5px',
                  height: '2.5rem',
                  fontSize: '24px',
                  textAlign: 'center',
                  alignItems: 'center',
                  margin: '15px 0',
                  width: '13rem',
                }}
              />
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="sec-5-div">
          <h1>Features</h1>
          <div className="features-div">
            <div className="row">
              <div className="col">
                <img alt="Learning Analytics" src={laptopanalytic}/>
                <h3>LEARNING ANALYTICS</h3>
                <p>Group students / teachers, and identify strong and weak students.</p>
              </div>
              <div className="col">
                <img alt="" src={bankbuilding} />
                <h3>SAVERS APP</h3>
                <p>Set daily, weekly, monthly automated savings, educational goals.</p>
              </div>
              <div className="col">
                <img alt="" src={cloudstorage} />
                <h3>CLOUD STORAGE</h3>
                <p>Securely store and easily retrieve school information / data.</p>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <img alt="" src={learning} />
                <h3>CUSTOM LEARNING</h3>
                <p>Custom teachings plans / accessments, and special learning.</p>
              </div>
              <div className="col">
                <img alt="" src={medicalhistory} />
                <h3>BUSINESS INTELLIGENCE</h3>
                <p>Manage your finances, get detailed reports on finances.</p>
              </div>
              <div className="col">
                <img alt="" src={graphreport} />
                <h3>DATA ANALYTICS</h3>
                <p>Analyse historical school data for better school management.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="sec-6-div">
          <h1>Why Edustripe?</h1>
          <p>Edustripe helps boost enrollment/promote your school brands with our partners, Pay school fees and save easily with us and provide Secure way of storing and easy retrieval of school information/data</p>
          <div className="sec-btn-div">
            <Button
            label='Request a free demo now!'
            id='learnmore'
            className="learnmore"
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
              width: '20rem',
            }}
          />
        </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Home;
