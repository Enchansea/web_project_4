//profile edit and add buttons
const profileEditButton = document.querySelector(".profile__edit-button");
const addButton = document.querySelector('.profile__add-button');
//popup elements
const editProfilePopup = document.querySelector(".popup__edit-profile");
const addCardModalWindow = document.querySelector(".popup__add-card");
const imageModalWindow = document.querySelector(".popup__picture-section");
//close buttons
const editCloseButton = editProfilePopup.querySelector(".popup__close-button");
const addCardCloseButton = addCardModalWindow.querySelector(".popup__close-button");
const imageCloseButton = imageModalWindow.querySelector(".popup__close-button");
//save button
const popupSubmitButton = document.querySelector(".popup__submit-button");
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

//variable for card template
//const cardImage = cardElement.querySelector(".card__image");




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

//event listener to create function for submit
editForm.addEventListener("submit", formSubmitHandler);

//edit profile form handler
function formSubmitHandler(e) {
  e.preventDefault();
  profileName.textContent = inputName.value;
  profileAbout.textContent = inputAbout.value;
  toggleModal(editProfilePopup);
}

//pull data from creatCard function and applying to displayImage function
function displayImage(data) {
  imagePopup.src = data.link;
  imagePopup.alt = data.name;
  imageCaption.textContent = data.name;
  toggleModal(imageModalWindow);
}

//toggling close buttons
editCloseButton.addEventListener("click", () => {
  toggleModal(editProfilePopup);
})
addCardCloseButton.addEventListener('click', () => {
  toggleModal(addCardModalWindow);
})
imageCloseButton.addEventListener('click', () => {
  toggleModal(imageModalWindow);
} )

//opening profile and card forms via buttons
profileEditButton.addEventListener('click', () => {
  popupProfileForm.reset();
  toggleModal(editProfilePopup);
})
addButton.addEventListener("click", () => {
  popupCardForm.reset();
  toggleModal(addCardModalWindow);
})

//create card from template in html
const createCard = (data) => {

  const cardElement = cardTemplate.cloneNode(true);

  const cardTitle = cardElement.querySelector(".card__title");

  const cardLikeButton = cardElement.querySelector(".card__like-button");
  const cardRemoveButton = cardElement.querySelector(".card__remove-button");
  const cardImage = cardElement.querySelector(".card__image");

  cardTitle.textContent = data.name;
  cardImage.style.backgroundImage = `url(${data.link})`;
  cardImage.style.backgroundSize = "cover";
  cardImage.style.minHeight = "282px";

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
addCardModalWindow.querySelector(".popup__form").addEventListener('submit', (e) => {
  e.preventDefault();
  const newCard =
  {
    name: newCardName.value,
    link: newCardUrl.value
  }
  list.prepend(createCard(newCard));

  toggleModal(addCardModalWindow);
})

