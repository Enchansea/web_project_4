class PopupWithImage extends Popup {
  constructor(PopupSelector) {
      super(PopupSelector);
    }

  open({link, name}) {
    this._popupElement.querySelector(".popup__image").src = link;
    this._popupElement.querySelector(".popup__caption").textContent = name;

    super.open();
    }
}

const modalWithImage = new PopupWithImage("....");

initialCard.forEach..(data) => {
  new Card(data, ".", function() {
    modalWithImage.open()
  })
}
