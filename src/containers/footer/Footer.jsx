import React from 'react'
import './footer.css'
import logo from '../../assets/logo.svg'


const Footer = () => (
  <section className="footer_section">
    <div className=" main_footer_section container">
      <div className="early_access_cont flex">
        <h1>Do you want to step in to the <br /> future before others</h1>
        <button>Request Early Access</button>
      </div>
      <div className="main_footer flex">
        <div className="logo_footer">
          <img src={logo} alt="" />
          <h4>Crechterwoord K12 182 DK Alknjkcb, <br /> All Rights Reserved</h4>
        </div>
        <div className="footer_links_section flex ">
          <div className="footer_section">
            <h2>Links</h2>
            <div className='footer_links'>
              <ul>
                <a href=''><li>Overons</li></a>
                <a href=''><li>Social Media </li></a>
                <a href=''><li>Contacts</li></a>
                <a href=''><li>Counters</li></a>
              </ul>
            </div>
          </div>
          <div className="footer_section">
            <h2>Company</h2>
            <div className='footer_links'>
              <ul>
                <a href=''><li>Terms and Conditions</li></a>
                <a href=''><li>Privacy Policy</li></a>
                <a href=''><li>Contacts</li></a>
              </ul>
            </div>
          </div>
          <div className="footer_section">
            <h2>Get in touch</h2>
            <div className='footer_links'>
              <ul>
                <a href=''><li>Crechterwoord K12 182 DK Alknjkcb</li></a>
                <a href=''><li>01-2432 </li></a>
                <a href=''><li>info@payment.net</li></a>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default Footer