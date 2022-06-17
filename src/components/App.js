import { useEffect, useState } from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import api from '../utils/Api';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';
import AddPlacePopup from './AddPlacePopup';
import ConfirmDeletePopup from './ConfirmDeletePopup';

function App() {
  // Переменные состояния
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isViewImagePopupOpen, setViewImagePopupOpen] = useState(false);
  const [isConfirmDeletePopupOpen, setConfirmDeletePopupOpen] = useState(false);
  const [cardToDelete, setCardToDelete] = useState({});
  const [selectedCard, setSelectedCard] = useState({});
  const [currentUser, setCurrentUser] = useState({});
  const [cards, setCards] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // Обработка ошибок
  function handleError(error) {
    console.error(`🔥ERROR: ${error}`);
    alert(`ОШИБКА: ${error}`);
  }

  // Запись данных пользователя в переменную состояния
  useEffect(() => {
    api
      .getInitialData()
      .then(([initialCards, currentUser]) => {
        setCurrentUser(currentUser);
        setCards([...cards, ...initialCards]);
      })
      .catch((error) => handleError(error));
  }, []);

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
  // Обработчик нажатия на иконку удаления
  function handleCardDeleteClick(card) {
    setCardToDelete(card);
    setConfirmDeletePopupOpen(true);
  }
  // Обработчик нажатия на кнопку закрытия попапа
  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setViewImagePopupOpen(false);
    setConfirmDeletePopupOpen(false);
    setSelectedCard({});
  }
  // Обработчик нажатия на изображение в карточке
  function handleCardClick(card) {
    setSelectedCard(card);
    setViewImagePopupOpen(true);
  }
  // Обработчик клика по оверлею
  function handleOverlayClick(evt) {
    evt.target === evt.currentTarget && closeAllPopups();
  }
  // Обработчик добавления лайка
  function handleCardLike(card) {
    // Определяем, есть ли у карточки лайк, поставленный текущим пользователем
    const isLiked = card.likes.some((user) => user._id === currentUser._id);
    // Отправляем запрос в API и получаем обновлённые данные карточки
    api
      .changeLikeCardStatus(card._id, isLiked)
      .then((newCard) => {
        setCards((state) => state.map((c) => (c._id === card._id ? newCard : c)));
      })
      .catch((error) => handleError(error));
  }

  // Обработчик удаления карточки
  function handleCardDelete(card) {
    setIsLoading(true);
    api
      .deleteCard(card._id)
      .then(() => {
        setCards((state) => state.filter((c) => c._id !== card._id));
        closeAllPopups();
      })
      .catch((error) => handleError(error))
      .finally(() => setIsLoading(false));
  }
  // Обработчик обновления данных пользователя
  function handleUpdateUser(userData) {
    setIsLoading(true);
    api
      .setProfileData(userData)
      .then((updatedUserData) => {
        setCurrentUser(updatedUserData);
        closeAllPopups();
      })
      .catch((error) => handleError(error))
      .finally(() => setIsLoading(false));
  }
  // Обработчик обновления аватара пользователя
  function handleUpdateAvatar(avatarData) {
    setIsLoading(true);
    api
      .changeAvatar(avatarData)
      .then((updatedUserData) => {
        setCurrentUser(updatedUserData);
        closeAllPopups();
      })
      .catch((error) => handleError(error))
      .finally(() => setIsLoading(false));
  }
  // Обработчик добавления новой карточки
  function handleAddPlaceSubmit(cardData) {
    setIsLoading(true);
    api
      .addCard(cardData)
      .then((newCard) => {
        setCards([newCard, ...cards]);
        closeAllPopups();
      })
      .catch((error) => handleError(error))
      .finally(() => setIsLoading(false));
  }

  return (
    <div className="app">
      <div className="page">
        <Header />
        <CurrentUserContext.Provider value={currentUser}>
          <Main
            cards={cards}
            onEditProfile={handleEditProfileClick}
            onAddPlace={handleAddPlaceClick}
            onEditAvatar={handleEditAvatarClick}
            onCardClick={handleCardClick}
            onCardLike={handleCardLike}
            onCardDelete={handleCardDeleteClick}
          />
          <EditProfilePopup
            isOpen={isEditProfilePopupOpen}
            onClose={closeAllPopups}
            onUpdateUser={handleUpdateUser}
            onOverlayClick={handleOverlayClick}
            isLoading={isLoading}
          />
        </CurrentUserContext.Provider>
        <Footer />
        <AddPlacePopup
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
          onAddPlace={handleAddPlaceSubmit}
          onOverlayClick={handleOverlayClick}
          isLoading={isLoading}
        />
        <ConfirmDeletePopup
          isOpen={isConfirmDeletePopupOpen}
          onClose={closeAllPopups}
          cardToDelete={cardToDelete}
          onConfirmDelete={handleCardDelete}
          onOverlayClick={handleOverlayClick}
          isLoading={isLoading}
        />
        <EditAvatarPopup
          onClose={closeAllPopups}
          isOpen={isEditAvatarPopupOpen}
          onUpdateAvatar={handleUpdateAvatar}
          onOverlayClick={handleOverlayClick}
          isLoading={isLoading}
        />
        <ImagePopup
          card={selectedCard}
          onClose={closeAllPopups}
          isOpen={isViewImagePopupOpen}
          onOverlayClick={handleOverlayClick}
        />
      </div>
    </div>
  );
}

export default App;
