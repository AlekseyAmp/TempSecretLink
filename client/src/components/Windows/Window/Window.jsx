import React from 'react';

import styles from './Window.module.scss';

function Window({content}) {
  return (
    <div className={styles.window}>{content}</div>
  )
}

export default Window