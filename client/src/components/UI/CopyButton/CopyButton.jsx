import React from 'react';
import styles from './CopyButton.module.scss';

function Button({ title, onClick }) {
    return (
        <div className={styles.copybutton}>
            <button onClick={onClick}>
                {title}
            </button>
        </div>
    );
}

export default Button;
