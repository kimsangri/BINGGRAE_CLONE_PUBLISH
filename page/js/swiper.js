//swiper script

//categorySwiper
const categorySwiper = new Swiper(".cateSwiper", {
    cssMode: true,
    observer: true,
    observeParents: true,
    slidesPerColumnFill: 'row',
    breakpoints: {
        320: {
            slidesPerView: 3.3,
            grid: {
                rows: 2,
            },
            spaceBetween: 0,
        },
        769: {
            slidesPerView: 6.5,
            grid: {
                rows: 1,
            },
            spaceBetween: 5,
        },
        1200: {
            slidesPerView: 5.4,
            grid: {
                rows: 1,
            },
            spaceBetween: 5,
        },
        1400: {
            slidesPerView: 6.4, //when window width is <= 1400px
            grid: {
                rows: 1,
            },
            spaceBetween: 5,
        },
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    }
});

//brandShopSwiper
const brandShopSwiper = new Swiper(".brandSwiper", {
    cssMode: true,
    observer: true,
    observeParents: true,
    slidesPerColumnFill: 'row',
    breakpoints: {
        320: {
            slidesPerView: 3.3,
            grid: {
                rows: 2,
            },
            spaceBetween: 0,
        },
        769: {
            slidesPerView: 4.4,
            grid: {
                rows: 1,
            },
            spaceBetween: 20,
        },
        1200: {
            slidesPerView: 5.4,
            grid: {
                rows: 1,
            },
            spaceBetween: 20,
        },
        1400: {
            slidesPerView: 6.4, //when window width is <= 1400px
            grid: {
                rows: 1,
            },
            spaceBetween: 20,
        }
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    }
});