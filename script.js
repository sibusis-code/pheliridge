// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close menu when a link is clicked
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Contact Form Handler
document.getElementById('contactForm').addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(e.target);
    const data = {
        name: document.querySelector('input[placeholder="Your Name"]').value,
        email: document.querySelector('input[placeholder="Your Email"]').value,
        subject: document.querySelector('input[placeholder="Subject"]').value,
        message: document.querySelector('textarea[placeholder="Your Message"]').value
    };

    // Basic validation
    if (data.name && data.email && data.subject && data.message) {
        // Show success message
        showNotification('Thank you for your message! We will get back to you soon.', 'success');
        
        // Reset form
        e.target.reset();
        
        // Here you would typically send the data to a backend service
        console.log('Form data:', data);
    } else {
        showNotification('Please fill in all fields.', 'error');
    }
});

// Notification Function
function showNotification(message, type) {
    const notification = document.createElement('div');
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 15px 25px;
        background: ${type === 'success' ? '#27AE60' : '#E74C3C'};
        color: white;
        border-radius: 5px;
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
        z-index: 10000;
        animation: slideIn 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Add animations
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeIn 0.6s ease forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Add fade-in animation to cards
document.querySelectorAll('.service-card, .testimonial-card, .blog-card').forEach(card => {
    card.style.opacity = '0';
    observer.observe(card);
});

// Add fade-in animation to style
const fadeInStyle = document.createElement('style');
fadeInStyle.textContent = `
    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(fadeInStyle);

// Navbar shadow on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 10) {
        navbar.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.05)';
    }
});

// Back to Top Button
const backToTop = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
        backToTop.classList.add('show');
    } else {
        backToTop.classList.remove('show');
    }
});

backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Initialize
console.log('Pheliridge website loaded successfully!');
