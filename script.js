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

// Cursor Light Effect
const cursorLight = document.getElementById('cursorLight');
let mouseX = 0;
let mouseY = 0;
let lightX = 0;
let lightY = 0;
let isMouseMoving = false;
let mouseMoveTimeout;

// Track mouse position
document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    
    // Show cursor light
    if (!isMouseMoving) {
        cursorLight.classList.add('active');
        isMouseMoving = true;
    }
    
    // Hide cursor light after mouse stops moving
    clearTimeout(mouseMoveTimeout);
    mouseMoveTimeout = setTimeout(() => {
        cursorLight.classList.remove('active');
        isMouseMoving = false;
    }, 1000);
    
    // Smooth animation using requestAnimationFrame
    animateCursorLight();
});

// Smooth cursor light animation
function animateCursorLight() {
    // Easing function for smooth movement
    const ease = 0.15;
    lightX += (mouseX - lightX) * ease;
    lightY += (mouseY - lightY) * ease;
    
    cursorLight.style.left = lightX + 'px';
    cursorLight.style.top = lightY + 'px';
    
    if (isMouseMoving) {
        requestAnimationFrame(animateCursorLight);
    }
}

// Hide cursor light when mouse leaves the window
document.addEventListener('mouseleave', () => {
    cursorLight.classList.remove('active');
    isMouseMoving = false;
});

// Show cursor light when mouse enters the window
document.addEventListener('mouseenter', () => {
    if (mouseX !== 0 || mouseY !== 0) {
        cursorLight.classList.add('active');
    }
});

// Initialize cursor light position
cursorLight.style.left = '50%';
cursorLight.style.top = '50%';
lightX = window.innerWidth / 2;
lightY = window.innerHeight / 2;

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

// Performance optimization: Reduce cursor light updates on mobile
if (window.innerWidth <= 768) {
    // Reduce cursor light size on mobile
    cursorLight.style.width = '200px';
    cursorLight.style.height = '200px';
}

// Handle window resize
window.addEventListener('resize', () => {
    if (window.innerWidth <= 768) {
        cursorLight.style.width = '200px';
        cursorLight.style.height = '200px';
    } else {
        cursorLight.style.width = '300px';
        cursorLight.style.height = '300px';
    }
});
