import {
  initialCards,
  containerSelector,
  templateSelector,
  editProfileForm,
  addCardForm,
  profileName,
  profileAbout,
  buttonEdit,
  buttonAdd
} from "./components/Utils.js"
import FormValidator from "./components/FormValidator.js";
import Card from "./components/Card.js";
import "../pages/index.css";
import PopupWithImage from "./components/PopupWithImage.js";
import PopupWithForm from "./components/PopupWithForm.js";
import Section from "./components/Section.js";
import UserInfo from "./components/UserInfo.js";


// obj defaultConfig array, used in FormValidator.js
const defultConfig = {
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__submit-button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible"
}


//new FormValidator for Profile and Add Card
const editProfileValidation = new FormValidator(defultConfig, editProfileForm);
const addCardValidation = new FormValidator(defultConfig, addCardForm);

//calls function to validate profile and add card forms
editProfileValidation.enableValidation();
addCardValidation.enableValidation();



const popupWithImage = new PopupWithImage(".popup__picture-section");
popupWithImage.setEventListeners();

// handles generating cards from a list called initalCards
const cardsList = new Section(
  {items: initialCards,
    renderer: (data) => {
      const card = new Card(data, templateSelector, () => {
        popupWithImage.open(data);
      });
      const cardElement = card.generateCard();
      cardsList.addItem(cardElement);
    },
    containerSelector
  }
);
cardsList.renderItems();

//const popupWithForm = new PopupWithForm(".")

// handles generating new cards with add-card button
const addForm = new PopupWithForm({
  popupSelector: ".popup__add-card",
  handleSubmitForm: (data) => {
    const newCard = new Card(data, templateSelector, () => {
      popupWithImage.open(data);
      //console.log(popupWithImage.open(data));
    });
    const cardElement = newCard.generateCard();
    cardsList.addItem(cardElement);
  }
});
addForm.setEventListeners();
buttonAdd.addEventListener("click", () => {addForm.open()});

// handles edit profile section and new user data
const profileInfo =  new UserInfo({
  nameSelector: profileName,
  descriptionSelector: profileAbout,
});

const handleProfileEdit = (data) => {
  profileInfo.setUserInfo({
    userName: data.name,
    userDescription: data.about,
  });
}

const profileForm = new PopupWithForm({
  popupSelector: ".popup__edit-profile",
  handleSubmitForm: (data) => {
    handleProfileEdit(data);
    profileForm.open();
  }
});
profileForm.setEventListeners();
buttonEdit.addEventListener("click", () => {profileForm.open()});

