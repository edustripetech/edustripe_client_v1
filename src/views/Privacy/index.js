import React, { useEffect } from 'react';
import Navbar from '../../components/Navbar';
import Button from '../../components/Button';
import Footer from '../../components/Footer';
import './privacy.css';

const Privacy = () => {
  return (
    <div className="about-container">
      <Navbar logo={"white"} />
      <section className="header-section">
      </section>
      <section className="header-text">
        <div>
          <h1>Privacy Policy</h1>
        </div>
      </section>
      <section className="body">
        <div className="sec1">
          <p>At Edustripe, we collect and manage user data according to the following Privacy Policy.</p>
        </div>
        <div className="sec2">
          <h1>Data Collected</h1>
          <p>
          We collect information you provide directly to us. For example, we collect information when you create an account, subscribe, participate in any interactive features of our services, fill out a form, request customer support or otherwise communicate with us. The types of information we may collect include your name, email address, postal address, credit card information and other contact or identifying information you choose to provide.
          </p>
          <p>
          We collect anonymous data from every visitor of the Website to monitor traffic and fix bugs. For example, we collect information like web requests, the data sent in response to such requests, the Internet Protocol address, the browser type, the browser language, and a timestamp for the request.
          </p>
          <p>
          We also use various technologies to collect information, and this may include sending cookies to your computer. Cookies are small data files stored on your hard drive or in your device memory that helps us to improve our services and your experience, see which areas and features of our services are popular and count visits. We may also collect information using web beacons (also known as "tracking pixels"). Web beacons are electronic images that may be used in our services or emails and to track count visits or understand usage and campaign <effectiveness className=""></effectiveness>
          </p>
        </div>
        <div className="sec3">
          <h1>Use of the Data</h1>
          <p>
            We only use your personal information to provide you the Edustripe services or to communicate with you about the Website or the services. Our Privacy Policy was created with the help of the Privacy Policy Template and the Terms and Conditions Template.
          </p>
          <p>
            We employ industry standard techniques to protect against unauthorized access of data about you that we store, including personal information.
          </p>
          <p>
            We do not share personal information you have provided to us without your consent, unless:
          </p>
          <p>
            Doing so is appropriate to carry out your own request
            We believe it's needed to enforce our legal agreements or that is legally required
            We believe it's needed to detect, prevent or address fraud, security or technical issues
          </p>
        </div>
        <div className="sec4">
          <h1>
            Sharing of Data
          </h1>
          <p>
            We don't share your personal information with third parties. Aggregated, anonymized data is periodically transmitted to external services to help us improve the Website and service.
          </p>
          <p>
            We may allow third parties to provide analytics services. These third parties may use cookies, web beacons and other technologies to collect information about your use of the services and other websites, including your IP address, web browser, pages viewed, time spent on pages, links clicked and conversion information.
          </p>
          <p>
            We also use social buttons provided by services like Twitter, Google+, LinkedIn and Facebook. Your use of these third party services is entirely optional. We are not responsible for the privacy policies and/or practices of these third party services, and you are responsible for reading and understanding those third party services' privacy policies.
          </p>
        </div>
        <div className="sec5">
          <h1>Cookies</h1>
          <p>We may use cookies on our site to remember your preferences.</p>
          <p>For more general information on cookies, please read "What Are Cookies”.</p>
        </div>
        <div  className="sec7">
          <h1>Opt-Out, Communication Preferences</h1>
          <p>You may modify your communication preferences and/or opt-out from specific communications at any time. Please specify and adjust your preferences.</p>
        </div>
        <div className="sec7">
          <h1>Security</h1>
          <p>We take reasonable steps to protect personally identifiable information from loss, misuse, and unauthorized access, disclosure, alteration, or destruction. But, you should keep in mind that no Internet transmission is ever completely secure or error-free. In particular, email sent to or from the Sites may not be secure.</p>
        </div>
        <div className="sec8">
          <h1>About Children</h1>
          <p>The Website is not intended for children under the age of 13. We do not knowingly collect personally identifiable information via the Website from visitors in this age group.</p>
        </div>
        <div className="sec9">
          <h1>Changes to the Privacy Policy</h1>
          <p>
          We may amend this Privacy Policy from time to time. Use of information we collect now is subject to the Privacy Policy in effect at the time such information is used.
          </p>
          <p>If we make major changes in the way we collect or use information, we will notify you by posting an announcement on the Website or sending you an email.If we make major changes in the way we collect or use information, we will notify you by posting an announcement on the Website or sending you an email.</p>
        </div>
      </section>

      <section className="privacy-6-section">
        <div className="privacy-6-div">
          <div className="privacy-why-edustripe">
            <div className="privacy-why-edustripe-first">
              <div className="privacy-why-edustripe-first-text">
                <h1>Why Edustripe?</h1>
                <p>Because We Are With You All The Way Helping You Achieve All Your Goals</p>
              </div>
              <div className= "privacy-why-edustripe-buttons">
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
                <Button
                  label='Contact Us'
                  id='contactus'
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
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default Privacy;

