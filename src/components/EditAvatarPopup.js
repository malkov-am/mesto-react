import React, { useEffect, useRef } from 'react';
import PopupWithForm from './PopupWithForm';

const EditAvatarPopup = ({ isOpen, onClose, onUpdateAvatar, onOverlayClick }) => {
  const avatarUrlRef = useRef();
  // Обработчик обновления аватара
  function handleSubmit(evt) {
    evt.preventDefault();
    onUpdateAvatar({
      avatar: avatarUrlRef.current.value,
    });
  }
  // Сброс полей формы при открытии
  useEffect(() => {
    avatarUrlRef.current.value = '';
  }, [isOpen]);

  return (
    <PopupWithForm
      name="new-avatar-form"
      title="Обновить аватар"
      btnTitle="Сохранить"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      onOverlayClick={onOverlayClick}
    >
      <input
        id="avatar"
        name="avatar"
        type="url"
        className="form__input"
        placeholder="Ссылка на аватар"
        aria-label="Ссылка на аватар"
        ref={avatarUrlRef}
        required
      />
      <span className="form__error-message avatar-error"></span>
    </PopupWithForm>
  );
};

export default EditAvatarPopup;
