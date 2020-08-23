class Popup {
    constructor(popupSelector) {
        this._popupElement = document.querySelector(popupSelector);
        this._handleEscClose = this._handleEscClose.bind(this);
    }

    open() {
        this._popupElement.classList.add("popup_visible");
        document.addEventListener("keyup", this._handleEscClose);
        //console.log(this._popupElement);
    }

    close() {
        this._popupElement.classList.remove("popup_visible");
        document.removeEventListener("keyup", this._handleEscClose);
        //console.log(this._popupElement);
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
        this._popupElement.addEventListener("click", (e) => {
          if(e.target.classList.contains("popup_visible")) {
            this.close();
          }
        })
    }
}


export default Popup;
