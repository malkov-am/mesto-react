import React, { useEffect } from 'react';
import useValidation from '../hooks/useValidation';
import PopupWithForm from './PopupWithForm';

const AddPlacePopup = ({ isOpen, onClose, onAddPlace, onOverlayClick, isLoading }) => {
  // Валидация формы
  const { values, errors, isValid, handleChange, resetForms } = useValidation('.form');
  // Сброс полей формы при открытии
  useEffect(() => {
    resetForms();
  }, [isOpen, resetForms]);
  // Обработчик добавления карточки
  function handleSubmit(evt) {
    evt.preventDefault();
    onAddPlace(values);
  }

  return (
    <PopupWithForm
      name="new-card-form"
      title="Новое место"
      btnTitle={!isLoading ? 'Создать' : 'Создание...'}
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      onOverlayClick={onOverlayClick}
      isValid={isValid}
    >
      <input
        id="title"
        name="name"
        type="text"
        className="form__input"
        placeholder="Название"
        aria-label="Название"
        required
        minLength="2"
        maxLength="30"
        onChange={handleChange}
        value={values.name || ''}
      />
      <span className="form__error-message title-error">{errors.name}</span>
      <input
        id="link"
        name="link"
        type="url"
        className="form__input"
        placeholder="Ссылка на картинку"
        aria-label="Ссылка на картинку"
        required
        onChange={handleChange}
        value={values.link || ''}
      />
      <span className="form__error-message link-error">{errors.link}</span>
    </PopupWithForm>
  );
};

export default AddPlacePopup;
