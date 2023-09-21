import React from 'react';
import styles from './LockButton.module.scss';

function LockButton({ state, title, onClick }) {
    return (
        <div className={styles.lockbutton}>
            <button className={state === 'active' ? styles.active : styles.noActive} onClick={onClick}>
                {title}
            </button>
        </div>
    );
}

export default LockButton;
