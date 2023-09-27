import React from 'react';

import styles from './Textarea.module.scss';

function Textarea({ placeholder, onChange }) {
  return (
    <div onChange={onChange} className={styles.textarea}>
      <textarea placeholder={placeholder}>
      </textarea>
    </div>
  );
}

export default Textarea;