import "./index.css";
// show-more all-services
const allServices = document.querySelector('.services__button');
const servicesLength = document.querySelectorAll('.services__item').length;
const allProjects = document.querySelector('.project__button');
const projectLength = document.querySelectorAll('.project__items').length;


let itemsAllServices = 3;
let itemsAllProject = 4;

allServices.addEventListener('click', () => {
    itemsAllServices += 3;
    const array = Array.from(document.querySelector('.services__block').children);
    const visItems = array.slice(0, itemsAllServices);

    visItems.forEach(el => el.classList.add('is-visible'));

    if (visItems.length === servicesLength) {
        allServices.style.display = 'none';
    }
});

allProjects.addEventListener('click', () => {
    itemsAllProject +=1;
    const array = Array.from(document.querySelector('.project__content').children);
    const visItems = array.slice(0, itemsAllProject);

    visItems.forEach(el => el.classList.add('visible'));

    if (visItems.length === projectLength) {
        allProjects.style.display = 'none';
    }
});


//burger menu




