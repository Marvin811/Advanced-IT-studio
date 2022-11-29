import "./index.css";
// show-more
const showMore = document.querySelector('.all-services__button');
const productsLength = document.querySelectorAll('.all-services__block-content');
let items = 1;

showMore.addEventListener('click', () => {
    items +=1;

    const array = Array.from(document.querySelector('.all-services__block-container').children);
    const visItems = array.slice(0, items);

    visItems.forEach(element => element.classList.add('is-visible'));

    if (visItems.length === productsLength) {
        showMore.style.display = 'none'
    }
});

