// edit profile__edit-btn
const editButton = document.querySelector(".profile__edit-btn");
//modal close button
const modalCloseButton = document.querySelector(".modal__button");
//declares modal = '.modal' class
const modal = document.querySelector(".modal");
//selecting variable name = selecting class name via querySelector
const inputName = document.querySelector(".modal__input_type_name");
const inputAbout = document.querySelector(".modal__input_type_about");
const profileName = document.querySelector(".profile__name_type_input");
const profileAbout = document.querySelector(".profile__about_type_input");
const form = document.querySelector(".modal__form");

//adds class '.modal_visible' to html
function toggleModal () {
  modal.classList.toggle("modal_visible");
}

// open/close modal when edit/close button clicked
editButton.addEventListener("click", toggleModal);
modalCloseButton.addEventListener("click", toggleModal);



form.addEventListener("submit", (e) => {
  //prevent page refresh
  e.preventDefault();

  profileName.textContent = inputName.value;
  profileAbout.textContent = inputAbout.value;

  toggleModal();
})

