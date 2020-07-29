class PopupWithImage extends Popup {
    constructor(PopupSelector) {
            super(PopupSelector);
    }

    open({link, caption}) {
        this._popupElement.querySelector(".popup__image").src = link;
        this._popupElement.querySelector(".popup__caption").textContent = caption;
    }
}

const modalWithImage = new PopupWithImage()