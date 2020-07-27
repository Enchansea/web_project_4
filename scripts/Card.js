import {toggleModal} from "./utils.js"

//variables for popup image
const imagePopup = document.querySelector(".popup__image");
const imageCaption = document.querySelector(".popup__caption");
const imagePopupWindow = document.querySelector(".popup__picture-section");

//closing popup array with overlay
function formCloseOnClick(e) {
  if(e.target === e.target.closest(".popup")) {
    toggleModal(document.querySelector(".popup_visible"));
  }
}
document.addEventListener("click", formCloseOnClick);

class Card {
  constructor(data, cardTemplateSelector) {

    this._link = data.link;
    this._name = data.name;
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

  _addEventListeners() {
    const cardLikeButton = this._card.querySelector(".card__like-button");
    const cardRemoveButton = this._card.querySelector(".card__remove-button");
    const cardImage = this._card.querySelector(".card__image");

    cardLikeButton.addEventListener('click', this._handleLikeIcon);
    cardRemoveButton.addEventListener('click', this._handleDeleteCard);
    cardImage.addEventListener('click', () => this._handlePreviewPicture());
  }

  _handleLikeIcon(e) {
    e.target.classList.toggle("card__like-button_clicked");
  }

  _handleDeleteCard(e) {
    e.target.closest(".card__group").remove();
  }

  _handlePreviewPicture() {
    imagePopup.src = this._link;
    imagePopup.alt = this._name;
    imageCaption.textContent = this._name;
    toggleModal(imagePopupWindow);
  }

  generateCard() {
    const element = this._getCardTemplate();

    this._card = element;
    this._card.querySelector(".card__image").style.backgroundImage = `url(${this._link})`;
    this._card.querySelector(".card__title").textContent = this._name;

    this._addEventListeners();
    return this._card;
  }
}

export default Card;
