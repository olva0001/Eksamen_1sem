
/* forside rows præsentation */

document.addEventListener('DOMContentLoaded', function() {
  const rows = document.querySelectorAll('.row');
  
  function handleIntersection(entries, observer) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        observer.unobserve(entry.target);
      }
    });
  }

  function initObserver() {
    const observer = new IntersectionObserver(handleIntersection, { threshold: 0.1 });
    rows.forEach(row => {
      observer.observe(row);
    });
  }

  function checkScreenSize() {
    if (window.innerWidth > 768) {
      rows.forEach(row => row.classList.remove('in-view'));
      initObserver();
    } else {
      rows.forEach(row => {
        row.classList.add('in-view');
      });
    }
  }

  checkScreenSize();
  window.addEventListener('resize', checkScreenSize);
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