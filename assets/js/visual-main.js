document.addEventListener("DOMContentLoaded", function() {
    const items = document.querySelectorAll('.main-item');
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else {
                entry.target.classList.remove('visible');
            }
        });
    }, {
        threshold: 0.5 // El punto medio del elemento
    });

    items.forEach(item => {
        observer.observe(item);
    });
});