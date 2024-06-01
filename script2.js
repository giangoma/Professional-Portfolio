document.addEventListener('DOMContentLoaded', function() {
    // Initializes Lenis with a custom easing function and duration
    const lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
    });

    // Functions to animate with requestAnimationFrame
    function raf(time) {
        lenis.raf(time); // Pass the time to Lenis
        requestAnimationFrame(raf); // Recursively call raf
    }

    requestAnimationFrame(raf);

    // GSAP timeline for animating the image on scroll
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: '.img', // Element that triggers the animation
            scrub: true // Smooth scrubbing
        }
    }).to('.img', {
        stagger: 0.2, // Staggers the animation of each image
        y: -700, // Moves images up by 700 pixels
        scrub: true 
    });

    // GSAP timeline for animating the video container on scroll
    const videoTL = gsap.timeline({
        scrollTrigger: {
            trigger: '.video-container', // Element that triggers the animation
            start: 'top 5%', // Animation starts when top of container reaches 5% from top of viewport
            end: 'bottom top', // Animation ends when bottom of container reaches top of viewport
            scrub: true // Smooth scrubbing
        }
    });

    // Scales the video down to 50%
    videoTL.to('#scrollable-video', {
        scale: 0.5,
    });
});

const initSlider = () => {
    const imageList = document.querySelector(".slider-wrapper .image-list"); // Container with the images
    const slideButtons = document.querySelectorAll(".slider-wrapper .slide-button"); // Slide navigation buttons
    const sliderScrollbar = document.querySelector(".container .slider-scrollbar"); // Custom scrollbar container
    const scrollbarThumb = sliderScrollbar.querySelector(".scrollbar-thumb"); // Custom scrollbar thumb
    const maxScrollLeft = imageList.scrollWidth - imageList.clientWidth; // Maximum horizontal scroll value
    
    // Handles dragging of the scrollbar thumb
    scrollbarThumb.addEventListener("mousedown", (e) => {
        const startX = e.clientX;
        const thumbPosition = scrollbarThumb.offsetLeft;
        const maxThumbPosition = sliderScrollbar.getBoundingClientRect().width - scrollbarThumb.offsetWidth;
        
        // Updates thumb position on mouse move
        const handleMouseMove = (e) => {
            const deltaX = e.clientX - startX;
            const newThumbPosition = thumbPosition + deltaX;
            // Ensure the scrollbar thumb stays within bounds
            const boundedPosition = Math.max(0, Math.min(maxThumbPosition, newThumbPosition));
            const scrollPosition = (boundedPosition / maxThumbPosition) * maxScrollLeft;
            
            scrollbarThumb.style.left = `${boundedPosition}px`; // Move the thumb
            imageList.scrollLeft = scrollPosition; // Scroll the image list
        }

        // Stops dragging when mouse button is released
        const handleMouseUp = () => {
            document.removeEventListener("mousemove", handleMouseMove);
            document.removeEventListener("mouseup", handleMouseUp);
        }

        // Adds event listeners for mouse move and mouse up
        document.addEventListener("mousemove", handleMouseMove);
        document.addEventListener("mouseup", handleMouseUp);
    });

    // Slides images when slide buttons are clicked
    slideButtons.forEach(button => {
        button.addEventListener("click", () => {
            const direction = button.id === "prev-slide" ? -1 : 1;
            const scrollAmount = imageList.clientWidth * direction;
            imageList.scrollBy({ left: scrollAmount, behavior: "smooth" }); // Scroll the image list
        });
    });

    // Shows or hide slide buttons based on scroll position
    const handleSlideButtons = () => {
        slideButtons[0].style.display = imageList.scrollLeft <= 0 ? "none" : "flex"; // Hide previous button if at start
        slideButtons[1].style.display = imageList.scrollLeft >= maxScrollLeft ? "none" : "flex"; // Hide next button if at end
    }

    // Updates scrollbar thumb position based on image list scroll
    const updateScrollThumbPosition = () => {
        const scrollPosition = imageList.scrollLeft;
        const thumbPosition = (scrollPosition / maxScrollLeft) * (sliderScrollbar.clientWidth - scrollbarThumb.offsetWidth);
        scrollbarThumb.style.left = `${thumbPosition}px`; // Move the thumb
    }

    // Calls these functions when the image list scrolls
    imageList.addEventListener("scroll", () => {
        updateScrollThumbPosition(); // Update the thumb position
        handleSlideButtons(); // Show/hide slide buttons
    });
}

// Initialize the slider on window resize and load
window.addEventListener("resize", initSlider);
window.addEventListener("load", initSlider);
