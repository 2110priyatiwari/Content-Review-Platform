
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