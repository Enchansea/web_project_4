class Popup {
    constructor(popupSelector) {
        this._popupElement = popupSelector;
        this._handleEscClose = this._handleEscClose.bind(this);
    }

    _getTemplate() {
      const popupSelector = document
      .querySelector(this._popupElement)
      .content
      .querySelector(".card-template")
      .cloneNode(true);

      return popupSelector;
    }

    open() {
        this._popupElement.classList.add(".popup_visible");
        document.addEventListener("keyup", this._handleEscClose);
    }

    close() {
        this._popupElement.classList.remove(".popup_visible");
        document.removeEventListener("keyup", this._handleEscClose);


    }

    _handleEscClose(e) {
        if(e.witch = 27) {
            this.close();
        }
    }

    setEventListeners() {
        this._popupElement.querySelector(".popup__close-button").addEventListener("click", (e) => {
            this.close();
        })
    }
}

export default Popup;
