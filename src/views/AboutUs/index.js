import React, { useEffect } from 'react';
import Navbar from '../../components/Navbar';
import Card from '../../components/Card';
import Button from '../../components/Button';
import Footer from '../../components/Footer';
import { Link } from 'react-router-dom';
import './aboutus.css';

import ourStoryImg from "../../assets/images/AboutUs_Image1.png";
import ceo from "../../assets/images/Jide About Us.png";
import cto from "../../assets/images/Tolu About Us.png";
import projectManager from "../../assets/images/samuel.png"
import DEng from "../../assets/images/Chuks About Us.png";
import EngManger1 from "../../assets/images/Emeka About Us.png"
import EngManger2 from "../../assets/images/Adeola.About.Us.jpg"

const AboutUs = () => {
  return (
    <div className="about-container">
      <Navbar logo={"white"} />
      <section className="header-section">
      </section>
      <section className="header-text">
        <div>
          <h1>About Edustripe</h1>
          <p>Our mission is to make the most of higher education’s student data to help a million more students graduate per year by 2025</p>
        </div>
      </section>
      <section className="our-story">
        <div className="our-story-img desktop-tablet">
          <div>
            <img src={ourStoryImg} alt="Our Story" />
          </div>
        </div>
        <div className="our-story-text">
          <div>
          <h2>Our story</h2>
          <div className="our-story-img-mobile">
            <img className="mobile-only" src={ourStoryImg} alt="Our Story" />
          </div>
          <p>In the immortal words of Nelson Mandela, “education is the most powerful weapon which you can use to change the world.” At Edustripe, we fully and wholeheartedly believe this. Our company was born out of our founder’s desire to be a changemaker. A changemaker, as defined by us is “someone who desires change in the world and, by gathering knowledge and resources, makes that change happen.”
</p>
<p>At Edustripe, we all aspire to be changemakers. We want to change the world. We believe that it is possible to live in a world where all children can succeed through access to high-quality teachers. We also believe that all teachers deserve to work in environments where well trained and empathetic leaders support them. To achieve all of this will be a herculean task, but we aim to do our small part by providing educators with great tools and a community that supports their growth, learning, and progression.</p>

          </div>
        </div>
      </section>
      <section className="our-team-section">
        <div className="our-team">
          <h1>Our team</h1>
          <div className="ceo-card">
            <div>
              <Card image={ceo} alt={"C.E.O"} title={"Co-Founder and C.E.O"} name={"Babajide Esho"} />
            </div>
          </div>
          <div className="our-team-cards">
            <div>
              <Card image={cto} alt={"C.T.O"} title={"Co-Founder and Co-C.T.O"} name={"Tolulope Odueke"} />
            </div>
            <div>
              <Card image={DEng} alt={"D.Eng"} title={"Co-Founder and Director of Engineering"} name={"Chukwudi Ngwobia"} />
            </div>
            <div>
              <Card image={projectManager} alt={"Project Manager"} title={"Project Manager"} name={"Samuel Oyegbemi"} />
            </div>
            <div>
              <Card image={EngManger1} alt={"Eng.Manager"} title={"Chief Information Officer"} name={"Emeka Ofe"} />
            </div>
            <div>
              <Card image={EngManger2} alt={"Eng.Manager"} title={"Engineering Manager"} name={"Adeola Adeyemo"} />
            </div>
          </div>
        </div>
      </section>
      <section>
        <div>
          <div className="join-edustripe">
            <div className="join-edustripe-text">
              <h1>Join Edustripe Now</h1>
              <div>
                <p>Get on board the best Educational community and achieve all your goals.</p>
                <div className= "join-edustripe-button">
                <Link className="get-started" to="/signup">
                  <Button
                    label='Request a free demo now!'
                    id='getstarted'
                    className="getstarted"
                    style={{
                      background: '#007EFF',
                      color: '#fff',
                      cursor: 'pointer',
                      borderRadius: '5px',
                      border: '1px solid #109CF1',
                      outline: 'none',
                      padding: '9px 25px',
                      fontSize: '14px',
                      justifyContent: 'center',
                      alignItems: 'center',
                      fontWeight: '600',
                      height: "45px",
                      minWidth: "150px",
                      maxWidth: "250px"
                    }}
                  />
                  </Link>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default AboutUs;