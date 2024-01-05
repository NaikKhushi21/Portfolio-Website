function toggleMenu() {
    const menu = document.querySelector(".menu-links")
    const icon = document.querySelector(".hamburger-icon")
    menu.classList.toggle("open")
    icon.classList.toggle("open")
}

// document.addEventListener("DOMContentLoaded", function () {
//     const movingBackground = document.querySelector('.moving-background');

//     // Predefined list of pastel colors
//     const pastelColors = ['#faedcb', '#c9e4de', '#c6def1', '#dbcdf0', '#f2c6de', '#f7d9c4'];

//     // Generate random wave colors from the pastel list
//     const randomColors = Array.from({ length: 6 }, () => getRandomElement(pastelColors));
    
//     // Apply the dynamic gradient
//     const dynamicGradient = `linear-gradient(90deg, ${randomColors.join(', ')})`;
//     movingBackground.style.background = dynamicGradient;

//     // Apply the dynamic animation
//     const animationDuration = 20; // seconds
//     movingBackground.style.animation = `waveAnimation ${animationDuration}s linear infinite`;
// });

// function getRandomElement(array) {
//     return array[Math.floor(Math.random() * array.length)];
// }


