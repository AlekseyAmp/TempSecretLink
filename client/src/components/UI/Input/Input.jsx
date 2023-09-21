import React from 'react';

import styles from './Input.module.scss';

function Input({ title, type, name, onChange }) {
    return (
        <div onChange={onChange} className={styles.input}>
            <label htmlFor={name} className={'label-text'}>{title}</label>

            <input
                type={type}
                name={name}
            />
        </div>
    )
}

export default Input;