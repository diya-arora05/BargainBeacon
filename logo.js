// script.js

window.addEventListener('load', function() {
    const preloader = document.getElementById('preloader');
    const mainContent = document.getElementById('main-content');
    
    preloader.style.display = 'none'; // Hide preloader
    mainContent.style.display = 'block'; // Show main content
    setTimeout(() => {
        mainContent.style.opacity = '1'; // Fade-in effect
    }, 50);
});

