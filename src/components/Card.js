import React, { useContext } from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

const Card = ({ card, onCardClick, onCardLike, onCardDelete }) => {
  // Подписка на контекст с данными о текущем пользователе
  const currentUser = useContext(CurrentUserContext);
  const { likes, name, link } = card;
  // Обработчик нажатия на изображение в карточке
  function handleCardClick() {
    onCardClick(card);
  }
  // Обработчик нажатия на лайк в карточке
  function handleLikeClick() {
    onCardLike(card);
  }
  // Обработчик нажатия на иконку удаления карточки
  function handleDeleteClick() {
    onCardDelete(card);
  }
  // Определяем, являемся ли мы владельцем текущей карточки
  const isOwn = card.owner._id === currentUser._id;
  // Определяем, есть ли у карточки лайк, поставленный текущим пользователем
  const isLiked = card.likes.some((user) => user._id === currentUser._id);

  return (
    <article className="element">
      <img className="element__image" src={link} alt={name} onClick={handleCardClick} />
      <div className="element__caption">
        <h2 className="element__title">{name}</h2>
        <div className="element__like-container">
          <button
            className={`element__like-button ${isLiked && 'element__like-button_active'}`}
            title="Нравится"
            type="button"
            aria-label="Поставить лайк"
            onClick={handleLikeClick}
          ></button>
          <p className="element__like-counter">{likes.length}</p>
        </div>
      </div>
      <button
        className={`element__delete-button ${isOwn && 'element__delete-button_active'}`}
        title="Удалить"
        type="button"
        aria-label="Удалить карточку"
        onClick={handleDeleteClick}
      ></button>
    </article>
  );
};

export default Card;
