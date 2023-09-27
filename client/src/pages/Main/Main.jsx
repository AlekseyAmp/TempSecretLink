import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import copy from 'copy-to-clipboard';

import styles from './Main.module.scss';

import { expire_dates } from '../../constants/expire_dates';
import { createSecret, getSecret } from '../../services/secretService';

import Textarea from '../../components/UI/Textarea/Textarea';
import LockButton from '../../components/UI/LockButton/LockButton';
import Input from '../../components/UI/Input/Input';
import Select from '../../components/UI/Select/Select';
import Window from '../../components/Windows/Window/Window';
import CopyButton from '../../components/UI/CopyButton/CopyButton';
import SuccessWindow from '../../components/Windows/SuccessWindow/SuccessWindow';

function Main() {
  const { random_string, unique_id } = useParams();

  const [optionValue, setOptionValue] = useState(3600);
  const [textareaValue, setTextareaValue] = useState('');
  const [passwordValue, setPasswordValue] = useState(null);
  const [isButtonActive, setIsButtonActive] = useState(false);
  const [success, setSuccess] = useState(null);
  const [showSuccess, setShowSuccess] = useState(false);
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
    setSuccess('Ссылка скопирована');
    setShowSuccess(true);
    setTimeout(() => {
      setShowSuccess(false);
      setSuccess(null);
    }, 2500);
  };

  useEffect(() => {
    const getSecretByLink = async() => {
      if (random_string && unique_id) {
        const link = `http://localhost:3000/${random_string}/${unique_id}`

        const data = await getSecret(link);
        console.log(data)
      }
    }
    getSecretByLink();
  }, [random_string, unique_id]);

  return (
    <div className={styles.main}>
      {generatedLink ? (
        <div className={styles.generatedLink}>
          <h2 className='title'>Ваша ссылка сгенерирована!</h2>
          <p className='gray-text'>Срок хранения - {expire_dates.find(item => optionValue == item.value)?.label}</p>
          <div className={styles.generatedLinkContent}>
            <p className='dark-gray-text'>После просмотра сообщения или истечения срока хранения, ссылка больше не будет доступна.
              {passwordValue && (
                <p className='dark-gray-text'><span className='gray-text'>!</span>  Эта ссылка защищена паролем. Убедитесь, что вы передали пароль получателю, чтобы он смог открыть сообщение.</p>
              )}

            </p>
            <Window
              content={generatedLink}
            />
            <CopyButton
              title={'Скопировать'}
              onClick={copyLink}
            />
            <p className='dark-gray-text'>Спасибо, что используете наш сервис для безопасного обмена информацией!</p>
            {showSuccess && <SuccessWindow message={success} />}
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
