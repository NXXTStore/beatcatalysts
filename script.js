document.addEventListener('DOMContentLoaded', () => {
    const preloader = document.getElementById('preloader');
    window.addEventListener('load', () => {
        preloader.style.display = 'none';
    });

    const form = document.getElementById('contact-form');
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        alert('Message sent!');
        form.reset();
    });

    const navLinks = document.querySelectorAll('.nav-links a');
    const pages = document.querySelectorAll('.page');

    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetPage = document.getElementById(targetId);

            gsap.to('.page', { duration: 0.5, opacity: 0, display: 'none', onComplete: () => {
                targetPage.style.display = 'block';
                gsap.fromTo(targetPage, { opacity: 0 }, { duration: 0.5, opacity: 1 });
            }});
        });
    });
});
