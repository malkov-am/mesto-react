function App() {
  return (
    <div className='page'>
      <header className='header'>
        <img
          className='header__logo'
          src="<%=require('./images/header-logo.svg')%>"
          alt='Логотип Mesto'
        />
      </header>
      <main className='main'>
        <section className='profile'>
          <div className='profile__avatar-container'>
            <img className='profile__avatar' alt='Аватар пользователя' />
            <button
              className='profile__avatar-change-button'
              type='button'
              aria-label='Открыть форму смены аватара пользователя'
            ></button>
          </div>
          <div>
            <div className='profile__container'>
              <h1 className='profile__name'></h1>
              <button
                className='profile__edit-button'
                title='Редактировать профиль'
                type='button'
                aria-label='Открыть форму редактирования профиля'
              ></button>
            </div>
            <p className='profile__about'></p>
          </div>
          <button
            className='profile__add-button'
            title='Добавить карточку'
            type='button'
            aria-label='Открыть форму добавления карточки'
          ></button>
        </section>
        <section className='elements'></section>
      </main>
      <footer className='footer'>
        <p className='footer__copyright'>&copy; 2020 Mesto Russia</p>
      </footer>
      <div className='popup popup_light' id='edit-profile'>
        <div className='popup__container'>
          <form
            className='form'
            name='profile-form'
            id='profile-form'
            novalidate
          >
            <h2 className='form__header'>Редактировать профиль</h2>
            <input
              id='name'
              name='name'
              type='text'
              className='form__input'
              placeholder='Имя'
              aria-label='Имя'
              required
              minlength='2'
              maxlength='40'
            />
            <span className='form__error-message name-error'></span>
            <input
              id='about'
              name='about'
              type='text'
              className='form__input'
              placeholder='Должность'
              aria-label='Должность'
              required
              minlength='2'
              maxlength='200'
            />
            <span className='form__error-message about-error'></span>
            <button
              className='form__save-button'
              title='Сохранить'
              type='submit'
            >
              Сохранить
            </button>
          </form>
          <button
            className='popup__close-button'
            title='Закрыть'
            type='button'
            aria-label='Закрыть форму'
          ></button>
        </div>
      </div>
      <div className='popup popup_light' id='new-card'>
        <div className='popup__container'>
          <form
            className='form'
            name='new-card-form'
            id='new-card-form'
            novalidate
          >
            <h2 className='form__header'>Новое место</h2>
            <input
              id='title'
              name='name'
              type='text'
              className='form__input'
              placeholder='Название'
              aria-label='Название'
              required
              minlength='2'
              maxlength='30'
            />
            <span className='form__error-message title-error'></span>
            <input
              id='link'
              name='link'
              type='url'
              className='form__input'
              placeholder='Ссылка на картинку'
              aria-label='Ссылка на картинку'
              required
            />
            <span className='form__error-message link-error'></span>
            <button className='form__save-button' title='Создать' type='submit'>
              Создать
            </button>
          </form>
          <button
            className='popup__close-button'
            title='Закрыть'
            type='button'
            aria-label='Закрыть форму'
          ></button>
        </div>
      </div>
      <div className='popup popup_light' id='confirm'>
        <div className='popup__container'>
          <form
            className='form'
            name='confirm-form'
            id='confirm-form'
            novalidate
          >
            <h2 className='form__header'>Вы уверены?</h2>
            <button className='form__save-button' title='Да' type='button'>
              Да
            </button>
          </form>
          <button
            className='popup__close-button'
            title='Закрыть'
            type='button'
            aria-label='Закрыть форму'
          ></button>
        </div>
      </div>
      <div className='popup popup_dark' id='view-image'>
        <div className='popup__image-container'>
          <figure className='popup__figure'>
            <img className='popup__image' src='#' />
            <figcaption className='popup__image-caption'>
              Наименование
            </figcaption>
          </figure>
          <button
            className='popup__close-button'
            title='Закрыть'
            type='button'
            aria-label='Закрыть просмотр'
          ></button>
        </div>
      </div>
      <div className='popup popup_light' id='new-avatar'>
        <div className='popup__container'>
          <form
            className='form'
            name='new-avatar-form'
            id='new-avatar-form'
            novalidate
          >
            <h2 className='form__header'>Обновить аватар</h2>
            <input
              id='avatar'
              name='avatar'
              type='url'
              className='form__input'
              placeholder='Ссылка на аватар'
              aria-label='Ссылка на аватар'
              required
            />
            <span className='form__error-message avatar-error'></span>
            <button
              className='form__save-button'
              title='Сохранить'
              type='submit'
            >
              Сохранить
            </button>
          </form>
          <button
            className='popup__close-button'
            title='Закрыть'
            type='button'
            aria-label='Закрыть форму'
          ></button>
        </div>
      </div>
      <template id='card-template'>
        <article className='element'>
          <img className='element__image' />
          <div className='element__caption'>
            <h2 className='element__title'></h2>
            <div className='element__like-container'>
              <button
                className='element__like-button'
                title='Нравится'
                type='button'
                aria-label='Поставить лайк'
              ></button>
              <p className='element__like-counter'></p>
            </div>
          </div>
          <button
            className='element__delete-button'
            title='Удалить'
            type='button'
            aria-label='Удалить карточку'
          ></button>
        </article>
      </template>
    </div>
  );
}

export default App;
