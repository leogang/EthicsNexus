document.addEventListener('DOMContentLoaded', function() {

    // Initialize AOS (Animate On Scroll)
    AOS.init({
        duration: 800, // values from 0 to 3000, with step 50ms
        easing: 'ease-in-out', // default easing for AOS animations
        once: true, // whether animation should happen only once - while scrolling down
        mirror: false, // whether elements should animate out while scrolling past them
    });

    // Sticky header add class on scroll (optional visual enhancement)
    const header = document.getElementById('main-header');
    if (header) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
    }

    // Mobile Navigation Toggle
    const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
    const primaryNav = document.querySelector('#main-header nav');
    const navIcon = mobileNavToggle.querySelector('i');

    if (mobileNavToggle && primaryNav) {
        mobileNavToggle.addEventListener('click', () => {
            const isExpanded = mobileNavToggle.getAttribute('aria-expanded') === 'true' || false;
            mobileNavToggle.setAttribute('aria-expanded', !isExpanded);
            primaryNav.classList.toggle('active');

            // Toggle icon
            if (primaryNav.classList.contains('active')) {
                navIcon.classList.remove('fa-bars');
                navIcon.classList.add('fa-times'); // Change to X icon
            } else {
                navIcon.classList.remove('fa-times');
                navIcon.classList.add('fa-bars'); // Change back to bars
            }
        });

        // Close mobile menu when a link is clicked
        const navLinks = primaryNav.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (primaryNav.classList.contains('active')) {
                    mobileNavToggle.setAttribute('aria-expanded', 'false');
                    primaryNav.classList.remove('active');
                    navIcon.classList.remove('fa-times');
                    navIcon.classList.add('fa-bars');
                }
            });
        });
    }

    // Update footer year
    const currentYearSpan = document.getElementById('current-year');
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }

});
