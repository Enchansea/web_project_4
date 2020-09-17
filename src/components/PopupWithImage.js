import Popup from "./Popup.js";

class PopupWithImage extends Popup {

  open({ link, name }) {
    this._popupElement.querySelector(".popup__image").src = link;
    this._popupElement.querySelector(".popup__caption").textContent = name;

    super.open();
  }
}


export default PopupWithImage;
