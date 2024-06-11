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
});
