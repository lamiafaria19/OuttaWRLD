$(document).ready(function () {
    animate()
    carousel()
    carousel2()
    magicCursor()
    heroImageAnimate()
    resizeWindow()
});


function animate() {
    // Select the element to animate
    const elementToAnimate = document.querySelectorAll("[data-animation='animate']");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    });


// Start observing the element
    elementToAnimate.forEach(ele => {
        observer.observe(ele);
    })

}

function magicCursor() {

    try {
        var cursor = $(".cursor"),
            follower = $(".cursor-follower");

        var posX = 0,
            posY = 0;

        var mouseX = 0,
            mouseY = 0;

        TweenMax.to({}, 0.016, {
            repeat: -1,
            onRepeat: function () {
                posX += (mouseX - posX) / 9;
                posY += (mouseY - posY) / 9;

                TweenMax.set(follower, {
                    css: {
                        left: posX - 12,
                        top: posY - 12
                    }
                });

                TweenMax.set(cursor, {
                    css: {
                        left: mouseX,
                        top: mouseY
                    }
                });
            }
        });

        $(document).on("mousemove", function (e) {
            mouseX = e.clientX;
            mouseY = e.clientY;
        });

        $(".nav-link").on("mouseenter", function () {
            follower.addClass("active");
        });

        $("a").on("mouseenter", function () {
            follower.addClass("active");
        });

        $("a").on("mouseleave", function () {
            follower.removeClass("active");
            follower.removeClass("active-swiper");
        });
        $(".nav-link").on("mouseleave", function () {
            follower.removeClass("active");
            follower.removeClass("active-swiper");
        });

        document.body.addEventListener("mousedown", (e) => {
            if (e.target.tagName === "IMG") {
                if (e.target.parentElement.classList.contains("splide__slide")) {
                    follower.addClass("active");
                    follower.addClass("active-swiper");
                }
            }
        })

        document.body.addEventListener("mouseup", (e) => {
            follower.removeClass("active");
            follower.removeClass("active-swiper");
        })
    } catch (ex) {

    }
}


function carousel() {
    const sliderNum = document.querySelector("#slider-active-number")
    try {
        var splide = new Splide('.splide', {
            type: 'loop',
            padding: '12rem',
            breakpoints: {
                1080: {
                    padding: '8rem',
                },
                860: {
                    padding: '6rem',
                },
                768: {
                    padding: '.5rem',
                    autoWidth: false,
                    width: "100%"

                },
                576: {
                    type: 'loop',
                    perPage: 1,
                    padding: '0'
                }
            },

        });
        splide.mount();


        splide.on("move", (index) => {
            if (sliderNum) {
                sliderNum.innerText = "0" + (index + 1)
            }
        })

        const prevbtn = document.querySelector(".splide__arrow--prev")
        const nextbtn = document.querySelector(".splide__arrow--next")
        const prev = document.querySelectorAll(".prev-btn")


        prev.forEach((p) => {
            p.addEventListener("click", () => {
                prevbtn.click()
            })
        })
        const nextBtn = document.querySelectorAll(".next-btn")
        nextBtn.forEach(n => {
            n.addEventListener("click", () => {
                nextbtn.click()
            })
        })

    } catch (ex) {
        console.log(ex)
    }
}


function carousel2() {
    try {
        var splide = new Splide('.splide2', {
            focus: 'start',
            gap: 50,
            pagination: false,
            arrows: true,
            autoWidth: true,
            breakpoints: {
                1080: {
                    gap: 40,
                },
                860: {
                    gap: 20,
                },
                768: {
                    gap: 16,
                },
                576: {
                    gap: 10,
                },
            },

        });
        splide.mount();

        let prev2 = document.querySelector(".carousel2-bottom-control .prev-btn")
        let next2 = document.querySelector(".carousel2-bottom-control .next-btn")
        splide.on("move", (index) => {
            if (index === 0) {
                prev2.classList.add("mute-btn")
                next2.classList.remove("mute-btn")
            } else if (index >= 4) {
                prev2.classList.remove("mute-btn")
                next2.classList.add("mute-btn")
            } else {
                prev2.classList.remove("mute-btn")
                next2.classList.remove("mute-btn")
            }

        })

        const prevbtn = document.querySelector(".splide__arrow--prev")
        const nextbtn = document.querySelector(".splide__arrow--next")
        const prev = document.querySelectorAll(".prev-btn")
        prev.forEach((p) => {
            p.addEventListener("click", () => {
                prevbtn.click()
            })
        })
        const nextBtn = document.querySelectorAll(".next-btn")
        nextBtn.forEach(n => {
            n.addEventListener("click", () => {
                nextbtn.click()
            })
        })


    } catch (ex) {
        console.log(ex)
    }
}


function heroImageAnimate() {
    // Select the element to animate
    const elementToAnimate = document.querySelectorAll("[data-animation='animate-scale']");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-scale');
            }
        });
    });


// Start observing the element
    elementToAnimate.forEach(ele => {
        observer.observe(ele);
    })
}


function resizeWindow() {
    calcImageHeight()
    window.addEventListener("resize", () => {
        calcImageHeight()
    })
}

function calcImageHeight() {

    let header = document.querySelector("header")
    let headerHeight = header.offsetHeight;

    let carouselImages = document.querySelectorAll(".hero-carousel .splide__slide > img")
    carouselImages?.forEach(img => {
        if (window.innerWidth > 576) {

            let innerHeight = window.innerHeight
            img.style.maxHeight = (innerHeight - (headerHeight * 2 + 36)) + "px"
        } else {
            img.style.maxHeight = "100vh"
        }

    })
}