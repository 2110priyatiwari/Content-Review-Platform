const cardContainer = document.getElementById('card-container');
const leftArrow = document.getElementById('left-arrow');
const rightArrow = document.getElementById('right-arrow');

leftArrow.addEventListener('click', () => {
    cardContainer.scrollBy({
        left: -300, // Adjust the number to scroll left
        behavior: 'smooth'
    });
});

rightArrow.addEventListener('click', () => {
    cardContainer.scrollBy({
        left: 300, // Adjust the number to scroll right
        behavior: 'smooth'
    });
});
const cardContainer2 = document.getElementById('card-container2');
const leftArrow2 = document.getElementById('left-arrow2');
const rightArrow2 = document.getElementById('right-arrow2');

leftArrow2.addEventListener('click', () => {
    cardContainer2.scrollBy({
        left: -300, // Adjust the number to scroll left
        behavior: 'smooth'
    });
});

rightArrow2.addEventListener('click', () => {
    cardContainer2.scrollBy({
        left: 300, // Adjust the number to scroll right
        behavior:'smooth'
    });
});