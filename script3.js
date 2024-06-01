console.log("JavaScript code is running..."); // Ensures the JS is running. I had initially used this for debugging

// Gets all skill progress bars
const skillBars = document.querySelectorAll('.skill-progress');

// Animates the width of each skill bar
skillBars.forEach(bar => {
    const width = bar.style.width; // Get the initial width from the inline style
    gsap.fromTo(bar, { width: '0%' }, { width, duration: 2, ease: 'power2.out' }); // Animate from 0% to the specified width
});

// Animates the image with opacity and scale
gsap.from("#self-image", {
    opacity: 0, // Start from fully transparent
    scale: 0.8, // Start from 80% scale
    duration: 1.5, // Animation duration
    ease: "power2.out" // Easing function for a smooth effect
});

// Animates the text with opacity and vertical movement
gsap.from(".rght-two h1, .rght-two p", {
    opacity: 0, // Starts from fully transparent
    y: 20, // Starts 20px below the final position
    duration: 1.5, // Animation duration
    ease: "power2.out", // Easing function for a smooth effect
    stagger: 0.3 // Staggers the start of each animation
});

// Selects the element to be animated based on mouse movement
const el = document.querySelector(".title");

// Calculates initial widths
let elWidth = el.offsetWidth;
let windowWidth = window.innerWidth;

// Initializes mouse position variables
let mouseX = 0;
let prevMouseX = 0;

// Initializes target values for animation
let skewTarget = 0;
let translateTarget = 0;

// Initializes values with easing for animation
let skewWithEasing = 0;
let translateWithEasing = 0;

// Eases factors for skew and translation
let skewEasingFactor = 0.1;
let translateEasingFactor = 0.05;

// Adds event listeners for mouse move and window resize
window.addEventListener("mousemove", handleMouseMove);
window.addEventListener("resize", handleWindowResize);

// Updates mouse position on mouse move
function handleMouseMove(e) {
  mouseX = e.pageX;
}

// Updates element and window widths on resize
function handleWindowResize(e) {
  elWidth = el.offsetWidth;
  windowWidth = window.innerWidth;
}


function lerp(start, end, factor) {
  return (1 - factor) * start + factor * end;
}

// Animation loop
function animateMe() {
  // Calculates skew target based on mouse movement
  skewTarget = mouseX - prevMouseX;
  prevMouseX = mouseX;

  // Calculates translate target based on mouse position
  translateTarget = (elWidth - windowWidth) / windowWidth * mouseX * -1;

  // Eases between start and target values for skew
  skewWithEasing = lerp(skewWithEasing, skewTarget, skewEasingFactor);

  // Limits skew to a range of -75 to 75 degrees
  skewWithEasing = Math.min(Math.max(parseInt(skewWithEasing), -75), 75);

  // Eases between start and target values for translation
  translateWithEasing = lerp(
    translateWithEasing,
    translateTarget,
    translateEasingFactor
  );

  // Applies transform to the element
  el.style.transform = `
    translateX(${translateWithEasing}px)
    skewX(${skewWithEasing}deg)
  `;

  // Requests the next animation frame
  window.requestAnimationFrame(animateMe);
}

// Starts the animation loop
window.requestAnimationFrame(animateMe);
