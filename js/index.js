import { Keyboard } from './keyboard.js';

const body = document.querySelector(".body");
const textArea = document.createElement('textarea');

let lang = localStorage.getItem('lang') === null? 'en' : localStorage.getItem('lang');
const keyboard = new Keyboard(lang);

textArea.rows = 8;
textArea.cols = 79;
textArea.className = 'textarea';
textArea.value = 'Wake Up Neo...';
// textArea.readOnly = true;
body.appendChild(textArea);

let pressedKeys = [];

document.onkeydown = function (event) {

    if (event.key === 'CapsLock') keyboard.pressKey(event.key);

    if (event.key === 'Alt') {
        if (pressedKeys.indexOf('Alt') >= 0) true;
        else pressedKeys.push('Alt');
    }
    if (event.key === 'Shift') {
        keyboard.pressKey(event.key);
        if (pressedKeys != []) {
            if (pressedKeys.indexOf('Shift') >= 0) true;
            else pressedKeys.push('Shift');
        }
    }

    if (pressedKeys.toString() === 'Alt,Shift' || pressedKeys.toString() === 'Shift,Alt') {
        
        keyboard.pressKey('Lang');
        localStorage.setItem('lang', keyboard.language);
        pressedKeys = [];
        keyboard.reload();
    }
    document.querySelector(`.key-button[data-name='${event.key.toLowerCase()}']`).classList.toggle('active');
}

document.onkeyup = function (event) {
    if (event.key === 'Shift') {
        keyboard.reload();
    }
    document.querySelectorAll('.key-button').forEach((e) => e.classList.remove('active'));
}

document.onmousedown = function (event) {
    if (event.target.classList.contains('key-button')) event.target.classList.toggle('active');
}

document.onmouseup = function () {
    document.querySelectorAll('.key-button').forEach((e) => e.classList.remove('active'));
}

keyboard.init();

