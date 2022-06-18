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
  // Обработчик подтверждения удаления карточки
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
      isValid={true}
    />
  );
};

export default ConfirmDeletePopup;
