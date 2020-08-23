class Popup {
    constructor(popupSelector) {
        console.log(popupSelector);
        this._popupElement = document.querySelector(popupSelector);
        this._handleEscClose = this._handleEscClose.bind(this);
    }

    open() {
      console.log(this._popupElement.classList.add("popup_visible"));
        this._popupElement.classList.add("popup_visible");
        document.addEventListener("keyup", this._handleEscClose);
    }

    close() {
      //console.log("close");
      //console.log(this._popupElement.classList.remove("popup_visible"));
        this._popupElement.classList.remove("popup_visible");
        document.removeEventListener("keyup", this._handleEscClose);
    }

    _handleEscClose(e) {
        if(e.witch = 27) {
            this.close();
        }
    }

    setEventListeners() {
        //console.log(this._popupElement.querySelector(".popup__close-button"));
        this._popupElement.querySelector(".popup__close-button").addEventListener("click", () => {
            this.close();
        });
    }
}


export default Popup;
