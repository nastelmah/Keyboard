import { array } from './data.js';

console.log(array);

const body = document.querySelector('body');

const textarea = document.createElement('textarea');
textarea.classList = 'textarea';
textarea.style.width = '820px';
textarea.style.height = '125px';

const keyboard = document.createElement('div');
keyboard.classList = 'keyboard';

localStorage.setItem('language', 'en');

const language = localStorage.getItem('language');

if (language === 'ru') {
  // Russian
  for (let i = 0; i < array.length; i++) {
    const element = document.createElement('div');
    const textRu = document.createElement('span');
    textRu.classList = 'text';
    const leftTopText = document.createElement('span');
    leftTopText.classList = 'leftTopText';

    if (array[i].leftTopText.length) {
      leftTopText.textContent = array[i].leftTopText;
      textRu.textContent = array[i].textRu;
      element.append(leftTopText);
      element.append(textRu);
    } else {
      textRu.textContent = array[i].textRu;
      element.append(textRu);
    }

    element.style.width = array[i].width;
    element.style.height = array[i].height;
    element.style.backgroundColor = array[i].backgroundColor;
    element.style.color = array[i].color;
    element.style.padding = array[i].padding;
    element.style.borderRadius = array[i].borderRadius;
    element.style.fontSize = array[i].fontSize;

    element.classList.add('key');
    element.setAttribute('data-key', array[i].textRu);
    element.addEventListener('click', (e) => {
      console.log('Event click', e);
    });
    keyboard.append(element);
  }
} else {
  // English
  for (let i = 0; i < array.length; i++) {
    const element = document.createElement('div');
    const textEn = document.createElement('span');
    textEn.classList = 'text';
    const leftTopText = document.createElement('span');
    leftTopText.classList = 'leftTopText';

    if (array[i].leftTopText.length) {
      leftTopText.textContent = array[i].leftTopText;
      textEn.textContent = array[i].textEn;
      element.append(leftTopText);
      element.append(textEn);
    } else {
      textEn.textContent = array[i].textEn;
      element.append(textEn);
    }

    element.style.width = array[i].width;
    element.style.height = array[i].height;
    element.style.backgroundColor = array[i].backgroundColor;
    element.style.color = array[i].color;
    element.style.padding = array[i].padding;
    element.style.borderRadius = array[i].borderRadius;
    element.style.fontSize = array[i].fontSize;

    element.classList.add('key');
    element.setAttribute('data-key', array[i].textEn);
    element.addEventListener('click', (e) => {
      console.log('Event click', e);
    });
    keyboard.append(element);
  }
}

document.onkeydown = function onKeyDown(e) {
  console.log('Event onkeyup', e.key.toLowerCase());

  const arrayKey = document.querySelectorAll('.key');
  for (let i = 0; i < arrayKey.length; i++) {
    const element = arrayKey[i];
    if (element.dataset.key.toLowerCase() === e.key.toLowerCase()) {
      console.log('if', element);
      element.classList.add('active');
      setTimeout(() => {
        element.classList.remove('active');
      }, 200);
    }
  }
};

const container = document.createElement('section');
container.classList = 'container';

if (body) {
  body.prepend(container);
  container.prepend(textarea);
  container.append(keyboard);
}
