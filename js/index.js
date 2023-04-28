import { Keyboard } from './keyboard.js';

const body = document.querySelector(".body");
const textArea = document.createElement('textarea');
textArea.rows = 8;
textArea.cols = 79;
textArea.className = 'textarea';
textArea.value = 'Wake Up Neo...';

body.appendChild(textArea);

const keyboard = new Keyboard('en');
keyboard.init();
