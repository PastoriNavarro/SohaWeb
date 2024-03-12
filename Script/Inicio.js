let currentSlide = 0;

    function showSlide(index) {
        const slider = document.querySelector('.slider');
        const slides = document.querySelectorAll('.slide');
        const slideWidth = slides[0].offsetWidth;

        if (index < 0) {
            currentSlide = slides.length - 1;
        } else if (index >= slides.length) {
            currentSlide = 0;
        } else {
            currentSlide = index;
        }

        slider.style.transform = `translateX(${-currentSlide * slideWidth}px)`;
    }

    function prevSlide() {
        showSlide(currentSlide - 1);
    }

    function nextSlide() {
        showSlide(currentSlide + 1);
    }

