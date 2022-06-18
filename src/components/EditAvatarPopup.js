import React, { useEffect, useRef } from 'react';
import useValidation from '../hooks/useValidation';
import PopupWithForm from './PopupWithForm';

const EditAvatarPopup = ({ isOpen, onClose, onUpdateAvatar, onOverlayClick, isLoading }) => {
  // Валидация формы
  const { values, errors, isValid, handleChange, resetForms } = useValidation('.form');

  /////////////////////////////////////////////
  // Управление формой через Ref             //
  /////////////////////////////////////////////

  // const avatarUrlRef = useRef();
  // // Обработчик обновления аватара
  // function handleSubmit(evt) {
  //   evt.preventDefault();
  //   onUpdateAvatar({
  //     avatar: avatarUrlRef.current.value,
  //   });
  // }
  // // Сброс полей формы при открытии
  // useEffect(() => {
  //   avatarUrlRef.current.value = '';
  // }, [isOpen]);

  // Сброс полей формы при открытии
  useEffect(() => {
    resetForms();
  }, [isOpen, resetForms]);
  // Обработчик обновления аватара
  function handleSubmit(evt) {
    evt.preventDefault();
    onUpdateAvatar(values);
  }

  return (
    <PopupWithForm
      name="new-avatar-form"
      title="Обновить аватар"
      btnTitle={!isLoading ? 'Сохранить' : 'Сохранение...'}
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      onOverlayClick={onOverlayClick}
      isValid={isValid}
    >
      <input
        id="avatar"
        name="avatar"
        type="url"
        className="form__input"
        placeholder="Ссылка на аватар"
        aria-label="Ссылка на аватар"
        // ref={avatarUrlRef}
        value={values.avatar || ''}
        onChange={handleChange}
        required
      />
      <span className="form__error-message avatar-error">{errors.avatar}</span>
    </PopupWithForm>
  );
};

export default EditAvatarPopup;
