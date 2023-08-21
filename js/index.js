const navMobileBtn = document.querySelector('.navMobileBtn');
const navUl = document.querySelector('.nav ul');
//const navMobileBgDim = document.querySelector('.navMobileBgDim');



navMobileBtn.addEventListener('click', navClickHandler);
navUl.addEventListener('click', navClickHandler);
function navClickHandler(){
    navUl.classList.toggle('open');
    //navMobileBgDim.classList.toggle('open');
    // if (document.body.style.overflow == 'hidden') {
    //     document.body.style.overflow = 'scroll'
    // } else {
    //     document.body.style.overflow = 'hidden';
    // }
}

