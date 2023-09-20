import React from 'react';

import styles from './Header.module.scss';

function Header() {
    return (
        <header>
            <div className={styles.headerContent}>
                <div className='logo'>
                    <img src="img/Logo.svg" alt="Logo" />
                </div>
                <div className={styles.headerContentMenu}>
                    <ul>
                        <li>
                            <a href="#">Elem</a>
                        </li>
                        <li>
                            <a href="#">Elem</a>
                        </li>
                        <li>
                            <a href="#">Elem</a>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    )
}

export default Header;