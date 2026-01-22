const cards = document.querySelectorAll('.card');

const reveal = () => {
  cards.forEach(card=>{
    const pos = card.getBoundingClientRect().top;
    if(pos < window.innerHeight - 120){
      card.style.opacity = 1;
      card.style.transform = 'translateY(0)';
      card.style.transition = '1s ease';
    }
  });
};

window.addEventListener('scroll',reveal);
window.addEventListener('load',reveal);
