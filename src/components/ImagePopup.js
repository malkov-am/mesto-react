import React from 'react';

const ImagePopup = ({ card: { name, link }, isOpen, onClose, onOverlayClick }) => {
  return (
    <div
      className={`popup popup_dark  ${isOpen ? 'popup_opened' : ''}`}
      id="view-image"
      onClick={onOverlayClick}
    >
      <div className="popup__image-container">
        <figure className="popup__figure">
          <img className="popup__image" src={link} alt={name} />
          <figcaption className="popup__image-caption">{name}</figcaption>
        </figure>
        <button
          className="popup__close-button"
          title="Закрыть"
          type="button"
          aria-label="Закрыть просмотр"
          onClick={onClose}
        ></button>
      </div>
    </div>
  );
};

export default ImagePopup;
