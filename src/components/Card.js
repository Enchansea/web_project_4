import {
  myId
} from "./Utils.js";

class Card {
  constructor(data, userId, cardTemplateSelector, handleDeleteClick, handleCardClick) {
    //console.log("data", data);
    this._link = data.link;
    this._name = data.name;
    this._userId = userId;
    this._owner = data.owner;
    this._id = data._id;
    this._like = data.likes;
    //console.log(this._like);
    this._handleCardClick = handleCardClick;
    this._handleDeleteClick = handleDeleteClick;
    this._cardTemplateSelector = cardTemplateSelector;
  }

  id() {
    return this._id;
  }

  _getCardTemplate() {
    const cardTemplate = document
    .querySelector(this._cardTemplateSelector)
    .content
    .querySelector(".card__group")
    .cloneNode(true);
    return cardTemplate;
  }

  _addEventListeners() {
    const deleteButton = this._card.querySelector('.card__remove-button');
    if (this._owner._id !== this._userId) {
      deleteButton.style.display = 'none';
    }
    this._card.querySelector(".card__like-button")
      .addEventListener("click", this._handleLikeIcon);
    // this._card.querySelector(".card__remove-button")
    //   .addEventListener("click", () => this._handleDeleteCard());
    this._card.querySelector(".card__image")
      .addEventListener("click", () => this._handleCardClick());
      this._card.querySelector(".card__remove-button")
      .addEventListener("click", () => this._handleDeleteClick(this._id));
  }

  _handleLikeIcon(e) {
    e.target.classList.toggle("card__like-button_clicked");
  }

  deleteCard() {
    this._card.remove();
    this._card = null;
  }

  generateCard() {
    this._card = this._getCardTemplate();
    this._card.querySelector(".card__image").style.backgroundImage = `url(${this._link})`;
    this._card.querySelector(".card__title").textContent = this._name;
    this._addEventListeners();
    return this._card;
  }
}
export default Card;
