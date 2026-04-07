// Smooth scrolling for navigation links
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

// Navbar scroll effect and hide/show on direction
let lastScrollY = window.scrollY;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY && currentScrollY > 100) {
        navbar.classList.add('hidden');
    } else {
        navbar.classList.remove('hidden');
    }

    if (currentScrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

    lastScrollY = currentScrollY;
});

// Active navigation link on scroll
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-menu a');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - sectionHeight / 3) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// Intersection Observer for scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-up');
        }
    });
}, observerOptions);

// Observe all sections for animation
document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});

// Mobile menu toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Close mobile menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// Progress bar animation on scroll
const progressBars = document.querySelectorAll('.progress');

const progressObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const progressBar = entry.target;
            const width = progressBar.style.width;
            progressBar.style.width = '0';
            setTimeout(() => {
                progressBar.style.width = width;
            }, 100);
        }
    });
}, { threshold: 0.5 });

progressBars.forEach(bar => {
    progressObserver.observe(bar);
});

// Pricing plan selection
function selectPlan(planName) {
    const selectedPlanInput = document.getElementById('selectedPlan');
    selectedPlanInput.value = planName;

    // Scroll to contact section
    const contactSection = document.getElementById('contact');
    contactSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });

    // Add visual feedback
    const pricingCards = document.querySelectorAll('.pricing-card');
    pricingCards.forEach(card => {
        card.classList.remove('selected');
    });

    const selectedCard = document.querySelector(`[data-plan="${planName}"]`);
    if (selectedCard) {
        selectedCard.classList.add('selected');
    }
}

// Form submission (you can integrate with a backend service)
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // Get form data
    const formData = new FormData(this);
    const data = Object.fromEntries(formData);

    // Here you would typically send the data to a server
    // For now, we'll just show an alert
    alert(`Thank you for your message, ${data.name}! We'll get back to you soon regarding your ${data.selectedPlan || 'inquiry'}.`);

    // Reset form
    this.reset();
});

// Typing effect for hero subtitle (optional enhancement)
const heroSubtitle = document.querySelector('.hero-subtitle');
let originalText = '';
let isTyping = false;

if (heroSubtitle) {
    originalText = heroSubtitle.textContent;
}

function typeWriter(text, i) {
    if (!heroSubtitle) return;
    if (i < text.length) {
        heroSubtitle.innerHTML = text.substring(0, i + 1) + '<span class="cursor">|</span>';
        setTimeout(() => typeWriter(text, i + 1), 100);
    } else {
        heroSubtitle.innerHTML = text;
        setTimeout(() => {
            if (!isTyping) {
                eraseText(text);
            }
        }, 2000);
    }
}

function eraseText(text) {
    if (!heroSubtitle) return;
    if (text.length > 0) {
        heroSubtitle.innerHTML = text.substring(0, text.length - 1) + '<span class="cursor">|</span>';
        setTimeout(() => eraseText(text.substring(0, text.length - 1)), 50);
    } else {
        setTimeout(() => typeWriter(originalText, 0), 500);
    }
}

// Start typing effect after page load
window.addEventListener('load', () => {
    if (!heroSubtitle) return;
    setTimeout(() => {
        typeWriter(originalText, 0);
    }, 1000);
});

// Parallax effect for floating shapes and particles
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const shapes = document.querySelectorAll('.shape');
    const particles = document.querySelectorAll('.particle');

    shapes.forEach((shape, index) => {
        const rate = (index + 1) * 0.5;
        shape.style.transform = `translateY(${scrolled * rate * 0.1}px)`;
    });

    particles.forEach((particle, index) => {
        const rate = (index % 3 + 1) * 0.3;
        particle.style.transform = `translateY(${scrolled * rate * 0.05}px) translateX(${Math.sin(scrolled * 0.001 + index) * 10}px)`;
    });
});

// Add cursor style for typing effect
const style = document.createElement('style');
style.textContent = `
    .cursor {
        animation: blink 1s infinite;
    }
    @keyframes blink {
        0%, 50% { opacity: 1; }
        51%, 100% { opacity: 0; }
    }
`;
document.head.appendChild(style);

const portfolioEndpoint = 'https://raw.githubusercontent.com/atawaris55/ata-portfolio/main/posters.json';

function renderPortfolio(items) {
    const portfolioGrid = document.getElementById('portfolioGrid');
    if (!portfolioGrid) return;

    portfolioGrid.innerHTML = items.map(item => `
        <div class="portfolio-item">
            <div class="portfolio-image">
                <img src="${item.image}" alt="${item.title}">
                <div class="portfolio-overlay">
                    <span class="category">${item.category}</span>
                    <a href="${item.link && item.link !== '#' ? item.link : item.image}" class="view-project" target="_blank" rel="noopener noreferrer">View Project</a>
                </div>
            </div>
        </div>
    `).join('');

    initPortfolioHoverEffects();
}

function initPortfolioHoverEffects() {
    document.querySelectorAll('.portfolio-item').forEach(item => {
        item.addEventListener('mouseenter', () => {
            item.style.transform = 'scale(1.05) rotate(1deg)';
        });

        item.addEventListener('mouseleave', () => {
            item.style.transform = 'scale(1) rotate(0deg)';
        });
    });
}

function loadPortfolio() {
    fetch(portfolioEndpoint)
        .then(response => {
            if (!response.ok) {
                throw new Error('Could not load portfolio data');
            }
            return response.json();
        })
        .then(data => {
            if (Array.isArray(data) && data.length) {
                renderPortfolio(data);
            } else {
                throw new Error('No portfolio items found');
            }
        })
        .catch(() => {
            renderPortfolio([
                {
                    title: 'Poster Design',
                    category: 'Poster',
                    image: 'https://via.placeholder.com/400x300/1a1a2e/00d4ff?text=Poster+Design',
                    link: '#'
                },
                {
                    title: 'Banner Design',
                    category: 'Banner',
                    image: 'https://via.placeholder.com/400x300/1a1a2e/00d4ff?text=Banner+Design',
                    link: '#'
                },
                {
                    title: 'Brand Identity',
                    category: 'Branding',
                    image: 'https://via.placeholder.com/400x300/1a1a2e/00d4ff?text=Branding+Design',
                    link: '#'
                }
            ]);
        });
}

window.addEventListener('load', loadPortfolio);

// Portfolio hover effect enhancement
initPortfolioHoverEffects();

// Skill card hover effects
document.querySelectorAll('.skill-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-10px) rotateY(5deg)';
        card.style.boxShadow = '0 20px 40px rgba(0, 212, 255, 0.3)';
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0) rotateY(0deg)';
        card.style.boxShadow = 'none';
    });
});

// Testimonial card slide effect
document.querySelectorAll('.testimonial-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateX(10px)';
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateX(0)';
    });
});

// Add loading animation
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// CSS for loading animation
const loadingStyle = document.createElement('style');
loadingStyle.textContent = `
    body {
        opacity: 0;
        transition: opacity 0.5s ease;
    }
    body.loaded {
        opacity: 1;
    }
`;
document.head.appendChild(loadingStyle);