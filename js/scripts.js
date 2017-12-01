var WriteButton = document.querySelector(".button-letter");
var popup = document.querySelector(".modal-letter");
var CloseButton = popup.querySelector(".modal-close");
var form = popup.querySelector("form");
var login = popup.querySelector("[name=user-name]");
var email = popup.querySelector("[name=email]");
var textMessage = popup.querySelector("[name=message]");
var storageLogin;
var storageEmail;

WriteButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("form-close");
  popup.classList.add("modal-showing");
  try
  {
    storageLogin = localStorage.getItem("login");
    storageEmail = localStorage.getItem("email");
    if(storageLogin)
    {
      login.value = storageLogin;
      email.value = storageEmail;
      textMessage.focus();
    } else {
      login.focus();
    }
    
  }
  catch (error)
  {
    login.focus();
  }
});

CloseButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("form-close");
  popup.classList.remove("modal-error");
});

form.addEventListener("submit", function (evt) {
  if(!login.value) {
    evt.preventDefault();
    popup.classList.remove("modal-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("modal-error");
    login.focus();
  } else {
    if(!email.value) {
      evt.preventDefault();
      popup.classList.remove("modal-error");
      popup.offsetWidth = popup.offsetWidth;
      popup.classList.add("modal-error");
      email.focus();
    } else {
      localStorage.setItem("login", login.value);
      localStorage.setItem("email", email.value);
    }
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (popup.classList.contains("modal-showing")) {
      popup.classList.remove("modal-showing");
      popup.classList.remove("modal-error");
      popup.classList.add("form-close");
    }
  }
});