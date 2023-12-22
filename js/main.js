const hamburger = document.querySelector('#open-menu');
const closeIcon = document.querySelector('#close-menu');
const navMenu = document.querySelector('.nav-menu');

function openMenu() {
  navMenu.classList.add('open');
  hamburger.style.display = 'none';
  closeIcon.style.display = 'block';
}

function closeMenu() {
  navMenu.classList.remove('open');
  hamburger.style.display = 'block';
  closeIcon.style.display = 'none';
}

hamburger.addEventListener('click', openMenu);
closeIcon.addEventListener('click', closeMenu);
