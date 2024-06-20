import React from 'react';
import './ContactNow.css';
import UilWhatsapp from '@iconscout/react-unicons/icons/uil-whatsapp';
import UilYoutube from '@iconscout/react-unicons/icons/uil-youtube';
import UilEnvelope from '@iconscout/react-unicons/icons/uil-envelope';
import UilPhone from '@iconscout/react-unicons/icons/uil-phone';

const ContactNow = () => {
    return (
        <div className="contact-now">
            <h1>Contact Us Now</h1>
            <p>Feel free to reach out to us for any inquiries or services.</p>
            <div className="contact-icons">
                <div className="icon-container">
                    <a href="https://wa.me/919826190941" target="_blank" rel="noopener noreferrer">
                        <UilWhatsapp size="50" className="icon" />
                    </a>
                    <span>WhatsApp</span>
                </div>
                <div className="icon-container">
                    <a href="https://www.youtube.com/@jyotishacharyjaideepsharma1621" target="_blank" rel="noopener noreferrer">
                        <UilYoutube size="50" className="icon" />
                    </a>
                    <span>YouTube</span>
                </div>
                <div className="icon-container">
                    <a href="mailto:astrojaideepsharma@gmail.com">
                        <UilEnvelope size="50" className="icon" />
                    </a>
                    <span>Email</span>
                </div>
                <div className="icon-container">
                    <a href="tel:+919826190941">
                        <UilPhone size="50" className="icon" />
                    </a>
                    <span>Phone</span>
                </div>
            </div>
            <form className="contact-form">
                <label>
                    Name:
                    <input type="text" name="name" />
                </label>
                <label>
                    Email:
                    <input type="email" name="email" />
                </label>
                <label>
                    Message:
                    <textarea name="message"></textarea>
                </label>
                <button type="submit">Send Message</button>
            </form>
        </div>
    );
};

export default ContactNow;
