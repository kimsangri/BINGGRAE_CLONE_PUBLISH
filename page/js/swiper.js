//swiper script

const categorySwiper = new Swiper(".cateSwiper", {
    cssMode: true,
    observer: true,
    observeParents: true,
    breakpoints: {
        320: {
            slidesPerView: 3.3,
            grid: {
                rows: 2,
            },
            slidesPerColumnFill: 'row',
            spaceBetween: 0,
        },
        769: {
            slidesPerView: 6.5,
            grid: {
                rows: 1,
            },
            slidesPerColumnFill: 'row',
            spaceBetween: 5,
        },
        1200: {
            slidesPerView: 5.4,
            grid: {
                rows: 1,
            },
            slidesPerColumnFill: 'row',
            spaceBetween: 5,
        },
        1400: {
            slidesPerView: 6.4, //when window width is <= 1400px
            grid: {
                rows: 1,
            },
            slidesPerColumnFill: 'row',
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
    },
    on: {
        resize: function () {
            const cateSwiper = document.querySelector(".cateSwiper");
            const width = window.innerWidth;

            if (width > 768) {
                categorySwiper.update();
            } else {
                categorySwiper.update();
                cateSwiper.classList.add("swiper-grid", "swiper-grid-column");
            }
        },
    }
});


const brandShopSwiper = new Swiper(".brandSwiper", {
    cssMode: true,
    observer: true,
    observeParents: true,
    breakpoints: {
        320: {
            slidesPerView: 3.3,
            grid: {
                rows: 2,
            },
            slidesPerColumnFill: 'row',
            spaceBetween: 0,
        },
        769: {
            slidesPerView: 4.4,
            grid: {
                rows: 1,
            },
            slidesPerColumnFill: 'row',
            spaceBetween: 20,
        },
        1200: {
            slidesPerView: 5.4,
            grid: {
                rows: 1,
            },
            slidesPerColumnFill: 'row',
            spaceBetween: 20,
        },
        1400: {
            slidesPerView: 6.4, //when window width is <= 1400px
            grid: {
                rows: 1,
            },
            slidesPerColumnFill: 'row',
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
    },
    on: {
        resize: function () {
            const brandSwiper = document.querySelector(".brandSwiper");
            const width = window.innerWidth;

            if (width > 768) {
                brandShopSwiper.update();
            } else {
                brandShopSwiper.update();
                brandSwiper.classList.add("swiper-grid", "swiper-grid-column");
            }
        },
    }
});