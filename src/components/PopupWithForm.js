import Popup from "./Popup.js";

class PopupWithForm extends Popup {
  constructor({popupSelector, handleSubmitForm}) {
    super(popupSelector);
    this._handleSubmitForm = handleSubmitForm;
    //console.log(this._form = this._popupElement.querySelector(".popup__form"));
    this._form = this._popupElement.querySelector(".popup__form")
  }

  _getInputValues() {
    this._inputValues = Array.from(this._form.querySelectorAll(".popup__input"));
    this._formValues = {};
    this._inputValues.forEach((input) => this._formValues[input.name] = input.value);

    return this._formValues;
  }

  setEventListeners() {
    this._popupElement.addEventListener("submit", (e) => {
      e.preventDefault();
      this._handleSubmitForm(this._getInputValues());
      this.close();
    })
    super.setEventListeners();
}


  setSubmitAction(action) {
    console.log(action);
    this._handleSubmitForm = action;
  }
}

export default PopupWithForm;
