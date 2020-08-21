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
