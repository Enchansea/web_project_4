import {
  defaultConfig,
  containerSelector,
  templateSelector,
  editProfileForm,
  addCardForm,
  profileName,
  profileAbout,
  buttonEdit,
  buttonAdd,
  profileImage,
  profileAvatar,
} from "./components/Utils.js"
import FormValidator from "./components/FormValidator.js";
import Card from "./components/Card.js";
import "../pages/index.css";
import PopupWithImage from "./components/PopupWithImage.js";
import PopupWithForm from "./components/PopupWithForm.js";
import Section from "./components/Section.js";
import UserInfo from "./components/UserInfo.js";
import Api from "./components/Api.js"

const api = new Api({
  baseUrl: "https://around.nomoreparties.co/v1/group-4",
  headers: {
    authorization: "82ebb591-5edb-4637-a2e8-efb178ef4c56",
    "Content-Type": "application/json"
  }
});

function handleRemoveClick(cardId) {
  return api.removeCard(cardId);
}

const cardDelete = new PopupWithForm({
  popupSelector: ".popup__delete-confirm",
  handleSubmitForm: () => {
    handleRemoveClick();
    cardDelete.close();
  }
});
cardDelete.setEventListeners();

api.getAppInfo()
.then(([userInfoData, initalCardsData]) => {
  //console.log("initial", initalCardsData);
  const userId = userInfoData._id;
  const cardsList = new Section(
    {items: initalCardsData,
      renderer: (data) => {
        const card = new Card(data,
          userId,
          templateSelector,
          (id) => {
            cardDelete.open(id);
            cardDelete.setSubmitAction(() => {
              handleRemoveClick(id)
              .then(() => {
                card.deleteCard();
              })
            })

          },
          () => {
          popupWithImage.open(data);
        })
        const cardElement = card.generateCard();
        cardsList.addItem(cardElement);
      },
      containerSelector
    }
  );
  cardsList.renderItems();


  const addForm = new PopupWithForm({
    popupSelector: ".popup__add-card",
    handleSubmitForm: (data) => {

      api.addCard(data)
        .then(data => {
          const card = new Card(data,
            userId,
            templateSelector,
            () => {
          popupWithImage.open(data);
          });
          const cardElement = card.generateCard();
          cardsList.addItem(cardElement);
        });
    }
  });
  addForm.setEventListeners();
  buttonAdd.addEventListener("click", () => {addForm.open()});
})


//console.log("pI", profileImage);
//console.log("pA", profileAvatar);

//send data to api to change profile pic
function handlePicChange(data) {
  console.log(data.Imagelink);
  api.setUserAvatar({
    avatar: data.Imagelink
  })
  .then(res => {
    console.log ("res", res)
    console.log("this", res.avatar);
    profileAvatar.src = res.avatar;
  })

}

//open profile image popup
const editProfilePic = new PopupWithForm({
  popupSelector: ".popup__add-image",
  handleSubmitForm: (data) => {
    handlePicChange(data);
    editProfilePic.close();
  }
})
editProfilePic.setEventListeners();

//add click to profile image then open a new popup
profileImage.addEventListener("click", () => {
  editProfilePic.open();
})




//new FormValidator for Profile and Add Card
const editProfileValidation = new FormValidator(defaultConfig, editProfileForm);
const addCardValidation = new FormValidator(defaultConfig, addCardForm);

//calls function to validate profile and add card forms
editProfileValidation.enableValidation();
addCardValidation.enableValidation();

//declares new PopupWithImage and adds eventListeners.
const popupWithImage = new PopupWithImage(".popup__picture-section");
popupWithImage.setEventListeners();

//selects DOM elements for name and about.
const profileInfo =  new UserInfo({
  nameSelector: profileName,
  descriptionSelector: profileAbout,
});


api.getUserInfo()
.then(res => {
  profileInfo.setUserInfo({ userName: res.name, userDescription: res.about })
})

//send profile name/about to api and then set it
function handleProfileEdit(data) {
  api.setUserInfo({
    name: data.name,
    about: data.about,
  })
  .then(() => {
    //console.log(res);
    profileInfo.setUserInfo({
      userName: data.name,
      userDescription: data.about
    });
  })
}

//listens for profile edit button click and opens popup
buttonEdit.addEventListener("click", () => {profileForm.open()});

//creates new profile popup from the DOM
const profileForm = new PopupWithForm({
  popupSelector: ".popup__edit-profile",
  handleSubmitForm: submitForm
});
profileForm.setEventListeners();

function submitForm(data) {
  handleProfileEdit(data);
  profileForm.open();
}

