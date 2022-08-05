//Burger
const iconMenu = document.querySelector('.header__menu-icon');
if (iconMenu){
    const menu = document.querySelector('.menu__list');
    const button = document.querySelector('.header__button');
    iconMenu.addEventListener("click", function(e){
        iconMenu.classList.toggle('_active');
        button.classList.toggle('_active');
        menu.classList.toggle('_active');
        document.body.classList.toggle('_lock');
    })
}
//Swiper
new Swiper('.swiper-container',{
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    loop: true,
    loopedSlides: 4,
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides : true,
    coverflowEffect: {
        rotate: 0,
        depth: 600,
        stretch: 600,
        slideShadows: false,
    },
});
