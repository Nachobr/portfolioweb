import React, { useState } from 'react';
import Typewriter from 'react-typed';
import styles from './HeroSectionStyles.module.css';


const HeroSection = ({t}) => {
  
  const [showMenu, setShowMenu] = useState(false);
  
  
  const handleClick = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className={styles['hero-container']}>
      <div className={styles['hero-content']}>
        <img src="./ProfPic.jpg" alt="Profile Picture" className={styles['profile-pic']} />
        <h1 className={styles['hero-h1']}>{t("Hello")}</h1>
        
        <p className={styles['hero-p']}>
          <Typewriter
            strings={[t("Basic Smart Contract Dev"),t("FullStack Web Developer"), t("UI/UX Designer")]}
            autoStart={true}
            loop={true}
            
          />
        </p>
        <button className={styles['hero-btn']} onClick={handleClick}>{t("Portfolio")}</button>
        {showMenu && (
          <div className={styles['hero-menu']}>
            <a className={styles['hero-menu-item']} href="https://website-yubiai.vercel.app/es" target="_blank">{t("Yubiai Landing")}</a>
            <a className={styles['hero-menu-item']} href="https://app.yubiai.market/es" target="_blank">{t("Yubiai App(team work)")}</a>
            <a className={styles['hero-menu-item']} href="https://github.com/Nachobr/mymeAI" target="_blank">{t("AI personal responser(unfinished)")}</a>
            <a className={styles['hero-menu-item']} href="https://sites.google.com/view/pruebamodelado/home" target="_blank">{t("360 Model renderer")}</a>
          </div>
        )}
      </div>
    </div>
  );
};

export default HeroSection;
