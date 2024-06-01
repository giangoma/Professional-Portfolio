// Ensures DOM content is fully loaded before executing JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Defines the GSAP timeline for the existing animation
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: '.img',
            scrub: true
        }
    }).to('.img', {
        stagger: 0.2,
        y: -700,
        scrub: true
    });
});
