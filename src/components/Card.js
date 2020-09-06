//variables for popup image
//const imagePopup = document.querySelector(".popup__image");
//const imageCaption = document.querySelector(".popup__caption");
import {
  myId
} from "./Utils.js";

class Card {
  constructor(data, userId, cardTemplateSelector, handleDeleteClick, handleCardClick) {
    this._link = data.link;
    this._name = data.name;
    this._userId = userId;
    console.log("id!!!", this._userId);
    //this._id = data.id;
    //console.log(data.id);

    this._owner = data.owner;
    //console.log("owner!!!", this._owner);
    this._handleCardClick = handleCardClick;
    this._handleDeleteClick = handleDeleteClick;
    this._cardTemplateSelector = cardTemplateSelector;
  }

  _getCardTemplate() {
    const cardTemplate = document
    .querySelector(this._cardTemplateSelector)
    .content
    .querySelector(".card__group")
    .cloneNode(true);
    return cardTemplate;
  }
  // id() {
  //   return this._id()
  // }
  _addEventListeners() {
    const deleteButton = this._card.querySelector('.card__remove-button');
    if (this._owner._id !== this._userId) {
      //console.log("hey", this._owner._id);
      deleteButton.style.display = 'none';
    }
    this._card.querySelector(".card__like-button")
      .addEventListener("click", this._handleLikeIcon);
    this._card.querySelector(".card__remove-button")
      .addEventListener("click", () => this._handleDeleteCard());
    this._card.querySelector(".card__image")
      .addEventListener("click", () => this._handleCardClick());
      this._card.querySelector(".card__remove-button")
      .addEventListener("click", () => this._handleDeleteClick());
      // .addEventListener("click", () => this._handleDeleteClick(this.id()));

  }

  _handleLikeIcon(e) {
    e.target.classList.toggle("card__like-button_clicked");
  }

  _handleDeleteCard() {
    this._card.remove();
    this._card = null;
  }

  // _handleCardClick() {
  //   console.log("inside handleCardClick");
  //   imagePopup.src = this._link;
  //   imagePopup.alt = this._name;
  //   imageCaption.textContent = this._name;
  // }

  generateCard() {
    this._card = this._getCardTemplate();
    this._card.querySelector(".card__image").style.backgroundImage = `url(${this._link})`;
    this._card.querySelector(".card__title").textContent = this._name;
    this._addEventListeners();
    return this._card;
  }
}
export default Card;
