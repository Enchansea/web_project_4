// edit profile__edit-btn
const profileEditButton = document.querySelector(".profile__edit-btn");
//Buttons and other DOM element
const editProfileWindow = document.querySelector(".modal_type_edit-profile");
const addCardModalWindow = document.querySelector(".modal_type_add-card");
const imageModalWindow = document.querySelector(".modal_type_image");
//close buttons
const editCloseButton = editProfileWindow.querySelector(".modal__button");
const addCardCloseButton = addCardModalWindow.querySelector(".modal__button");
//save button
const addCard = document.querySelector(".modal__submit");
//Form Data
const editForm = document.querySelector(".modal__form");
const inputName = document.querySelector(".modal__input_type_name");
const inputAbout = document.querySelector(".modal__input_type_about");
const profileName = document.querySelector(".profile__name_type_input");
const profileAbout = document.querySelector(".profile__about_type_input");
//add new cards
const newCard = document.querySelector(".modal_type_add-card")
const newCardName = document.querySelector(".modal__input_type_card-name");
const newCardUrl = document.querySelector(".modal__input_type_url");

//adds class '.modal_visible' to html
function toggleModal (modal) {
  modal.classList.toggle("modal_visible");
}

//edit profile form handler
function formSubmitHandler(e) {
  e.preventDefault();
  profileName.textContent = inputName.value;
  profileAbout.textContent = inputAbout.value;
  toggleModal();
}

// open/close modal when edit/close button clicked
editForm.addEventListener("submit", formSubmitHandler);

editCloseButton.addEventListener("click", () => {
  toggleModal(editProfileWindow);
})

profileEditButton.addEventListener('click', () => {
  toggleModal(editProfileWindow);
})

const addButton = document.querySelector('.profile__add-btn');


//newCardName.placeholder = "Image Title";
//newCardUrl.placeholder = "Image Link";
addButton.addEventListener("click", () => {
  toggleModal(addCardModalWindow);
})
addCardCloseButton.addEventListener('click', () => {
  toggleModal(addCardModalWindow);
})


const initialCards = [
  {
      name: "Yosemite Valley",
      link: "https://code.s3.yandex.net/web-code/yosemite.jpg"
  },
  {
      name: "Lake Louise",
      link: "https://code.s3.yandex.net/web-code/lake-louise.jpg"
  },
  {
      name: "Bald Mountains",
      link: "https://code.s3.yandex.net/web-code/bald-mountains.jpg"
  },
  {
      name: "Latemar",
      link: "https://code.s3.yandex.net/web-code/latemar.jpg"
  },
  {
      name: "Vanois National Park",
      link: "https://code.s3.yandex.net/web-code/vanois.jpg"
  },
  {
      name: "Lago di Braies",
      link: "https://code.s3.yandex.net/web-code/lago.jpg"
  }
];

const cardTemplate = document.querySelector(".card-template").content.querySelector(".element__group");

const createCard = (data) => {

  const cardElement = cardTemplate.cloneNode(true);

  const cardTitle = cardElement.querySelector(".element__title");
  const cardImage = cardElement.querySelector(".element__img");
  const cardLikeButton = cardElement.querySelector(".element__like-btn");
  const cardRemoveButton = cardElement.querySelector(".element__remove-btn");

  cardTitle.textContent = data.name;
  cardImage.style.backgroundImage = `url(${data.link})`;
  cardImage.style.backgroundSize = "cover";
  cardImage.style.minHeight = "282px";

  cardLikeButton.addEventListener('click', () => {
    //changeHeartColor()
  })

  cardRemoveButton.addEventListener('click', (e) => {
    //removeCard()
    e.target.closest(".modal").remove();
  })

  cardImage.addEventListener('click', () => {
    //openModal()
    toggleModal(imageModalWindow);
  })

  return cardElement;
}

const list = document.querySelector(".element");

const renderCard = (data) => {
  list.prepend(createCard(data));
}

//loop forEach card
initialCards.forEach((data) => {
  renderCard(data);
})

newCard.addEventListener('submit', (e) => {
  e.preventDefault();
  renderCard(newCardName.value, newCardUrl.value);
  toggleModal(addCard);
})

