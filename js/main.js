const swiper = new Swiper('.swiper', {
    loop: true,

    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    autoplay: {
        delay: 10000,
        disableOnInteraction: false,
    },
    speed: 1000,
    effect: "easy",
    on: {
        slideChangeTransitionStart: function () {
            var currentSlide = this.slides[this.activeIndex];
            var slideTitle = currentSlide.querySelector('.banner-item__subtitle');
            var slideSubtitle = currentSlide.querySelector('.banner-item__title');
            var slideContent = currentSlide.querySelector('.banner-item__text');
            slideTitle.classList.add('animate');
            slideSubtitle.classList.add('animate');
            slideContent.classList.add('animate');
        },
        slideChangeTransitionEnd: function () {
            var prevSlide = this.slides[this.previousIndex];
            var prevSlideTitle = prevSlide.querySelector('.banner-item__subtitle');
            var prevSlideSubtitle = prevSlide.querySelector('.banner-item__title');
            var prevSlideContent = prevSlide.querySelector('.banner-item__text');
            prevSlideTitle.classList.remove('animate');
            prevSlideSubtitle.classList.remove('animate');
            prevSlideContent.classList.remove('animate');
        }
    }
});
