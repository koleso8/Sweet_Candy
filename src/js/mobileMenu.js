const burgerNav = document.querySelector('.burgerNav');
const close = document.querySelector('.mobile_menu_close');
export const menuClass = document.querySelector('.mobile_menu_box');

// for (let anchor of anchors) {
//   anchor.addEventListener('click');
//   document.body.classList.remove('modal-open');
//   menuClass.classList.toggle('active');
// }

burgerNav.addEventListener('click', () => {
  menuClass.classList.toggle('active');
  document.body.classList.add('modal-open');
});
close.addEventListener('click', () => {
  document.body.classList.remove('modal-open');
  menuClass.classList.toggle('active');
});
