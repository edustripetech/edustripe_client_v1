import React from 'react';
import Navbar from '../../components/Navbar';
import Button from '../../components/Button';
import Footer from '../../components/Footer';
import './terms.css';

const TermsOfService = () => {
  return (
    <div className="about-container">
      <Navbar logo={"white"} />
      <section className="header-section">
      </section>
      <section className="header-text">
        <div>
          <h1>Terms of Use</h1>
        </div>
      </section>
      <section className="body">
        <p>Please read these terms of service (&quot;terms of service&quot;, &quot;terms&quot;) carefully before using [<a href="https://www.edustripe.com/">Edustripe.com</a><span style={{ paddingRight: '4px'}}>]</span>
          website (“website”, &quot;service&quot;) operated by [Edustripe] (&quot;us&quot;, &#39;we&quot;,
          &quot;our&quot;).
        </p>
      
        <h1>Conditions of use</h1>
        <p>
        By using this website, you certify that you have read and reviewed this Agreement
        and that you agree to comply with its terms. If you do not want to be bound by the
        terms of this Agreement, you are advised to leave the website accordingly.
        [Edustripe] only grants use and access of this website, its products, and its services
        to those who have accepted its terms.
        </p>
        <h1>Privacy policy</h1>
        <p>Before you continue using our website, we advise you to read our privacy policy [link
        to privacy policy] regarding our user data collection. It will help you better understand
        our practices.</p>
        <h1>Age restriction</h1>
        <p>You must be at least 18 (eighteen) years of age before you can use this website. By
        using this website, you warrant that you are at least 18 years of age and you may
        legally adhere to this Agreement. [name] assumes no responsibility for liabilities
        related to age misrepresentation.</p>
        <h1>Intellectual propertygoogle.com</h1>
        <p>You agree that all materials, products, and services provided on this website are the
        property of [name], its affiliates, directors, officers, employees, agents, suppliers, or
        licensors including all copyrights, trade secrets, trademarks, patents, and other
        intellectual property. You also agree that you will not reproduce or redistribute the
        [name]’s intellectual property in any way, including electronic, digital, or new
        trademark registrations.</p>
        <p>You grant [Edustripe] a royalty-free and non-exclusive license to display, use, copy,
        transmit, and broadcast the content you upload and publish. For issues regarding
        intellectual property claims, you should contact the company in order to come to an
        agreement.</p>
        <h1>User accounts</h1>
        <p>As a user of this website, you may be asked to register with us and provide private
        information. You are responsible for ensuring the accuracy of this information, and
        you are responsible for maintaining the safety and security of your identifying
        information. You are also responsible for all activities that occur under your account
        or password.</p>
        <p>If you think there are any possible issues regarding the security of your account on
        the website, inform us immediately so we may address it accordingly.
        We reserve all rights to terminate accounts, edit or remove content and cancel orders
        in their sole discretion.</p>
        <h1>Applicable law</h1>
        <p>By visiting this website, you agree that the laws of the [location], without regard to
        principles of conflict laws, will govern these terms and conditions, or any dispute of
        any sort that might come between [Edustripe] and you, or its business partners and
        associates.</p>
        <h1>Disputes</h1>
        <p>Any dispute related in any way to your visit to this website or to products you
        purchase from us shall be arbitrated by state or federal court [lkeja, Lagos and you
        consent to exclusive jurisdiction and venue of such courts.</p>
        <h1>Indemnification</h1>
        <p>You agree to indemnify [name] and its affiliates and hold [name] harmless against
        legal claims and demands that may arise from your use or misuse of our services.
        We reserve the right to select our own legal counsel.</p>
        <h1>Limitation on liability</h1>
        <p>[Edustripe] is not liable for any damages that may occur to you as a result of your
        misuse of our website.</p>
        <p>[Edustripe] reserves the right to edit, modify, and change this Agreement any time.
        We shall let our users know of these changes through electronic mail. This
        Agreement is an understanding between [name] and the user, and this supersedes
        and replaces all prior agreements regarding the use of this website.</p>

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

export default TermsOfService;
