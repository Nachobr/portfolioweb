import React from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaPython } from 'react-icons/fa';
import styles from './SkillsSection.module.css';

const SkillsSection = ({t}) => {
    return (
        <section id="myskills">
            <div className={styles['skills-container']}>
                <div className={styles['skills-wrapper']}>
                    <h2 className={styles['skills-h2']}>{t("Skills")}</h2>
                    <div className={styles['skills-icons']}>
                        <div className={styles['skill-icon']}>
                            <svg className={styles['skill-iconSolid']} role="img" viewBox="0 -12 36 36" xmlns="http://www.w3.org/2000/svg"><path d="M4.409 6.608L7.981.255l3.572 6.353H4.409zM8.411 0l3.569 6.348L15.552 0H8.411zm4.036 17.392l3.572 6.354 3.575-6.354h-7.147zm-.608-10.284h-7.43l3.715 6.605 3.715-6.605zm.428-.25h7.428L15.982.255l-3.715 6.603zM15.589 24l-3.569-6.349L8.448 24h7.141zm-3.856-6.858H4.306l3.712 6.603 3.715-6.603zm.428-.25h7.433l-3.718-6.605-3.715 6.605z" /></svg>
                            <p className={styles['skill-name']}>Solidity</p>
                        </div>
                        <div className={styles['skill-icon']}>
                            <FaHtml5 size="3rem" />
                            <p className={styles['skill-name']}>HTML5</p>
                        </div>
                        <div className={styles['skill-icon']}>
                            <FaCss3Alt size="3rem" />
                            <p className={styles['skill-name']}>CSS3</p>
                        </div>
                        <div className={styles['skill-icon']}>
                            <FaJs size="3rem" fill="white" />
                            <p className={styles['skill-name']}>JavaScript</p>
                        </div>
                        <div className={styles['skill-icon']}>
                            <FaReact size="3rem" />
                            <p className={styles['skill-name']}>React</p>
                        </div>
                        <div className={styles['skill-icon']}>
                            <FaNodeJs size="3rem" />
                            <p className={styles['skill-name']}>Node.js</p>
                        </div>
                        <div className={styles['skill-icon']}>
                            <FaPython size="3rem" />
                            <p className={styles['skill-name']}>Python</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SkillsSection;
