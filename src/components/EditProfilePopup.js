import React, { useContext, useEffect, useState } from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import PopupWithForm from './PopupWithForm';

const EditProfilePopup = ({ isOpen, onClose, onUpdateUser }) => {
  // Переменные состояния
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  // Обработчик ввода в поле
  function handleChangeName(evt) {
    setName(evt.target.value);
  }
  function handleChangeDescription(evt) {
    setDescription(evt.target.value);
  }
  // Подписка на контекст с данными о текущем пользователе
  const currentUser = useContext(CurrentUserContext);
  // Подстановка данных в форму
  useEffect(() => {
    currentUser?.name && setName(currentUser.name);
    currentUser?.about && setDescription(currentUser.about);
  }, [currentUser, isOpen]);

  function handleSubmit(evt) {
    evt.preventDefault();
    onUpdateUser({
      name,
      about: description,
    });
  }

  return (
    <PopupWithForm
      name="profile-form"
      title="Редактировать профиль"
      btnTitle="Сохранить"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <input
        id="name"
        name="name"
        type="text"
        className="form__input"
        placeholder="Имя"
        aria-label="Имя"
        required
        minLength="2"
        maxLength="40"
        onChange={handleChangeName}
        value={name}
      />
      <span className="form__error-message name-error"></span>
      <input
        id="about"
        name="about"
        type="text"
        className="form__input"
        placeholder="Должность"
        aria-label="Должность"
        required
        minLength="2"
        maxLength="200"
        onChange={handleChangeDescription}
        value={description}
      />
      <span className="form__error-message about-error"></span>
    </PopupWithForm>
  );
};

export default EditProfilePopup;
