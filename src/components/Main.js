import { useState, useEffect } from "react";
import api from "../utils/Api";
import Card from "./Card";

const Main = (props) => {
  const { onEditAvatar, onEditProfile, onAddPlace, onCardClick } = props;
  // Переменные состояния
  const [userName, setUserName] = useState("");
  const [userDescription, setUserDescription] = useState("");
  const [userAvatar, setUserAvatar] = useState("");
  const [cards, setCards] = useState([]);
  // Получение данных с сервера при загрузке приложения
  useEffect(() => {
    api.getInitialData().then(([initialCards, profileData]) => {
      setUserName(profileData.name);
      setUserDescription(profileData.about);
      setUserAvatar(profileData.avatar);
      setCards([...cards, ...initialCards]);
    });
  }, []);

  return (
    <>
      <main className='main'>
        <section className='profile'>
          <div className='profile__avatar-container'>
            <img
              className='profile__avatar'
              alt='Аватар пользователя'
              src={userAvatar}
            />
            <button
              className='profile__avatar-change-button'
              type='button'
              aria-label='Открыть форму смены аватара пользователя'
              onClick={onEditAvatar}
            ></button>
          </div>
          <div>
            <div className='profile__container'>
              <h1 className='profile__name'>{userName}</h1>
              <button
                className='profile__edit-button'
                title='Редактировать профиль'
                type='button'
                aria-label='Открыть форму редактирования профиля'
                onClick={onEditProfile}
              ></button>
            </div>
            <p className='profile__about'>{userDescription}</p>
          </div>
          <button
            className='profile__add-button'
            title='Добавить карточку'
            type='button'
            aria-label='Открыть форму добавления карточки'
            onClick={onAddPlace}
          ></button>
        </section>
        <section className='elements'>
          {cards.map((card, i) => (
            <Card card={card} key={i} onCardClick={onCardClick} />
          ))}
        </section>
      </main>
    </>
  );
};

export default Main;
