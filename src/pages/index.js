import "./index.css";
import {
   allServices,
    servicesLength,
    allProjects,
    projectLength,
    popups,
    popupProfileOpenButton,
    popupProfileCloseButton,
    popupProfile,
    popupHeader,
    hamb,
    body,
    menu
} from '../utils/constants.js';
const links = Array.from(menu.children);
//Footer Date
const date = new Date().getFullYear();
document.querySelector('.myDate').textContent = date.toString();


let itemsAllServices = 3;
let itemsAllProject = 4;


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

//Для каждого элемента меню при клике вызываем ф-ию


//Закрытие попапа при клике на меню
function closeOnClick() {
    popupHeader.classList.toggle("header__open");
    hamb.classList.toggle("header__active");
    body.classList.remove("noscroll");
}


function openPopup(popup) {
    popup.classList.add('popup_is-opened');
    document.addEventListener('keydown', closePopupEsc);
}

function closePopup(popup) {
    popup.classList.remove('popup_is-opened');
    document.removeEventListener('keydown', closePopupEsc);
}

function closePopupEsc(evt) {
    if (evt.key === 'Escape') {
        const onPopup = document.querySelector('.popup_is-opened');
        closePopup(onPopup);
    }
}

links.forEach((link) => {
    link.addEventListener("click", closeOnClick);
});


//При клике на иконку hamb вызываем функцию hambHandle;
hamb.addEventListener("click", hambHandler);

document.querySelectorAll('a[href^="#"]').forEach(link => {
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

popups.forEach((popup) => {
    popup.addEventListener('click', (evt) => {
        if (evt.target.classList.contains('popup_is-opened')) {
            closePopup(popup);
        }
        if (evt.target.classList.contains('popup__close-button')) {
            closePopup(popup);
        }
    })
})

popupProfileOpenButton.addEventListener('click', () => {
    openPopup(popupProfile);
});
popupProfileCloseButton.addEventListener('click', () => {
    closePopup(popupProfile)
})