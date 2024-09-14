import { menuClass } from './mobileMenu';

const anchors = document.querySelectorAll('a[href*="#"]');
for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    document.body.classList.remove('modal-open');
    menuClass.classList.toggle('active');
    e.preventDefault();

    const blockID = anchor.getAttribute('href').substr(1);
    const targetElement = document.getElementById(blockID);

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  });
}
