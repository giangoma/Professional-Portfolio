document.addEventListener("DOMContentLoaded", () => {
    // Animates navigation links and icons
    gsap.from("nav a, nav i", { 
        duration: 1, 
        opacity: 0, 
        y: -50, 
        stagger: 0.2 
    });

    // Animates the contact section title
    gsap.from(".contact-left-title h2", { 
        duration: 1, 
        opacity: 0, 
        x: -100 
    });

    // Animates the horizontal rule under the title
    gsap.from(".contact-left-title hr", { 
        duration: 1, 
        opacity: 0, 
        x: 100, 
        delay: 0.5 
    });

    // Animates the contact input fields
    gsap.from(".contact-inputs", { 
        duration: 1, 
        opacity: 0, 
        y: 50, 
        stagger: 0.2, 
        delay: 1 
    });

    // Animates the contact button
    gsap.from(".contact-left button", { 
        duration: 1, 
        opacity: 0, 
        scale: 0.8, 
        delay: 2 
    });

    // Animates the contact section image
    gsap.from(".contact-right img", { 
        duration: 1, 
        opacity: 0, 
        x: 100, 
        delay: 1.5 
    });

    // Animates the footer
    gsap.from("footer", { 
        duration: 1, 
        opacity: 0, 
        y: 50, 
        delay: 2.5 
    });
});
