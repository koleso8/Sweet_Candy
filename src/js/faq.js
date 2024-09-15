import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';
import svg from '../img/icons/icons.svg';

const refs = {
  listEl: document.querySelector('.faq-list'),
};

const list = [
  {
    title: 'Can I play offline?',
    text: 'Yes, the game can be played without an internet connection.',
  },
  {
    title: 'What are the daily rewards?',
    text: 'Log in daily to receive free bonuses and rewards.',
  },
  {
    title: 'How can I compete with friends?',
    text: 'Connect the game to social media to compare scores with friends.',
  },
  {
    title: 'Are there special events?',
    text: 'Yes, participate in limited-time events for exclusive rewards.',
  },
  {
    title: 'Is the game suitable for kids?',
    text: 'Yes, it`s family-friendly and suitable for all ages.',
  },
  {
    title: 'What devices are supported?',
    text: 'Available on both iOS and Android devices.',
  },
  {
    title: 'How often are updates?',
    text: 'Regular updates bring new levels and content.',
  },
  {
    title: 'Can I sync my progress across devices?',
    text: 'Yes, connect to your social media account to save and sync progress.',
  },
];

function listItemTemplay(item) {
  const title = item.title;
  const text = item.text;
  return `
    <li class="ac" id="ac">
    <h3 class="ac-header">
    <button type="button" class="ac-trigger" id="ac-header">
    ${title}
    <span class="circle-faq">
    <p class="icon-faq " width="12" height="8">
    +
    </p>
    </span>
    </button>
    </h3>
    <div class="ac-panel">
    <p class="ac-text" id="ac-text">
    ${text}
    </p>
    </div>
    </li>
    `;
}

function listItemsTemplay(array) {
  return array.map(listItemTemplay).join('');
}

function renderList(array) {
  const markup = listItemsTemplay(array);
  refs.listEl.insertAdjacentHTML('afterbegin', markup);
}

renderList(list);

new Accordion('.accordion-container', {});
