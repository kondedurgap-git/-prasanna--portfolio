// ===== MAIN JAVASCRIPT FILE =====

// DOM Content Loaded Event
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all components
    initNavigation();
    initScrollAnimations();
    initTypingEffect();
    initContactForm();
    initSmoothScrolling();
    initThemeToggle();
    initParallaxEffects();
    initCounterAnimations();
    initSkillBars();
    initProjectFilters();
    initLazyLoading();
    
    // Initialize AOS (Animate On Scroll) if available
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 800,
            easing: 'ease-in-out',
            once: true,
            offset: 100
        });
    }
});

// ===== NAVIGATION =====
function initNavigation() {
    const navbar = document.getElementById('navbar');
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Navbar scroll effect
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
    
    // Mobile menu toggle
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
            document.body.classList.toggle('menu-open');
        });
    }
    
    // Close mobile menu when clicking on links
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (hamburger && navMenu) {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
                document.body.classList.remove('menu-open');
            }
        });
    });
    
    // Active navigation link highlighting
    window.addEventListener('scroll', function() {
        let current = '';
        const sections = document.querySelectorAll('section[id]');
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollY >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
}

// ===== SMOOTH SCROLLING =====
function initSmoothScrolling() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 70; // Account for fixed navbar
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ===== SCROLL ANIMATIONS =====
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                
                // Trigger counter animations for stats
                if (entry.target.classList.contains('stat-number')) {
                    animateCounter(entry.target);
                }
                
                // Trigger skill bar animations
                if (entry.target.classList.contains('skill-bar')) {
                    animateSkillBar(entry.target);
                }
            }
        });
    }, observerOptions);
    
    // Observe elements for scroll animations
    const animateElements = document.querySelectorAll('.scroll-animate, .stat-number, .skill-bar');
    animateElements.forEach(el => {
        el.classList.add('scroll-animate');
        observer.observe(el);
    });
}

// ===== TYPING EFFECT =====
function initTypingEffect() {
    const typingElements = document.querySelectorAll('.typing-effect');
    
    typingElements.forEach(element => {
        const text = element.textContent;
        element.textContent = '';
        element.style.borderRight = '2px solid var(--primary-color)';
        
        let i = 0;
        const typeWriter = () => {
            if (i < text.length) {
                element.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 100);
            } else {
                // Remove cursor after typing is complete
                setTimeout(() => {
                    element.style.borderRight = 'none';
                }, 1000);
            }
        };
        
        // Start typing effect when element is visible
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setTimeout(typeWriter, 500);
                    observer.unobserve(entry.target);
                }
            });
        });
        
        observer.observe(element);
    });
}

// ===== COUNTER ANIMATIONS =====
function initCounterAnimations() {
    // This will be triggered by scroll animations
}

function animateCounter(element) {
    const target = parseInt(element.textContent.replace(/[^\d]/g, ''));
    const suffix = element.textContent.replace(/[\d]/g, '');
    let current = 0;
    const increment = target / 50;
    const duration = 2000;
    const stepTime = duration / 50;
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            current = target;
            clearInterval(timer);
        }
        element.textContent = Math.floor(current) + suffix;
    }, stepTime);
}

// ===== SKILL BARS =====
function initSkillBars() {
    // This will be triggered by scroll animations
}

function animateSkillBar(element) {
    const percentage = element.getAttribute('data-percentage');
    element.style.width = '0%';
    
    setTimeout(() => {
        element.style.transition = 'width 2s ease-in-out';
        element.style.width = percentage + '%';
    }, 200);
}

// ===== CONTACT FORM =====
function initContactForm() {
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(contactForm);
            const name = formData.get('name');
            const email = formData.get('email');
            const subject = formData.get('subject');
            const message = formData.get('message');
            
            // Basic validation
            if (!name || !email || !subject || !message) {
                showNotification('Please fill in all fields.', 'error');
                return;
            }
            
            if (!isValidEmail(email)) {
                showNotification('Please enter a valid email address.', 'error');
                return;
            }
            
            // Show loading state
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const originalText = submitBtn.innerHTML;
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
            submitBtn.disabled = true;
            
            // Simulate form submission (replace with actual form handling)
            setTimeout(() => {
                showNotification('Thank you for your message! I\'ll get back to you soon.', 'success');
                contactForm.reset();
                
                // Reset button
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;
            }, 2000);
        });
    }
}

// ===== UTILITY FUNCTIONS =====
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotifications = document.querySelectorAll('.notification');
    existingNotifications.forEach(notification => notification.remove());
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas fa-${getNotificationIcon(type)}"></i>
            <span>${message}</span>
            <button class="notification-close">
                <i class="fas fa-times"></i>
            </button>
        </div>
    `;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: var(--card-bg);
        color: var(--text-primary);
        padding: 16px 20px;
        border-radius: var(--border-radius);
        border-left: 4px solid var(--${type === 'success' ? 'success' : type === 'error' ? 'danger' : 'primary'}-color);
        box-shadow: var(--shadow-lg);
        z-index: 10000;
        max-width: 400px;
        animation: slideInRight 0.3s ease-out;
    `;
    
    // Add to DOM
    document.body.appendChild(notification);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease-in';
        setTimeout(() => notification.remove(), 300);
    }, 5000);
    
    // Close button functionality
    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.addEventListener('click', () => {
        notification.style.animation = 'slideOutRight 0.3s ease-in';
        setTimeout(() => notification.remove(), 300);
    });
}

function getNotificationIcon(type) {
    switch (type) {
        case 'success': return 'check-circle';
        case 'error': return 'exclamation-circle';
        case 'warning': return 'exclamation-triangle';
        default: return 'info-circle';
    }
}

// ===== THEME TOGGLE =====
function initThemeToggle() {
    // Add theme toggle button if needed
    const themeToggle = document.getElementById('theme-toggle');
    
    if (themeToggle) {
        themeToggle.addEventListener('click', function() {
            document.body.classList.toggle('light-theme');
            
            // Save preference
            const isLight = document.body.classList.contains('light-theme');
            localStorage.setItem('theme', isLight ? 'light' : 'dark');
            
            // Update icon
            const icon = themeToggle.querySelector('i');
            icon.className = isLight ? 'fas fa-moon' : 'fas fa-sun';
        });
        
        // Load saved theme
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'light') {
            document.body.classList.add('light-theme');
            const icon = themeToggle.querySelector('i');
            icon.className = 'fas fa-moon';
        }
    }
}

// ===== PARALLAX EFFECTS =====
function initParallaxEffects() {
    const parallaxElements = document.querySelectorAll('.parallax');
    
    if (parallaxElements.length > 0) {
        window.addEventListener('scroll', function() {
            const scrolled = window.pageYOffset;
            const rate = scrolled * -0.5;
            
            parallaxElements.forEach(element => {
                element.style.transform = `translateY(${rate}px)`;
            });
        });
    }
}

// ===== PROJECT FILTERS =====
function initProjectFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');
    
    if (filterButtons.length > 0) {
        filterButtons.forEach(button => {
            button.addEventListener('click', function() {
                const filter = this.getAttribute('data-filter');
                
                // Update active button
                filterButtons.forEach(btn => btn.classList.remove('active'));
                this.classList.add('active');
                
                // Filter projects
                projectCards.forEach(card => {
                    if (filter === 'all' || card.classList.contains(filter)) {
                        card.style.display = 'block';
                        card.style.animation = 'fadeInUp 0.5s ease-out';
                    } else {
                        card.style.display = 'none';
                    }
                });
            });
        });
    }
}

// ===== LAZY LOADING =====
function initLazyLoading() {
    const lazyImages = document.querySelectorAll('img[data-src]');
    
    if (lazyImages.length > 0) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.remove('lazy');
                    imageObserver.unobserve(img);
                }
            });
        });
        
        lazyImages.forEach(img => imageObserver.observe(img));
    }
}

// ===== SECURITY DASHBOARD ANIMATION =====
function animateSecurityDashboard() {
    const dashboard = document.querySelector('.security-dashboard');
    if (!dashboard) return;
    
    // Animate metrics
    const metrics = dashboard.querySelectorAll('.metric-value');
    metrics.forEach((metric, index) => {
        setTimeout(() => {
            const value = metric.textContent;
            metric.textContent = '0';
            animateCounter(metric);
        }, index * 200);
    });
    
    // Animate chart bars
    const bars = dashboard.querySelectorAll('.bar');
    bars.forEach((bar, index) => {
        setTimeout(() => {
            bar.style.animation = `barGrow 1s ease-out ${index * 0.1}s both`;
        }, 500);
    });
}

// ===== PERFORMANCE OPTIMIZATIONS =====
// Debounce function for scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Throttle function for scroll events
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// ===== KEYBOARD NAVIGATION =====
document.addEventListener('keydown', function(e) {
    // ESC key to close mobile menu
    if (e.key === 'Escape') {
        const hamburger = document.getElementById('hamburger');
        const navMenu = document.getElementById('nav-menu');
        
        if (hamburger && navMenu && navMenu.classList.contains('active')) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.classList.remove('menu-open');
        }
    }
    
    // Tab navigation enhancement
    if (e.key === 'Tab') {
        document.body.classList.add('keyboard-navigation');
    }
});

// Remove keyboard navigation class on mouse use
document.addEventListener('mousedown', function() {
    document.body.classList.remove('keyboard-navigation');
});

// ===== ACCESSIBILITY ENHANCEMENTS =====
function initAccessibility() {
    // Add skip to content link
    const skipLink = document.createElement('a');
    skipLink.href = '#main-content';
    skipLink.textContent = 'Skip to main content';
    skipLink.className = 'skip-link';
    skipLink.style.cssText = `
        position: absolute;
        top: -40px;
        left: 6px;
        background: var(--primary-color);
        color: var(--dark-bg);
        padding: 8px;
        text-decoration: none;
        border-radius: 4px;
        z-index: 10001;
        transition: top 0.3s;
    `;
    
    skipLink.addEventListener('focus', function() {
        this.style.top = '6px';
    });
    
    skipLink.addEventListener('blur', function() {
        this.style.top = '-40px';
    });
    
    document.body.insertBefore(skipLink, document.body.firstChild);
    
    // Add main content ID
    const mainContent = document.querySelector('main') || document.querySelector('#home');
    if (mainContent) {
        mainContent.id = 'main-content';
    }
}

// ===== ERROR HANDLING =====
window.addEventListener('error', function(e) {
    console.error('JavaScript Error:', e.error);
    // You can add error reporting here
});

// ===== INITIALIZATION =====
// Initialize accessibility features
initAccessibility();

// Initialize security dashboard animation when visible
const dashboardObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateSecurityDashboard();
            dashboardObserver.unobserve(entry.target);
        }
    });
});

const dashboard = document.querySelector('.security-dashboard');
if (dashboard) {
    dashboardObserver.observe(dashboard);
}

// ===== CSS ANIMATIONS (Add to CSS) =====
const additionalStyles = `
@keyframes slideInRight {
    from {
        transform: translateX(100%);
        opacity: 0;
    }
    to {
        transform: translateX(0);
        opacity: 1;
    }
}

@keyframes slideOutRight {
    from {
        transform: translateX(0);
        opacity: 1;
    }
    to {
        transform: translateX(100%);
        opacity: 0;
    }
}

.notification-content {
    display: flex;
    align-items: center;
    gap: 12px;
}

.notification-close {
    background: none;
    border: none;
    color: var(--text-secondary);
    cursor: pointer;
    padding: 4px;
    border-radius: 4px;
    transition: var(--transition-fast);
}

.notification-close:hover {
    background: rgba(255, 255, 255, 0.1);
    color: var(--text-primary);
}

.skip-link:focus {
    outline: 2px solid var(--accent-color);
    outline-offset: 2px;
}

.keyboard-navigation *:focus {
    outline: 2px solid var(--primary-color);
    outline-offset: 2px;
}

body.menu-open {
    overflow: hidden;
}

.lazy {
    opacity: 0;
    transition: opacity 0.3s;
}

.lazy.loaded {
    opacity: 1;
}
`;

// Add additional styles to head
const styleSheet = document.createElement('style');
styleSheet.textContent = additionalStyles;
document.head.appendChild(styleSheet);

// ===== CONSOLE WELCOME MESSAGE =====
console.log(`
%c🛡️ Durga Prasanna Konde - Cybersecurity Portfolio
%cWelcome to my professional portfolio! 
Built with modern web technologies and security best practices.

🔒 Security Features:
• Content Security Policy
• XSS Protection
• Secure Headers
• Input Validation

💻 Tech Stack:
• HTML5 Semantic Markup
• CSS3 with Custom Properties
• Vanilla JavaScript (ES6+)
• Responsive Design
• Accessibility Compliant

📧 Contact: prasanna.konde@email.com
🔗 LinkedIn: linkedin.com/in/durga-prasanna-konde
`, 
'color: #00d4ff; font-size: 16px; font-weight: bold;',
'color: #b8c5d6; font-size: 12px;'
);

// Export functions for testing (if needed)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        initNavigation,
        initScrollAnimations,
        initContactForm,
        isValidEmail,
        showNotification
    };
}