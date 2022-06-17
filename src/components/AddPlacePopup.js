import React, { useEffect, useState } from 'react';
import PopupWithForm from './PopupWithForm';

const AddPlacePopup = ({ isOpen, onClose, onAddPlace, onOverlayClick }) => {
  // Переменные состояния
  const [title, setTitle] = useState('');
  const [link, setLink] = useState('');
  // Обработчик ввода в поле названия
  function handleChangeTitle(evt) {
    setTitle(evt.target.value);
  }
  // Обработчик ввода в поле ссылки
  function handleChangeLink(evt) {
    setLink(evt.target.value);
  }
  // Обработчик добавления карточки
  function handleSubmit(evt) {
    evt.preventDefault();
    onAddPlace({ name: title, link: link });
  }
  // Сброс полей формы при открытии
  useEffect(() => {
    setTitle('');
    setLink('');
  }, [isOpen]);

  return (
    <PopupWithForm
      name="new-card-form"
      title="Новое место"
      btnTitle="Создать"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      onOverlayClick={onOverlayClick}
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
        onChange={handleChangeTitle}
        value={title}
      />
      <span className="form__error-message title-error"></span>
      <input
        id="link"
        name="link"
        type="url"
        className="form__input"
        placeholder="Ссылка на картинку"
        aria-label="Ссылка на картинку"
        required
        onChange={handleChangeLink}
        value={link}
      />
      <span className="form__error-message link-error"></span>
    </PopupWithForm>
  );
};

export default AddPlacePopup;
