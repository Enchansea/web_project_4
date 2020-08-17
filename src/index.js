import {toggleModal} from "../scripts/utils.js"
import FormValidator from "../scripts/FormValidator.js";
import Card from "../scripts/Card.js";
import "../pages/index.css";
import PopupWithImage from "../scripts/PopupWithImage.js";
//import PopupWithForm from "../scripts/PopupWithForm.js";
//import UserInfo from "../scripts/UserInfo.js";
//import Section from "../scripts/Section.js";

//calling classes
 //const editPopup = new Popup(editProfilePopup);

const modalWithImage = new PopupWithImage(".popup__picture-section");
modalWithImage.setEventListeners();
new Card(
  {data,
   handleCardClick: () => {
    modalWithImage.open({data});
    }
  },
  cardTemplate
)

// initalCard.forEach((data) => {
//   new Card(data, ".card-template", function() {
//      modalWithImage.open()
//    });
// })
//console.log(modalWithImage);
//const formPopup = new PopupWithForm({
//   formSelector: "."
// })

// obj defaultConfig array, used in FormValidator.js
const defultConfig = {
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__submit-button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible"
}

//popup elements
const editProfilePopup = document.querySelector(".popup__edit-profile");
const addCardPopupWindow = document.querySelector(".popup__add-card");
const addCardForm = editProfilePopup.querySelector(".popup__form");
const editProfileForm = addCardPopupWindow.querySelector(".popup__form");
const imagePopupWindow = document.querySelector(".popup__picture-section");

//new FormValidator for Profile and Add Card
const editProfileValidation = new FormValidator(defultConfig, editProfileForm);
const addCardValidation = new FormValidator(defultConfig, addCardForm);
//calls function to validate profile and add card forms
editProfileValidation.enableValidation();
addCardValidation.enableValidation();

//profile edit and add buttons
const profileEditButton = document.querySelector(".profile__edit-button");
const addButton = document.querySelector('.profile__add-button');

//close buttons
const editCloseButton = editProfilePopup.querySelector(".popup__close-button");
const addCardCloseButton = addCardPopupWindow.querySelector(".popup__close-button");
const imageCloseButton = imagePopupWindow.querySelector(".popup__close-button");

//profile form data
const inputName = document.querySelector(".popup__input_profile-name");
const inputAbout = document.querySelector(".popup__input_profile-about");

//profile name/about selectors
const profileName = document.querySelector(".profile__name");
const profileAbout = document.querySelector(".profile__about");

//card and profile selectors for resetting to placeholder
const popupCardForm = document.querySelector(".popup__form_card");
const popupProfileForm = document.querySelector(".popup__form_profile");

//card data input
const newCardName = document.querySelector(".popup__input_card-name");
const newCardUrl = document.querySelector(".popup__input_card-url");

// open/close popup when edit/add button clicked
const editForm = document.querySelector(".popup__form");

//card template inside unorderedlist selector
const list = document.querySelector(".card");
const cardTemplateSelector = ".card-template";

//card array
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

//edit profile form handler
function formSubmitHandler(e) {
  e.preventDefault();
  profileName.textContent = inputName.value;
  profileAbout.textContent = inputAbout.value;
  toggleModal(editProfilePopup);
}

//event listener to submit profile form
editForm.addEventListener("submit", formSubmitHandler);

//toggling close buttons
editCloseButton.addEventListener("click", () => {
  toggleModal(editProfilePopup);
})
addCardCloseButton.addEventListener('click', () => {
  toggleModal(addCardPopupWindow);
})
imageCloseButton.addEventListener('click', () => {
  toggleModal(imagePopupWindow);
})

//opening profile and card forms via buttons
profileEditButton.addEventListener('click', () => {
  //popupProfileForm.reset();
  toggleModal(editProfilePopup);
})

addButton.addEventListener("click", () => {
  //popupCardForm.reset();
  toggleModal(addCardPopupWindow);
})



//render card in the begining of array
const renderCard = (data) => {
  const card = new Card(data, cardTemplateSelector);
  list.prepend(card.generateCard());
}

//loop forEach card rendered
initialCards.forEach((data) => {
  renderCard(data);
})

//add new card from add card button
editProfileForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const newCard =
  {
    name: newCardName.value,
    link: newCardUrl.value
  }
  renderCard(newCard);
  toggleModal(addCardPopupWindow);
});

