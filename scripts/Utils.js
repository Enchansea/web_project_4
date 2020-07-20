//adds class '.popup_visible' to html
function toggleModal(modal) {
  modal.classList.toggle("popup_visible");
  //modified later for use in esc key 6th project
  if (modal.classList.contains("popup_visible")) {
    document.addEventListener("keyup", escKeyUp);
  } else {
    document.removeEventListener("keyup", escKeyUp);
  }
}

//Esc closing popups
function escKeyUp(e) {
  const popup = document.querySelector(".popup_visible");
  if (e.key === "Escape") {
    toggleModal(popup);
  }
}

export {toggleModal};
