
// Попапы для секции "modal-map" и "modal__write-us"


const contactUs = document.querySelector(".about__contacts-link");
const contactUsPopup = document.querySelector(".modal__write-us");
const contactUsClose = contactUsPopup.querySelector(".modal-close");
const contactUsForm = contactUsPopup.querySelector(".modal__form");
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


contactUsForm.addEventListener("submit", function (evt) {
    if (!userName.value || !userMail.value) {
      evt.preventDefault();
      contactUsPopup.classList.add("modal-error");
      userName.classList.add("modal__user--error");
      userMail.classList.add("modal__mail--error");
  } else {
    if (isStorageSupport) {
    localStorage.setItem("userName", userName.value);
    localStorage.setItem("userMail", userMail.value);
    }
  }
});



window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (contactUsPopup.classList.contains("modal__write-us--active")) {
      contactUsPopup.classList.remove("modal__write-us--active");
      contactUsPopup.classList.remove("modal-error");
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


// Слайдер секции "Promo"

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n){
	showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("promo__box");
  var dots = document.getElementsByClassName("promo__button");

if (n > slides.length){
  slideIndex = 1
}
if (n < 1){
  slideIndex=slides.length
}
for(i=0; i < slides.length; i++){
  slides[i].style.display= "none";
}
for(i=0; i < dots.length; i++){
  dots[i].className= dots[i].className.replace("button__current","");
}
slides[slideIndex-1].style.display = "grid";
dots[slideIndex-1].className+= "button__current";
}


// Слайдер секции "Features"

var slideIndexFeatures = 1;
showSlidesFeatures(slideIndexFeatures);

function plusSlidesFeatures(m) {
  showSlidesFeatures(slideIndexFeatures += m);
}

function currentSlidesFeatures(m){
	showSlidesFeatures(slideIndexFeatures = m);
}

function showSlidesFeatures(m) {
  var i;
  var slidesFeatures = document.getElementsByClassName("features__info");
  var dotsFeatures = document.getElementsByClassName("features__list-button");

if (m > slidesFeatures.length){
  slideIndexFeatures = 1
}
if (m < 1){
  slideIndexFeatures=slidesFeatures.length
}
for(i=0; i < slidesFeatures.length; i++){
  slidesFeatures[i].style.display= "none";
}
for(i=0; i < dotsFeatures.length; i++){
  dotsFeatures[i].className= dotsFeatures[i].className.replace(" features__list-button--active","");
}
slidesFeatures[slideIndexFeatures-1].style.display = "block";
dotsFeatures[slideIndexFeatures-1].className+= " features__list-button--active";
}
