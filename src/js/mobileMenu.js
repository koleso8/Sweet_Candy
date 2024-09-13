const burgerNav = document.querySelector('.burgerNav');
const close = document.querySelector('.mobile_menu_close');
const menuClass = document.querySelector('.mobile_menu_box');

burgerNav.addEventListener('click', () => menuClass.classList.toggle('active'));
close.addEventListener('click', () => menuClass.classList.toggle('active'));
