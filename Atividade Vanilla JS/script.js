document.addEventListener('DOMContentLoaded', () => {
    // Add smooth entrance animations
    const elements = document.querySelectorAll('.subtitle, .title, .description, .cta-group, .stats, .hero-image');
    elements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = `all 0.6s ease ${index * 0.15 + 0.2}s`;

        setTimeout(() => {
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        }, 100);
    });

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.3
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        });
    }, observerOptions);

    const scrollElements = document.querySelectorAll('.scroll-element');
    scrollElements.forEach(el => observer.observe(el));
});
