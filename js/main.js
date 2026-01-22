// Smooth reveal on scroll
const elements = document.querySelectorAll('.card, .container');

const reveal = () => {
  elements.forEach(el => {
    const position = el.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;

    if (position < screenHeight - 100) {
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
    }
  });
};

window.addEventListener('scroll', reveal);
window.addEventListener('load', reveal);
