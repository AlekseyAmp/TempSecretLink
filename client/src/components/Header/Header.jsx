import React from 'react';

import { Link } from 'react-router-dom';

import styles from './Header.module.scss';


function Header() {
    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <header>
            <div className={styles.headerContent}>
                <div className='logo'>
                    <a href="/"><img src="img/Logo.svg" alt="Logo"/></a>
                </div>
                <div className={styles.headerContentMenu}>
                    <ul>
                        <li className={'li-text'} onClick={() => scrollToSection('how-it-works')}>
                            Как это работает?
                        </li>
                        <div className='vertical-line'></div>
                        <li className={'li-text'} onClick={() => scrollToSection('faq')}>
                            FAQ
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    )
}

export default Header;
