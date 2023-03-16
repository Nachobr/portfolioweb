import React from 'react';
import { FaEnvelope, FaTelegram } from 'react-icons/fa';
import styles from './ContactSection.module.css';

const ContactSection = () => {
  return (
    <section id="contact" className={styles['contact-container']}>
      <div className={styles['contact-wrapper']}>
        <h2 className={styles['contact-h2']}>Contact Me</h2>
        <p className={styles['contact-p']}>Feel free to reach out to me if you have any questions or if you would like to collaborate on a project.</p>
        <div className={styles['contact-details']}>
          <div className={styles['contact-item']}>
            <div className={styles['contact-icon']}>
              <FaEnvelope />
            </div>
            <a href="mailto:ignbritos@gmail.com" target={"_blank"} className={styles['contact-link']}>ignbritos@gmail.com</a>
          </div>
          <div className={styles['contact-item']}>
            <div className={styles['contact-icon']}>
              <FaTelegram />
            </div>
            <a href="https://t.me/igbritos" target={"_blank"} className={styles['contact-link']}>@igbritos</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
