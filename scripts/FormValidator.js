class FormValidator {
  constructor(settings, formElement)
  {
    this._inputSelector = settings.inputSelector;
    this._submitButtonSelector = settings.submitButtonSelector;
    this._inactiveButtonClass = settings.inactiveButtonClass;
    this._inputErrorClass = settings.inputErrorClass;
    this._errorClass = settings.errorClass;

    this._formElement = formElement;
  }

  _checkInputValidity(inputElement) {
    const errorElement = this._formElement.querySelector(`#${inputElement.id}-error`);
    if(!inputElement.validity.valid) {
      errorElement.textContent = inputElement.validationMessage;
      errorElement.classList.add(this._errorClass);
      inputElement.classList.add(this._inputErrorClass);
    } else {
      errorElement.classList.remove(this._errorClass);
      errorElement.classList.remove(this._inputErrorClass);
      errorElement.textContent = '';
    }
  }


  _toggleButtonState(inputList, buttonElement, buttonClass)
  {
    const isValid = inputList.every((input) => input.validity.valid);
    if(!isValid) {
      buttonElement.classList.add(`${buttonClass}`);
      buttonElement.disabled=true;
    } else {
      buttonElement.classList.remove(`${buttonClass}`);
      buttonElement.disabled=false;
    }
  }

  _setEventListeners()
  {
    const inputList = Array.from(this._formElement.querySelectorAll(this._inputSelector));
    const buttonElement = this._formElement.querySelector(this._submitButtonSelector);

    this._toggleButtonState(inputList, buttonElement, this._inactiveButtonClass);

    inputList.forEach((inputElement) =>
    {
      inputElement.addEventListener("input", () =>
      {
        this._checkInputValidity(inputElement);
        this._toggleButtonState(inputList, buttonElement, this._inactiveButtonClass);
      })
    })
  }

  enableValidation()
  {
    this._formElement.addEventListener("submit", (evt) =>
    {
      evt.preventDefault();
    });
      this._setEventListeners();

  }
}

export default FormValidator;
