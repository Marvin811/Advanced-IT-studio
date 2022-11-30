import "./index.css";
// show-more
const showMore = document.querySelector('.services__button');
const productsLength = document.querySelectorAll('.services__item').length;
let items = 3;

showMore.addEventListener('click', () => {
    items += 3;
    const array = Array.from(document.querySelector('.services__block').children);
    const visItems = array.slice(0, items);

    visItems.forEach(el => el.classList.add('is-visible'));

    if (visItems.length === productsLength) {
        showMore.style.display = 'none';
    }
});

