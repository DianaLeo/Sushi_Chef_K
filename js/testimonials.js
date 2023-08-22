const testimonialCards = document.querySelectorAll('.testimonialCard');
const btnLeft = document.querySelector('.testimonials .left');
const btnRight = document.querySelector('.testimonials .right');

const tCardLength = testimonialCards.length;
const tCardWidth = testimonialCards[0].offsetWidth + 20;

let currentCardID = Math.ceil(tCardLength / 2);

testimonialCards.forEach((card) => {
    moveCards(card);
    card.addEventListener('click', () => {
        currentCardID = card.id;
        testimonialCards.forEach(card => {
            moveCards(card);
        })
    });
});

function moveCards(card) {
    let times = 0.5 + (currentCardID - card.id);
    card.style.left = `calc(50% - ${tCardWidth * times}px + 10px)`;
    if (card.id != currentCardID) {
        card.style.opacity = 1 - 0.45 * Math.abs(card.id - currentCardID);
    } else {
        card.style.opacity = 1
    }
}

btnLeft.addEventListener('click', () => {
    if (currentCardID > 1) {
        currentCardID--;
        testimonialCards.forEach(card => {
            moveCards(card);
        })
    }
})
btnRight.addEventListener('click', () => {
    if (currentCardID < tCardLength) {
        currentCardID++;
        testimonialCards.forEach(card => {
            moveCards(card);
        })
    }
})