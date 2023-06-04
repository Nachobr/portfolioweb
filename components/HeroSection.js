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
        <h1 className={styles['hero-h1']}>{t("Hello")}</h1>
        
        <p className={styles['hero-p']}>
          <Typewriter
            strings={["Basic Smart Contract Dev","FullStack Web Developer", "UI/UX Designer"]}
            autoStart={true}
            loop={true}
            
          />
        </p>
        <button className={styles['hero-btn']} onClick={handleClick}>View My Work</button>
        {showMenu && (
          <div className={styles['hero-menu']}>
            <a className={styles['hero-menu-item']} href="https://app.yubiai.market/" target="_blank">Yubiai the web3 marketplace</a>
            <a className={styles['hero-menu-item']} href="https://github.com/Nachobr/mymeAI">IA personal responser(unfinished)</a>
            <a className={styles['hero-menu-item']} href="https://github.com/Nachobr/dbi360">360 Model renderer</a>
          </div>
        )}
      </div>
    </div>
  );
};

export default HeroSection;
