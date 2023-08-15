

const navMobileBtn = document.querySelector('.navMobileBtn');
const navMobileUl = document.querySelector('.navMobile ul');
const navMobileBgDim = document.querySelector('.navMobileBgDim');



navMobileBtn.addEventListener('click', navClickHandler);
navMobileUl.addEventListener('click', navClickHandler);
function navClickHandler(){
    navMobileUl.classList.toggle('open');
    navMobileBgDim.classList.toggle('open');
    if (document.body.style.overflow == 'hidden') {
        document.body.style.overflow = 'scroll'
    } else {
        document.body.style.overflow = 'hidden';
    }
}

