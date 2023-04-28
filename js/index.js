import { Keyboard } from './keyboard.js';

const body = document.querySelector(".body");
const textArea = document.createElement('textarea');
const keyboard = new Keyboard('en');

textArea.rows = 8;
textArea.cols = 79;
textArea.className = 'textarea';
textArea.value = 'Wake Up Neo...';
body.appendChild(textArea);

let pressedKeys = [];

document.onkeydown = function(event) {
    document.querySelector(`.key-button[data-name='${event.key}']`).classList.toggle('active');
    if (event.key === 'CapsLock') keyboard.pressKey(event.key);

    if (event.key === 'Alt') {
        if (pressedKeys.indexOf('Alt') >= 0) true;
        else pressedKeys.push('Alt');
    }
    if (event.key === 'Shift') {
        if (pressedKeys.indexOf('Shift') >= 0) true;
        else pressedKeys.push('Shift');
    }

    if (pressedKeys.toString() === 'Alt,Shift') {
        keyboard.pressKey('Lang');
        pressedKeys = [];

    }

}

document.onkeyup = function() {
    document.querySelectorAll('.key-button').forEach((e) => e.classList.remove('active'));
}

keyboard.init();

