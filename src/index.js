import {
  toggleModal,
  initialCards,
  containerSelector
} from "../scripts/Utils.js"
import FormValidator from "../scripts/FormValidator.js";
import Card from "../scripts/Card.js";
import "../pages/index.css";
import PopupWithImage from "../scripts/PopupWithImage.js";
import PopupWithForm from "../scripts/PopupWithForm.js";
import Section from "../scripts/Section.js";
import UserInfo from "../scripts/UserInfo.js";
import { data } from "jquery";

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


//card data input
const newCardName = document.querySelector(".popup__input_card-name");
const newCardUrl = document.querySelector(".popup__input_card-url");

// open/close popup when edit/add button clicked
const editForm = document.querySelector(".popup__form");

//card template inside unorderedlist selector
const list = document.querySelector(".card");
const cardTemplateSelector = ".card-template";


const popupWithImage = new PopupWithImage(".popup__picture-section");
popupWithImage.setEventListeners();

const cardsList = new Section(
  {items: initialCards,
    renderer: (data) => {
      const card = new Card(data, cardTemplateSelector, function() {
        popupWithImage.open(data);
      });
      const cardElement = card.generateCard();
      cardsList.addItem(cardElement);
    },
    containerSelector
  }
);
cardsList.renderItems();

// const profileInfo = new UserInfo({
//   nameSelector: nameUpdate,
//   descriptionSelector: professionUpdate,
// });

// profileInfo.setUserInfo({
//   userName: userInfo.name,
//   userDescription: userDescription.about,
// });

// const handleProfileEdit = (data) => {
//   const name =
// }

const profileForm = new PopupWithForm({
  popupSelector: '.popup__edit-profile',
  handleSubmitForm: () => {
    const profileInfo =  new UserInfo({
      nameSelector: ".profile__name",
      descriptionSelector: "profile__about",
    });
    profileInfo.setUserInfo({
      userName: inputName.value,
      userDescription: inputAbout.value,
    });

  }
});
profileForm.setEventListeners();



// generate card through PopupWithForm and use with Card
const addForm = new PopupWithForm({
  popupSelector: '.popup__add-card',
  handleSubmitForm: (data) => {
    const newCard = new Card(data, cardTemplateSelector, function() {
      popupWithImage.open(data);
    });
    const cardElement = newCard.generateCard();
    cardsList.addItem(cardElement);
  }
});
addForm.setEventListeners();

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

//opening profile and card forms via buttons
profileEditButton.addEventListener('click', () => {
  //popupProfileForm.reset();
  toggleModal(editProfilePopup);
})

addButton.addEventListener("click", () => {
  //popupCardForm.reset();
  toggleModal(addCardPopupWindow);
})





//add new card from add card button
// editProfileForm.addEventListener('submit', (e) => {
//   e.preventDefault();
//   const newCard =
//   {
//     name: newCardName.value,
//     link: newCardUrl.value
//   }
//   renderCard(newCard);
//   toggleModal(addCardPopupWindow);
// });

