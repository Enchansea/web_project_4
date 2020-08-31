//variables for popup image
//const imagePopup = document.querySelector(".popup__image");
//const imageCaption = document.querySelector(".popup__caption");

class Card {
  constructor(data, cardTemplateSelector, handleCardClick, handleDeleteClick) {
    this._link = data.link;
    this._name = data.name;
    this._id = data.id;
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

  id() {
    return this._id()
  }

  _addEventListeners() {
    this._card.querySelector(".card__like-button")
      .addEventListener("click", this._handleLikeIcon);
    this._card.querySelector(".card__remove-button")
      .addEventListener("click", () => this._handleDeleteCard());
    this._card.querySelector(".card__image")
      .addEventListener("click", () => this._handleCardClick());
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
