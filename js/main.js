let swiperLanding = new Swiper('.landing-swiper', {
    loop: true,
    grabCursor: true,
    slidesPerView: "auto",
    navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        768: {
            slidesPerView: 3,
            centeredSlides: "auto",
        },
        1152: {
            slidesPerView: 3,
            centeredSlides: "auto",
            spaceBetween: -64,
        }
    }
});
const sr = ScrollReveal({
    origin: "top",
    distance: "60px",
    duration: "2500",
    reset: true
})
sr.reveal(`.landing-swiper,.footer`)
sr.reveal(`.landing-circle`,{scale: 1.5,delay: 300})
sr.reveal(`.landing-subcircle`,{scale: 1.5,delay: 500})
sr.reveal(`.landing-title`,{scale: 1,origin: "bottom",delay: 1200})
sr.reveal(`.swiper-button-prev,.swiper-button-next`,{origin: "bottom"})