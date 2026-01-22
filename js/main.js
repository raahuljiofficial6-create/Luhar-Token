const reveal = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {
  reveal.forEach(el => {
    if (el.getBoundingClientRect().top < window.innerHeight - 100) {
      el.classList.add("show");
    }
  });
});
