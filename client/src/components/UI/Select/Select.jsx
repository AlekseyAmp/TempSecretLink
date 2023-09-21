import React, { useState } from 'react';

import styles from './Select.module.scss';

function Select({ title, options, onSelect }) {
  const [selectedExpireDate, setSelectedExpireDate] = useState(3600);

  const handleChange = (e) => {
    const value = e.target.value;
    setSelectedExpireDate(value);
    onSelect(value);
  };

  return (
    <div className={styles.select}>
      <h3 className={`label-text`}>{title}</h3>
      <select value={selectedExpireDate} onChange={handleChange}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Select;
