const editProfilePopup = document.querySelector(".popup__edit-profile");
const addCardPopupWindow = document.querySelector(".popup__add-card");
const addCardForm = editProfilePopup.querySelector(".popup__form");
const editProfileForm = addCardPopupWindow.querySelector(".popup__form");
const profileName = document.querySelector(".profile__name");
const profileAbout = document.querySelector(".profile__about");
const buttonEdit = document.querySelector(".profile__edit-button");
const buttonAdd = document.querySelector(".profile__add-button");
const myId = "9f87343e26d7981e15bb8b00";


//card array containing name and link
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

const containerSelector = ".card";
const templateSelector = ".card-template";

export {addCardForm, editProfileForm, profileName, profileAbout, buttonEdit, buttonAdd, initialCards, containerSelector, templateSelector, myId};
