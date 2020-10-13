const  contactUs = document.querySelector(".about__contacts-link");
const contactUsPopup = document.querySelector(".modal__write-us");
const contactUsClose = contactUsPopup.querySelector(".modal-close");

contactUs.addEventListener("click", function () {
  // evt.preventDefault();
  // console.log(" Клик по кнопке ")
  contactUsPopup.classList.add("modal__write-us--active");
});


contactUsClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  contactUsPopup.classList.remove("modal__write-us--active");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (contactUsPopup.classList.contains("modal__write-us--active")) {
      contactUsPopup.classList.remove("modal__write-us--active");
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
