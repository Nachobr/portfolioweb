import React, { useState } from 'react';
import Typewriter from 'react-typed';
import styles from './HeroSectionStyles.module.css';

const HeroSection = () => {

  const [showMenu, setShowMenu] = useState(false);
  console.log("showMenu", showMenu);

  const handleClick = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className={styles['hero-container']}>
      <div className={styles['hero-content']}>
        <h1 className={styles['hero-h1']}>Hello, I'm Ignacio Britos</h1>
        <p className={styles['hero-p']}>
          <Typewriter
            strings={["Web Developer", "Frontend Engineer", "UI/UX Designer"]}
            autoStart={true}
            loop={true}
            onComplete={(self) => console.log("Typewriter completed")}
          />
        </p>
        <button className={styles['hero-btn']} onClick={handleClick}>View My Work - temporary text</button>
        {showMenu && (
          <div className={styles['hero-menu']}>
            <a className={styles['hero-menu-item']} href="https://app.yubiai.market/" target="_blank">Yubiai the web3 marketplace</a>
            <a className={styles['hero-menu-item']} href="#">IA personal responser</a>
            <a className={styles['hero-menu-item']} href="#">360 Model renderer</a>
          </div>
        )}
      </div>
    </div>
  );
};

export default HeroSection;
