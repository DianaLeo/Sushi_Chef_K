const reservationBtn = document.querySelector('.reservationBtn');
const reservationWindow = document.querySelector('.reservation');

reservationBtn.addEventListener('click',()=>{
    reservationWindow.classList.toggle('open');
})
