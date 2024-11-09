const panel = document.querySelectorAll(".panel");

panel.forEach((panel) => {
   panel.addEventListener("mouseover", () => {
    removeActiveClasses();
    panel.classList.add("active");
   });
});

function removeActiveClasses() {
    panel.forEach((panel) => {
        panel.classList.remove("active");
    });
}

    document.addEventListener('DOMContentLoaded', function () {
        const mobileNav = document.querySelector('.nav-item-mobile .Mobile-nav');
        const navItemMobile = document.querySelector('.nav-item-mobile');
        const hamburger = document.querySelector('.hamburger');
        const logo = document.querySelector('.nav-item-mobile img');

        hamburger.addEventListener('click', function () {
            mobileNav.classList.toggle('active');
            navItemMobile.classList.toggle('active');
            logo.classList.toggle('hidden');
        });
    });

