import { useState } from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';

function App() {
  // Переменные состояния
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isViewImagePopupOpen, setViewImagePopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({});

  // Обработчик нажатия на кнопку редактирования профиля
  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }
  // Обработчик нажатия на кнопку добавления карточки
  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }
  // Обработчик нажатия на кнопку редактирования аватара
  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }
  // Обработчик нажатия на кнопку закрытия попапа
  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setViewImagePopupOpen(false);
    setSelectedCard({});
  }
  // Обработчик нажатия на изображение в карточке
  function handleCardClick(card) {
    setSelectedCard(card);
    setViewImagePopupOpen(true);
  }

  return (
    <div className="app">
      <div className="page">
        <Header />
        <Main
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onEditAvatar={handleEditAvatarClick}
          onCardClick={handleCardClick}
        />
        <Footer />
        <PopupWithForm
          name="profile-form"
          title="Редактировать профиль"
          btnTitle="Сохранить"
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
        >
          <input
            id="name"
            name="name"
            type="text"
            className="form__input"
            placeholder="Имя"
            aria-label="Имя"
            required
            minLength="2"
            maxLength="40"
          />
          <span className="form__error-message name-error"></span>
          <input
            id="about"
            name="about"
            type="text"
            className="form__input"
            placeholder="Должность"
            aria-label="Должность"
            required
            minLength="2"
            maxLength="200"
          />
          <span className="form__error-message about-error"></span>
        </PopupWithForm>
        <PopupWithForm
          name="new-card-form"
          title="Новое место"
          btnTitle="Создать"
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
        >
          <input
            id="title"
            name="name"
            type="text"
            className="form__input"
            placeholder="Название"
            aria-label="Название"
            required
            minLength="2"
            maxLength="30"
          />
          <span className="form__error-message title-error"></span>
          <input
            id="link"
            name="link"
            type="url"
            className="form__input"
            placeholder="Ссылка на картинку"
            aria-label="Ссылка на картинку"
            required
          />
          <span className="form__error-message link-error"></span>
        </PopupWithForm>
        <PopupWithForm
          name="confirm-form"
          title="Вы уверены?"
          btnTitle="Да"
          isOpen={false}
          onClose={closeAllPopups}
        />
        <PopupWithForm
          name="new-avatar-form"
          title="Обновить аватар"
          btnTitle="Сохранить"
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
        >
          <input
            id="avatar"
            name="avatar"
            type="url"
            className="form__input"
            placeholder="Ссылка на аватар"
            aria-label="Ссылка на аватар"
            required
          />
          <span className="form__error-message avatar-error"></span>
        </PopupWithForm>
        <ImagePopup card={selectedCard} onClose={closeAllPopups} isOpen={isViewImagePopupOpen} />
      </div>
    </div>
  );
}

export default App;
