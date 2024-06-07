
/* Forside tema præsentationer */

document.addEventListener('DOMContentLoaded', function() {
  const rows = document.querySelectorAll('.row_1, .row_2, .row_3, .row_4, .row_5');
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  rows.forEach(row => {
    observer.observe(row);
  });
});

/* Lottiefile */

document.addEventListener('scroll', function() {
  const lottieContainer = document.querySelector('.lottie_container');
  const lottiePlayer = document.querySelector('lottie-player');
  const containerHeight = lottieContainer.offsetHeight;
  const scrollY = window.scrollY;
  const windowHeight = window.innerHeight;

  if (scrollY < containerHeight) {
    const opacity = 1 - (scrollY / (containerHeight / 2)); // Adjust the denominator for a smoother fade
    lottiePlayer.style.opacity = opacity;
  } else {
    lottiePlayer.style.opacity = 0;
  }
});