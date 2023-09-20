import React from 'react'

import styles from './Main.module.scss';

import Textarea from '../../components/UI/Textarea/Textarea';
import Button from '../../components/UI/Button/Button';

function Main() {
  return (
    <div className={styles.mainContent}>
      <h1 className={'title'}>Делитесь информацией безопасно.</h1>
      <div className={styles.mainContentBox}>
        <p className={'gray-text'}>
          Привет! Я создаю секретные ссылки.
        </p>
        <p className={'dark-gray-text'}>
          Просто введите текст, и мы сгенерируем ссылку, которая самоуничтожится после просмотра или через указанное Вами время.
        </p>
        <Textarea />
      </div>
    </div>
  )
}

export default Main;