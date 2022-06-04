import React from 'react';

const PopupWithForm = ({ name, title, isOpen, onClose, btnTitle, children }) => {
  return (
    <div
      className={`popup popup_light popup_type_${name} ${isOpen && 'popup_opened'}`}
      id="edit-profile"
    >
      <div className="popup__container">
        <form className="form" name={name} noValidate />
        <h2 className="form__header">{title}</h2>
        {children}
        <button className="form__save-button" title={btnTitle} type="submit">
          {btnTitle}
        </button>
        <button
          className="popup__close-button"
          title="Закрыть"
          type="button"
          aria-label="Закрыть форму"
          onClick={onClose}
        ></button>
      </div>
    </div>
  );
};

export default PopupWithForm;
