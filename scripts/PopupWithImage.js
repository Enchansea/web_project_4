import Popup from "./Popup.js";

class PopupWithImage extends Popup {
  constructor(popupSelector) {
      super(popupSelector);
      //console.log("hello");
    }

  open( {link, name} ) {
    console.log("hello");
    this._popupElement.querySelector(".popup__image").src = link;
    this._popupElement.querySelector(".popup__caption").textContent = name;

    super.open();
    }
}


export default PopupWithImage;
