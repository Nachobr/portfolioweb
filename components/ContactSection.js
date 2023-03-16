import React from 'react';
import { FaEnvelope, FaPhone } from 'react-icons/fa';

const ContactSection = () => {
  return (
    <section id="contact">
      <div className="container">
        <h2>Contact Me</h2>
        <p>Feel free to reach out to me if you have any questions or if you would like to collaborate on a project.</p>
        <div className="contact-details">
          <div className="contact-item">
            <div className="icon">
              <FaEnvelope />
            </div>
            <a href="mailto:your-email@example.com">your-email@example.com</a>
          </div>
          <div className="contact-item">
            <div className="icon">
              <FaPhone />
            </div>
            <a href="tel:+1234567890">+1234567890</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
