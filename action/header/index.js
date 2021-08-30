// Search Input
const inputElement = document.querySelector(".header__search-input");
inputElement.addEventListener("focus", handleInputElFocus);
inputElement.addEventListener("blur", handleInputElBlur);

function handleInputElFocus(e) {
  const inputContainerEl = document.querySelector(".header__search");
  inputContainerEl.classList.add("active");
}

function handleInputElBlur() {
  const inputContainerEl = document.querySelector(".header__search");
  inputContainerEl.classList.remove("active");
}

// Menu click
const modalEl = document.querySelector("#modal");
const menuIconEl = document.querySelector(".header__menu-mobile");
const headerRightActionEl = document.querySelector(".header--right");
const closeIconMenu = document.querySelector(".header__close-menu");

menuIconEl.addEventListener("click", handleOpenSlideBar);
function handleOpenSlideBar() {
  headerRightActionEl.style.display = "block";
  modalEl.style.display = "block";
}
closeIconMenu.addEventListener("click", handleCloseHeaderBar);
function handleCloseHeaderBar() {
  headerRightActionEl.style.display = "none";
  modalEl.style.display = "none";
}
