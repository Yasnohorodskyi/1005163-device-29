const  contactUs = document.querySelector(".about__contacts-link");
const contactUsPopup = document.querySelector(".modal__write-us");
const contactUsClose = contactUsPopup.querySelector(".modal-close");
const contactUsForm = contactUsPopup.querySelector("form");
const userName = contactUsPopup.querySelector("#modalUserName");
const userMail = contactUsPopup.querySelector("#modalEmail");
const userText = contactUsPopup.querySelector(".modal__box-textarea");


const isStorageSupport = true;
const storage = "";



contactUs.addEventListener("click", function () {
  contactUsPopup.classList.add("modal__write-us--active");

  if (storage) {
    userName.value = storage;
    userMail.value = storage;
    // userText.focus();
  } 
  else {
    userName.focus();
  } 
});


contactUsClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  contactUsPopup.classList.remove("modal__write-us--active");
  contactUsPopup.classList.remove("modal-error");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (contactUsPopup.classList.contains("modal__write-us--active")) {
      contactUsPopup.classList.remove("modal__write-us--active");
      contactUsPopup.classList.remove("modal-error");
    }
  }
});

contactUsForm.addEventListener("submit", function (evt) {
    if (!userName.value || !userMail.value) {
      evt.preventDefault();
      contactUsPopup.classList.add("modal-error");
  } else {
    if (isStorageSupport) {
    localStorage.setItem("userName", userName.value);
    localStorage.setItem("userMail", userMail.value);
    }
  }
});


const mapLink = document.querySelector(".about__contacts-map");
const mapPopup = document.querySelector(".modal-map");
const mapClose = mapPopup.querySelector(".modal-close");

mapLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.add("modal-map--active");
});

mapClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.remove("modal-map--active");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (mapPopup.classList.contains("modal-map--active")) {
      evt.preventDefault();
      mapPopup.classList.remove("modal-map--active");
    }
  }
});
