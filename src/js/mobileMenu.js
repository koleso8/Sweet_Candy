const burgerNav = document.querySelector('.burgerNav');
const close = document.querySelector('.mobile_menu_close');
const menuClass = document.querySelector('.mobile_menu_box');

burgerNav.addEventListener('click', () => {
  menuClass.classList.toggle('active');
  document.body.classList.add('modal-open');
});
close.addEventListener('click', () => {
  document.body.classList.remove('modal-open');
  menuClass.classList.toggle('active');
});
