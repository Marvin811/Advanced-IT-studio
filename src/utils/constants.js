// show-more all-services
export const allServices = document.querySelector(".services__button");
export const servicesLength = document.querySelectorAll(".services__item").length;
export const allProjects = document.querySelector(".project__button");
export const projectLength = document.querySelectorAll(".project__items").length;
export const popups = document.querySelectorAll('.popup');
export const popupProfileOpenButton = document.querySelector('.about-us__link');
export const popupProfile = document.querySelector('#popup_profile');
export const popupProfileCloseButton = document.querySelector('#edit_close');
//burger menu
export const hamb = document.querySelector("#hamb");
export const popupHeader = document.querySelector("#popupHeader");
export const body = document.querySelector(".page");
//Клонируем меню, чтобы задать свои стили для мобильной версии
export const menu = document.querySelector("#menu").cloneNode(1);