const navMobileBtn = document.querySelector('.navMobileBtn');
const navMobileUl = document.querySelector('.navMobile ul');
const testimonialCards = document.querySelectorAll('.testimonialCard');
const testimonialsUl = document.querySelector('.testimonialsUl');


navMobileBtn.addEventListener('click', navClickHandler);
navMobileUl.addEventListener('click', navClickHandler);
function navClickHandler(){
    navMobileUl.classList.toggle('open');
    if (document.body.style.overflow == 'hidden') {
        document.body.style.overflow = 'scroll'
    } else {
        document.body.style.overflow = 'hidden';
    }
}

const tCardLength = testimonialCards.length;
const tCardWidth = 370;
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
    card.style.left = `calc(50% - ${tCardWidth * times}px)`;
    if (card.id != currentCardID) {
        card.style.opacity = 1 - 0.45 * Math.abs(card.id - currentCardID);
    } else {
        card.style.opacity = 1
    }
}