import React from "react";
import "./Intro.css";
import Astrology from "../../img/Astrology.png";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { UilYoutube, UilWhatsapp, UilEnvelope, UilPhone } from "@iconscout/react-unicons";

const Intro = () => {
  const transition = { duration: 3, type: "spring" };

  return (
    <div className="Intro" id="Intro">
      <div className="i-left">
        <div className="i-name">
          <span>Jai Mahakal</span>
          <span>Hello, I am Jaideep Sharma, your cosmic guide and dedicated astrologer</span>
          <span>Astrology is the ancient science of self-discovery, helping us realize our true potential and purpose in this earthly existence.</span>
          <span>ज्योतिष आत्म-खोज का प्राचीन विज्ञान है, जो हमें इस भौतिक अस्तित्व में हमारी वास्तविक क्षमता और उद्देश्य को समझने में मदद करता है।</span>
        </div>
        <Link to="contact" smooth={true} spy={true}>
          <button className="button i-button">Appointment</button>
        </Link>
        <div className="i-icons">
          <a href="https://www.youtube.com/@jyotishacharyjaideepsharma1621" target="_blank" rel="noopener noreferrer">
            <UilYoutube size="40" color="#FCA61F" />
            <span>YouTube</span>
          </a>
          <a href="https://wa.me/919826190941" target="_blank" rel="noopener noreferrer">
            <UilWhatsapp size="40" color="#FCA61F" />
            <span>WhatsApp</span>
          </a>
          <a href="mailto:astrojaideepsharma@gmail.com">
            <UilEnvelope size="40" color="#FCA61F" />
            <span>Email</span>
          </a>
          <a href="tel:+919826190941">
            <UilPhone size="40" color="#FCA61F" />
            <span>Phone</span>
          </a>
        </div>
      </div>

      <div className="i-right">
        <motion.img
          whileInView={{ left: "8%" }}
          transition={transition}
          src={Astrology}
          alt="Astrology"/>
      </div>
    </div>
  );
};

export default Intro;
