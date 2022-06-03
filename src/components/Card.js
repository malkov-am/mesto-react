import React from "react";

const Card = (props) => {
  const { likes, name, link } = props.card;
  // Обработчик нажатия на изображение в карточке
  function handleCardClick() {
    props.onCardClick(props.card);
  }

  return (
    <>
      <article className='element'>
        <img
          className='element__image'
          src={link}
          alt={name}
          onClick={handleCardClick}
        />
        <div className='element__caption'>
          <h2 className='element__title'>{name}</h2>
          <div className='element__like-container'>
            <button
              className='element__like-button'
              title='Нравится'
              type='button'
              aria-label='Поставить лайк'
            ></button>
            <p className='element__like-counter'>{likes.length}</p>
          </div>
        </div>
        <button
          className='element__delete-button'
          title='Удалить'
          type='button'
          aria-label='Удалить карточку'
        ></button>
      </article>
    </>
  );
};

export default Card;
