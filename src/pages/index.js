import "./index.css";
// show-more all-services
const allServices = document.querySelector(".services__button");
const servicesLength = document.querySelectorAll(".services__item").length;
const allProjects = document.querySelector(".project__button");
const projectLength = document.querySelectorAll(".project__items").length;

let itemsAllServices = 3;
let itemsAllProject = 4;

allServices.addEventListener("click", () => {
  itemsAllServices += 3;
  const array = Array.from(document.querySelector(".services__block").children);
  const visItems = array.slice(0, itemsAllServices);

  visItems.forEach((el) => el.classList.add("is-visible"));

  if (visItems.length === servicesLength) {
    allServices.style.display = "none";
  }
});

allProjects.addEventListener("click", () => {
  itemsAllProject += 1;
  const array = Array.from(
    document.querySelector(".project__content").children
  );
  const visItems = array.slice(0, itemsAllProject);

  visItems.forEach((el) => el.classList.add("visible"));

  if (visItems.length === projectLength) {
    allProjects.style.display = "none";
  }
});

//burger menu
const hamb = document.querySelector("#hamb");
const popupHeader = document.querySelector("#popupHeader");
const body = document.querySelector(".page");

//Клонируем меню, чтобы задать свои стили для мобильной версии
const menu = document.querySelector("#menu").cloneNode(1);

//При клике на иконку hamb вызываем функцию hambHandle;
hamb.addEventListener("click", hambHandler);

//Выполняем действия при клике..
function hambHandler(e) {
  e.preventDefault();
  //Переключение стили элементов при клике
  popupHeader.classList.toggle("header__open");
  hamb.classList.toggle("header__active");
  body.classList.toggle("noscroll");
  renderPopup();
}

//Выполнить рендеринг элементов в наш попап
function renderPopup() {
  popupHeader.appendChild(menu);
}

//Код для закрытия меню при нажатии на ссылку
const links = Array.from(menu.children);

//Для каждого элемента меню при клике вызываем ф-ию

links.forEach((link) => {
  link.addEventListener("click", closeOnClick);
});

//Закрытие попапа при клике на меню
function closeOnClick() {
  popupHeader.classList.toggle("header__open");
  hamb.classList.toggle("header__active");
  body.classList.remove("noscroll");
}

document.querySelectorAll('a[href^="#"').forEach(link => {
  link.addEventListener("click", function (event) {
    event.preventDefault();

    let href = this.getAttribute("href").substring(1);

    const scrollTarget = document.getElementById(href);

    const topOffset = 0;

    const elementPosition = scrollTarget.getBoundingClientRect().top;
    const offsetPosition = elementPosition - topOffset;

    window.scrollBy({
        top: offsetPosition,
        behavior: 'smooth'
    });
  });
});
