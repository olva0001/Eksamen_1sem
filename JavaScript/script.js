document.addEventListener('DOMContentLoaded', function() {
    const rows = document.querySelectorAll('.row_1, .row_2, .row_3, .row_4, .row_5');
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          observer.unobserve(entry.target); // Stop observing the element after adding the class
        }
      });
    }, { threshold: 0.1 });
  
    rows.forEach(row => {
      observer.observe(row);
    });
  });