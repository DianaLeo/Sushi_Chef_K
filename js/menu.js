const menuIntroListItems = document.querySelectorAll('.menuIntroContainer li');
const menuIntroImgCovers = document.querySelectorAll('.menuIntroImgCover');

menuIntroListItems.forEach((li,index)=>{
    const menuIntroImgCover = menuIntroImgCovers[index];
    li.addEventListener('mouseover',()=>{
        menuIntroImgCover.classList.add('mousehover');
    })
    li.addEventListener('mouseout',()=>{
        menuIntroImgCover.classList.remove('mousehover');
    })
})