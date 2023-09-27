import React from 'react';

import styles from './SuccessWindow.module.scss';

function SuccessWindow({ message }) {
  return (
    <div className={styles.successBox}>
      <span className={'gray-text'}>{message}</span>
    </div>
  );
}

export default SuccessWindow;
