// Smooth scrolling for navigation links
document.querySelectorAll('nav ul li a').forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault();
    const targetId = link.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Add delay and smooth scroll for "Get in Touch" button
const getInTouchButton = document.querySelector('.btn');
getInTouchButton.addEventListener('click', event => {
  event.preventDefault();
  const targetId = getInTouchButton.getAttribute('href').substring(1);
  const targetElement = document.getElementById(targetId);
  if (targetElement) {
    setTimeout(() => {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }, 300); // 300ms delay
  }
});

// Form submission alert
const contactForm = document.querySelector('#contact form');
contactForm.addEventListener('submit', event => {
  event.preventDefault();
  alert('Thank you for reaching out! I will get back to you soon.');
  contactForm.reset();
});

// Toggle scrolled class on header when scrolling
const header = document.querySelector('header');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    header.classList.add('scrolled'); // Add the scrolled class when scrolling down
  } else {
    header.classList.remove('scrolled'); // Remove the scrolled class when at the top
  }
});

// Repetitive typewriter effect for the hero section
const heroHeading = document.querySelector('#hero .type-1 h1');
const text = "Hi, I'm Akshat Tiwari";

function typeWriter(index = 0) {
  if (index < text.length) {
    heroHeading.textContent += text.charAt(index);
    setTimeout(() => typeWriter(index + 1), 100); // Adjust typing speed here
  } else {
    setTimeout(() => {
      heroHeading.textContent = ''; // Clear the text
      typeWriter(); // Restart the typing effect
    }, 1000); // Pause before restarting
  }
}

typeWriter();
