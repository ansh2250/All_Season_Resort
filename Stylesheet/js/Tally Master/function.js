// script.js

function toggleMenu() {
    var nav = document.querySelector('.nav');
    nav.classList.toggle('active');
}

// Close the menu when a navigation link is clicked (for smaller screens)
var navLinks = document.querySelectorAll('.nav a');
navLinks.forEach(function(link) {
    link.addEventListener('click', function() {
        var nav = document.querySelector('.nav');
        nav.classList.remove('active');
    });
});
