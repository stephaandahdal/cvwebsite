// Theme Toggle Functionality
const themeToggle = document.getElementById('themeToggle');
const themeIcon = themeToggle.querySelector('.theme-icon');
const html = document.documentElement;

// Check for saved theme preference or default to light mode
const currentTheme = localStorage.getItem('theme') || 'light';
html.setAttribute('data-theme', currentTheme);
updateThemeIcon(currentTheme);

// Theme toggle event listener
themeToggle.addEventListener('click', () => {
    const currentTheme = html.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    html.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
});

function updateThemeIcon(theme) {
    themeIcon.textContent = theme === 'dark' ? '☀️' : '🌙';
}

// Cursor Light Effect - Sunlight Background, Smooth & Fluid
const cursorLight = document.getElementById('cursorLight');
const root = document.documentElement;
let mouseX = window.innerWidth / 2;
let mouseY = window.innerHeight / 2;
let lightX = window.innerWidth / 2;
let lightY = window.innerHeight / 2;
let isAnimating = true;

// Track mouse position
document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

// Smooth cursor light animation - sunlight flowing effect
function animateCursorLight() {
    // Very smooth easing for fluid, sunlight-like movement
    const ease = 0.08; // Lower value = smoother, more fluid movement
    
    // Calculate distance and direction
    const dx = mouseX - lightX;
    const dy = mouseY - lightY;
    
    // Apply smooth easing with slight momentum
    lightX += dx * ease;
    lightY += dy * ease;
    
    // Convert to percentage for CSS gradient (this fixes alignment)
    const lightXPercent = (lightX / window.innerWidth) * 100;
    const lightYPercent = (lightY / window.innerHeight) * 100;
    
    // Update CSS variable for background gradient position
    root.style.setProperty('--light-x-percent', lightXPercent + '%');
    root.style.setProperty('--light-y-percent', lightYPercent + '%');
    
    // Continue animation loop
    if (isAnimating) {
        requestAnimationFrame(animateCursorLight);
    }
}

// Start animation loop immediately
animateCursorLight();

// Initialize cursor light position
const initialXPercent = (lightX / window.innerWidth) * 100;
const initialYPercent = (lightY / window.innerHeight) * 100;
root.style.setProperty('--light-x-percent', initialXPercent + '%');
root.style.setProperty('--light-y-percent', initialYPercent + '%');

// Update current year in footer
document.getElementById('currentYear').textContent = new Date().getFullYear();

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Intersection Observer for fade-in animations (optional enhancement)
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all sections for fade-in effect
document.querySelectorAll('.section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(section);
});

// Update light position on window resize
window.addEventListener('resize', () => {
    // Recalculate center position
    if (lightX > window.innerWidth) lightX = window.innerWidth / 2;
    if (lightY > window.innerHeight) lightY = window.innerHeight / 2;
    const lightXPercent = (lightX / window.innerWidth) * 100;
    const lightYPercent = (lightY / window.innerHeight) * 100;
    root.style.setProperty('--light-x-percent', lightXPercent + '%');
    root.style.setProperty('--light-y-percent', lightYPercent + '%');
});
