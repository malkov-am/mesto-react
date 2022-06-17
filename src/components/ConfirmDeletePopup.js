import React from 'react';
import PopupWithForm from './PopupWithForm';

const ConfirmDeletePopup = ({
  isOpen,
  onClose,
  cardToDelete,
  onConfirmDelete,
  onOverlayClick,
  isLoading,
}) => {
  function handleSubmit(evt) {
    evt.preventDefault();
    onConfirmDelete(cardToDelete);
  }

  return (
    <PopupWithForm
      name="confirm-form"
      title="Вы уверены?"
      btnTitle={!isLoading ? 'Да' : 'Удаление...'}
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      onOverlayClick={onOverlayClick}
    />
  );
};

export default ConfirmDeletePopup;
