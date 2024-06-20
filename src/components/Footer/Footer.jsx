import React from "react";
import "./Footer.css";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Gitub from "@iconscout/react-unicons/icons/uil-github";
import Linkedin from "@iconscout/react-unicons/icons/uil-linkedin";
import Twitter from "@iconscout/react-unicons/icons/uil-twitter";
import Whatsapp from "@iconscout/react-unicons/icons/uil-whatsapp";

const Footer = () => {
  return (
    <div className="footer">
      <div className="f-content">
        <div className="f-left">
          <div className="f-section">
            <h3>Subscribe</h3>
            <p>Subscribe to our newsletter to get the latest updates and offers.</p>
          </div>
          <div className="f-section">
            <h3>Office</h3>
            <p>ITPL Road, Whitefield, Bangalore, Karnataka, PIN 560066, India</p>
            <p>ojas@gmail.com</p>
            <p>+91 - 0123456789</p>
          </div>
          <div className="f-section">
            <h3>Links</h3>
            <ul>
              <li>Home</li>
              <li>Services</li>
              <li>About Us</li>
              <li>Features</li>
              <li>Contacts</li>
            </ul>
          </div>
          <div className="f-section">
            <h3>Newsletter</h3>
            <div className="newsletter-input">
              <input type="email" placeholder="Enter your email" />
              <button>Subscribe</button>
            </div>
          </div>
          <div className="f-icons">
            <Insta color="white" size={"3rem"} />
            <Facebook color="white" size={"3rem"} />
            <Gitub color="white" size={"3rem"} />
            <Linkedin color="white" size={"3rem"} />
            <Twitter color="white" size={"3rem"} />
            <Whatsapp color="white" size={"3rem"} />
          </div>
        </div>
        <div className="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3666.589138105802!2d75.78745304415011!3d23.22163927862518!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396377c5a9abfa1d%3A0x37f4fffda14e91bc!2sMangalnath%20Mandir!5e0!3m2!1sen!2sin!4v1718168444979!5m2!1sen!2sin"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Ujjain Location"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Footer;
