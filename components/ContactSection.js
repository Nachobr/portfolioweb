import React from 'react';
import { FaEnvelope, FaTelegram } from 'react-icons/fa';
import styles from './ContactSection.module.css';

const ContactSection = ({t}) => {
  return (
    <section id="contact" className={styles['contact-container']}>
      <div className={styles['contact-wrapper']}>
        <h2 className={styles['contact-h2']}>{t("Contact Me")}</h2>
        <p className={styles['contact-p']}>{t("Feel free")}</p>
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
