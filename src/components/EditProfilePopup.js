import React, { useContext, useEffect } from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import useValidation from '../hooks/useValidation';
import PopupWithForm from './PopupWithForm';

const EditProfilePopup = ({ isOpen, onClose, onUpdateUser, onOverlayClick, isLoading }) => {
  // Подписка на контекст с данными о текущем пользователе
  const currentUser = useContext(CurrentUserContext);
  // Валидация формы
  const { values, errors, isValid, handleChange, resetForms } = useValidation('.form');
  // Подстановка данных в форму
  useEffect(() => {
    currentUser && resetForms(currentUser, {}, true);
  }, [currentUser, isOpen, resetForms]);
  // Обработчик обновления данных профиля
  function handleSubmit(evt) {
    evt.preventDefault();
    onUpdateUser(values);
  }

  return (
    <PopupWithForm
      name="profile-form"
      title="Редактировать профиль"
      btnTitle={!isLoading ? 'Сохранить' : 'Сохранение...'}
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      onOverlayClick={onOverlayClick}
      isValid={isValid}
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
        onChange={handleChange}
        value={values.name || ''}
      />
      <span className="form__error-message name-error">{errors.name}</span>
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
        onChange={handleChange}
        value={values.about || ''}
      />
      <span className="form__error-message about-error">{errors.about}</span>
    </PopupWithForm>
  );
};

export default EditProfilePopup;
