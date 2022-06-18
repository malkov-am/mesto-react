import { useContext } from 'react';
import Card from './Card';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

const Main = ({
  cards,
  onEditAvatar,
  onEditProfile,
  onAddPlace,
  onCardClick,
  onCardLike,
  onCardDelete,
}) => {
  // Подписка на контекст с данными о текущем пользователе
  const currentUser = useContext(CurrentUserContext);
  // Генерация разметки карточек
  const cardsElements = cards.map((card) => (
    <Card
      card={card}
      key={card._id}
      onCardClick={onCardClick}
      onCardLike={onCardLike}
      onCardDelete={onCardDelete}
    />
  ));

  return (
    <main className="main">
      <section className="profile">
        <div className="profile__avatar-container">
          <img className="profile__avatar" alt="Аватар пользователя" src={currentUser.avatar} />
          <button
            className="profile__avatar-change-button"
            type="button"
            aria-label="Открыть форму смены аватара пользователя"
            onClick={onEditAvatar}
          ></button>
        </div>
        <div>
          <div className="profile__container">
            <h1 className="profile__name">{currentUser.name}</h1>
            <button
              className="profile__edit-button"
              title="Редактировать профиль"
              type="button"
              aria-label="Открыть форму редактирования профиля"
              onClick={onEditProfile}
            ></button>
          </div>
          <p className="profile__about">{currentUser.about}</p>
        </div>
        <button
          className="profile__add-button"
          title="Добавить карточку"
          type="button"
          aria-label="Открыть форму добавления карточки"
          onClick={onAddPlace}
        ></button>
      </section>
      <section className="elements">{cardsElements}</section>
    </main>
  );
};

export default Main;
