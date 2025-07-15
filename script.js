document.addEventListener('DOMContentLoaded', () => {
  const burgerMenu = document.querySelector('.burger-menu');
  const nav = document.querySelector('.nav');

  if (burgerMenu && nav) {
    burgerMenu.addEventListener('click', () => {
      nav.classList.toggle('active');
    });
  }
});
