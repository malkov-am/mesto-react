import React from 'react';
import PopupWithForm from './PopupWithForm';

const ConfirmDeletePopup = ({ isOpen, onClose, cardToDelete, onConfirmDelete }) => {
  function handleSubmit(evt) {
    evt.preventDefault();
    onConfirmDelete(cardToDelete);
  }

  return (
    <PopupWithForm
      name="confirm-form"
      title="Вы уверены?"
      btnTitle="Да"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    />
  );
};

export default ConfirmDeletePopup;
