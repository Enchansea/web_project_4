const editProfilePopup = document.querySelector(".popup__edit-profile");
const addCardPopupWindow = document.querySelector(".popup__add-card");
export const addCardForm = editProfilePopup.querySelector(".popup__form");
export const editProfileForm = addCardPopupWindow.querySelector(".popup__form");
export const profileName = document.querySelector(".profile__name");
export const profileAbout = document.querySelector(".profile__about");


//card array containing name and link
export const initialCards = [
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

export const containerSelector = ".card";


