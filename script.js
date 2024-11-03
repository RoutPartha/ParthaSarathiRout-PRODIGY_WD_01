// Function to handle scroll animations
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        } else {
            entry.target.classList.remove('visible'); // optional: reset animation on scroll-out
        }
    });
}, {
    threshold: 0.1 // Trigger when 10% of the section is visible
});

// Observe each section
document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});

// Sticky navbar color change on scroll
window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});
