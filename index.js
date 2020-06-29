//profile edit and add buttons
const profileEditButton = document.querySelector(".profile__edit-button");
const addButton = document.querySelector('.profile__add-button');

//popup elements
const editProfilePopup = document.querySelector(".popup__edit-profile");
const addCardPopupWindow = document.querySelector(".popup__add-card");
const imagePopupWindow = document.querySelector(".popup__picture-section");

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
const cardTemplate = document.querySelector(".card-template").content.querySelector(".card__group");

//variables for popup image
const imagePopup = document.querySelector(".popup__image");
const imageCaption = document.querySelector(".popup__caption");

//varibles for popup and creating an array
//const popups = document.querySelectorAll(".popup");
//const popupOverlay = Array.from(popups);

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


//adds class '.popup_visible' to html
function toggleModal(modal) {
  modal.classList.toggle("popup_visible");
}

//edit profile form handler
function formSubmitHandler(e) {
  e.preventDefault();
  profileName.textContent = inputName.value;
  profileAbout.textContent = inputAbout.value;
  toggleModal(editProfilePopup);
}

//event listener to submit profile form
editForm.addEventListener("submit", formSubmitHandler);


//pull data parameter from creatCard function and applying to displayImage function
function displayImage(data) {
  imagePopup.src = data.link;
  imagePopup.alt = data.name;
  imageCaption.textContent = data.name;
  toggleModal(imagePopupWindow);
}

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
  popupProfileForm.reset();
  toggleModal(editProfilePopup);
})
addButton.addEventListener("click", () => {
  popupCardForm.reset();
  toggleModal(addCardPopupWindow);
})


//closing popup array with overlay
function formCloseOnClick(e) {
  if(e.target === e.target.closest(".popup")) {
    toggleModal(document.querySelector(".popup_visible"));
  }
}

//Esc closing popups
function escKeyUp(e) {
  const escKeyNum = 27;
  const popup = document.querySelector(".popup_visible");
  if (e.keyCode === escKeyNum && popup != null) {
    toggleModal(popup);
  }
}

//global click and esc listers
document.addEventListener("click", formCloseOnClick);
document.addEventListener("keyup", escKeyUp);


//create card from template in html
const createCard = (data) => {

  const cardElement = cardTemplate.cloneNode(true);

  const cardTitle = cardElement.querySelector(".card__title");

  const cardLikeButton = cardElement.querySelector(".card__like-button");
  const cardRemoveButton = cardElement.querySelector(".card__remove-button");
  const cardImage = cardElement.querySelector(".card__image");

  cardTitle.textContent = data.name;
  cardImage.style.backgroundImage = `url(${data.link})`;

  cardLikeButton.addEventListener('click', () => {
    //change heart color when clicked
    cardLikeButton.classList.toggle("card__like-button_clicked");
  })

  cardRemoveButton.addEventListener('click', (e) => {
    //remove card when clicked - trash
    e.target.closest(".card__group").remove();
  })

  cardImage.addEventListener('click', () => {
    //open popup image when clicked
    displayImage(data);
  })

  return cardElement;
}

//render card in the begining of array
const renderCard = (data) => {
  list.prepend(createCard(data));
}

//loop forEach card rendered
initialCards.forEach((data) => {
  renderCard(data);
})

//add new card from add card button
addCardPopupWindow.querySelector(".popup__form").addEventListener('submit', (e) => {
  e.preventDefault();
  const newCard =
  {
    name: newCardName.value,
    link: newCardUrl.value
  }
  renderCard(newCard);

  toggleModal(addCardPopupWindow);
})



