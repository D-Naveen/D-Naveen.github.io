// ========== HAMBURGER MENU ==========
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

// Close menu when a nav link is clicked
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
  });
});


// ========== ACTIVE NAV LINK ON SCROLL ==========
const sections = document.querySelectorAll('section');
const links = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
  let current = '';

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 80;
    if (window.scrollY >= sectionTop) {
      current = section.getAttribute('id');
    }
  });

  links.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
});


// ========== NAVBAR SHADOW ON SCROLL ==========
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.style.boxShadow = '0 4px 20px rgba(0, 180, 216, 0.1)';
  } else {
    navbar.style.boxShadow = 'none';
  }
});


// ========== FADE-IN ANIMATION ON SCROLL ==========
const fadeElements = document.querySelectorAll(
  '.timeline-content, .project-card, .skill-card, .cert-card, .experience-card, .about-text'
);

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target); // animate only once
    }
  });
}, { threshold: 0.15 });

fadeElements.forEach(el => {
  el.classList.add('fade-in');
  observer.observe(el);
});


// ========== CONTACT FORM ==========
const form = document.querySelector('.contact-form');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const name = form.querySelector('input[type="text"]').value.trim();
  const email = form.querySelector('input[type="email"]').value.trim();
  const message = form.querySelector('textarea').value.trim();

  if (!name || !email || !message) {
    showToast('Please fill in all fields.', 'error');
    return;
  }

  // Simulate sending (replace with EmailJS or backend later)
  showToast(`Thanks ${name}! Your message has been sent.`, 'success');
  form.reset();
});


// ========== TOAST NOTIFICATION ==========
function showToast(message, type) {
  const existing = document.querySelector('.toast');
  if (existing) existing.remove();

  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.textContent = message;
  document.body.appendChild(toast);

  setTimeout(() => toast.classList.add('show'), 50);
  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 400);
  }, 3000);
}