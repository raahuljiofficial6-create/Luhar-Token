// smooth reveal animation
const cards = document.querySelectorAll('.card');

const reveal = () => {
  cards.forEach(card => {
    const top = card.getBoundingClientRect().top;
    if(top < window.innerHeight - 100){
      card.style.opacity = 1;
      card.style.transform = 'translateY(0)';
    }
  });
};

cards.forEach(c=>{
  c.style.opacity=0;
  c.style.transform='translateY(40px)';
  c.style.transition='0.8s';
});

window.addEventListener('scroll',reveal);
window.addEventListener('load',reveal);
