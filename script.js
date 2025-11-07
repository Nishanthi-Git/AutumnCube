const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');

  menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active'); // animate the 3 lines
    navLinks.classList.toggle('active');   // show/hide menu
  });