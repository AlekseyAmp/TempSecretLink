import React, { useState } from 'react';
import copy from 'copy-to-clipboard';

import styles from './Main.module.scss';

import { expire_dates } from '../../constants/expire_dates';
import { createSecret } from '../../services/secretService';

import Textarea from '../../components/UI/Textarea/Textarea';
import LockButton from '../../components/UI/LockButton/LockButton';
import Input from '../../components/UI/Input/Input';
import Select from '../../components/UI/Select/Select';
import Window from '../../components/Windows/Window/Window';
import CopyButton from '../../components/UI/CopyButton/CopyButton';

function Main() {
  const [optionValue, setOptionValue] = useState(3600);
  const [textareaValue, setTextareaValue] = useState('');
  const [passwordValue, setPasswordValue] = useState(null);
  const [isButtonActive, setIsButtonActive] = useState(false);
  const [generatedLink, setGeneratedLink] = useState(null);

  const handleOptionChange = (value) => {
    setOptionValue(value);
  };

  const handleTextareaChange = (e) => {
    const value = e.target.value;
    setTextareaValue(value);
    setIsButtonActive(value !== '');
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPasswordValue(value);
  };

  const handleCreateSecret = async (e) => {
    e.preventDefault();
    const link = await createSecret(textareaValue, optionValue, passwordValue);
    setGeneratedLink(link);
  };

  const copyLink = () => {
    copy(generatedLink);
    alert(`You have copied "${generatedLink}"`);
  };

  return (
    <div className={styles.main}>
      {generatedLink ? (
        <div className={styles.generatedLink}>
          <h2 className='title'>Ваша ссылка сгенерирована!</h2>
          <p className='gray-text'>Срок хранения - {expire_dates.find(item => item.value === optionValue)?.label}</p>
          <div className={styles.generatedLinkContent}>
              <Window
              content={generatedLink}
              />
              <CopyButton
              title={'Скопировать'}
              onClick={copyLink}
              />
            </div>
          </div>
      ) : (
        <>
          <h1 className={'title'}>Делитесь информацией безопасно.</h1>

          <div className={styles.createSecret}>
            <div className={styles.createSecretText}>
              <p className={'gray-text'}>
                Привет! Я создаю одноразовые секретные ссылки.
              </p>
              <p className={'dark-gray-text'}>
                Просто введите своё сообщение, и я сгенерирую ссылку, которая самоуничтожится после просмотра или через указанное Вами время.
              </p>
            </div>

            <Textarea
              placeholder={'Ваше сообщение...'}
              onChange={handleTextareaChange}
            />

            <div className={styles.createSecretOptions}>
              <h3 className={'gray-text'}>Дополнительные настройки</h3>
              <div className={styles.createSecretOptionsContent}>
                <Select
                  title={'Выберите срок хранения ссылки'}
                  options={expire_dates}
                  onSelect={handleOptionChange}
                />
                <Input
                  type={'password'}
                  name={'password'}
                  title={'Придумайте пароль *(Необязательно)'}
                  onChange={handlePasswordChange}
                />
              </div>
            </div>

            <LockButton
              state={isButtonActive ? 'active' : 'noActive'}
              title={'Создать ссылку'}
              onClick={(e) => {
                if (isButtonActive) {
                  handleCreateSecret(e);
                }
              }}
            />
          </div>

          <div className={styles.howItWorks} id='how-it-works'>
            <h2 className='title'>Как это работает?</h2>
          </div>

          <div className={styles.FAQ} id='faq'>
            1
          </div>
        </>
      )}
    </div>
  );
}

export default Main;
