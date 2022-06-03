class Api {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }
  // Обработчик ответа с сервера
  _handleResponse(res) {
    return res.ok ? res.json() : Promise.reject(res.status);
  }
  // Запрос карточек с сервера
  _getInitialCards() {
    return fetch(`${this._baseUrl}/cards`, {
      headers: this._headers,
    }).then((res) => this._handleResponse(res));
  }
  // Запрос данных пользователя с сервера
  _getProfileData() {
    return fetch(`${this._baseUrl}/users/me`, {
      headers: this._headers,
    }).then((res) => this._handleResponse(res));
  }
  getInitialData() {
    return Promise.all([this._getInitialCards(), this._getProfileData()]);
  }
  // Отправка данных пользователя на сервер
  setProfileData({ name, about }) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({ name: name, about: about }),
    }).then((res) => this._handleResponse(res));
  }
  // Добавление новой карточки на сервер
  addCard({ name, link }) {
    return fetch(`${this._baseUrl}/cards`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        name: name,
        link: link,
      }),
    }).then((res) => this._handleResponse(res));
  }
  // Удаление карточки с сервера
  deleteCard(cardId) {
    return fetch(`${this._baseUrl}/cards/${cardId}`, {
      method: 'DELETE',
      headers: this._headers,
    }).then((res) => this._handleResponse(res));
  }
  // Добавить лайк к карточке
  addLike(cardId) {
    return fetch(`${this._baseUrl}/cards/${cardId}/likes`, {
      method: 'PUT',
      headers: this._headers,
    }).then((res) => this._handleResponse(res));
  }
  // Удалить лайк с карточки
  removeLike(cardId) {
    return fetch(`${this._baseUrl}/cards/${cardId}/likes`, {
      method: 'DELETE',
      headers: this._headers,
    }).then((res) => this._handleResponse(res));
  }
  // Изменить аватар пользователя
  changeAvatar(avatarData) {
    return fetch(`${this._baseUrl}/users/me/avatar`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify(avatarData),
    }).then((res) => this._handleResponse(res));
  }
}

const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-41',
  headers: {
    authorization: '0e6a347a-7327-44ee-b427-b6e9dceb3c49',
    'Content-Type': 'application/json',
  },
});

export default api;
