const body = document.querySelector(".body");

export class Keyboard {
    constructor(language = 'en') {
        this.language = language;
        this.isCapsLockOn = false;
        this.isShiftOn = false;
        this.currentKeys = this.keys[this.language];
    }

    keys = {
        en: ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace',
            'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'Delete',
            'CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", 'Enter',
            'Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', 'ArrowUp', 'Shift2',
            'Control', 'Meta', 'Alt', ' ', 'Alt', 'ArrowLeft', 'ArrowDown', 'ArrowRight', 'Control'],
        ru: ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace',
            'Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '\\', 'Delete',
            'CapsLock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', "э", 'Enter',
            'Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', 'ArrowUp', 'Shift2',
            'Control', 'Meta', 'Alt', ' ', 'Alt', 'ArrowLeft', 'ArrowDown', 'ArrowRight', 'Control'],
    };

    pressKey(key) {
        const textarea = document.querySelector('.textarea');
        switch (key) {
            case 'Lang':
                this.language = this.language === 'en' ? 'ru' : 'en';
                this.currentKeys = this.keys[this.language];
                break;
            case 'Backspace':
                textarea.value = textarea.value.slice(0, -1);
                break;
            case 'Space':
                textarea.value += ' ';
                break;
            case 'CapsLock':
                this.isCapsLockOn = !this.isCapsLockOn;

                document.querySelectorAll('.key-button').forEach(el => {
                    if (el.textContent.length === 1) {
                        el.textContent = this.isCapsLockOn ? el.textContent.toUpperCase() : el.textContent.toLowerCase();
                    }
                })

                document.querySelector('.key-caps').classList.toggle('key-caps--active');
                break;
            case 'Enter':
                textarea.value += '\n';
                break;
            case 'Tab':
                textarea.value += '\t';
                break;
            case 'Shift':
                break;
            case 'Delete':
                textarea.value = textarea.value.slice(0, textarea.selectionEnd) + textarea.value.slice(textarea.selectionEnd, 1); // TODO
                break;
            case 'ArrowLeft':
                textarea.setSelectionRange(textarea.selectionStart - 1, textarea.selectionStart - 1);
                break;
            case 'ArrowRight':
                textarea.setSelectionRange(textarea.selectionStart + 1, textarea.selectionStart + 1);
                break;
            case 'ArrowUp':
                break;
            case 'Alt':
                break;

            default:
                textarea.value += this.isCapsLockOn || this.isShiftOn ? key.toUpperCase() : key.toLowerCase();
        }
        textarea.focus();
    }

    init() {
        const board = document.createElement('div');
        board.className = 'board';
        body.appendChild(board);

        this.currentKeys.forEach(element => {
            const keyButton = document.createElement('div');
            keyButton.className = 'key-button';
            const clearFix = document.createElement('div');
            clearFix.className = 'clearfix';

            switch (element) {
                case 'Backspace':
                    keyButton.classList.add('key-long');
                    keyButton.textContent = 'Backspace';
                    board.appendChild(keyButton);
                    board.appendChild(clearFix);
                    break;
                case 'Delete':
                    keyButton.textContent = element;
                    board.appendChild(keyButton);
                    board.appendChild(clearFix);
                    break;
                case 'CapsLock':
                    keyButton.classList.add('key-caps');
                    keyButton.textContent = element;
                    board.appendChild(keyButton);
                    break;
                case 'Enter':
                    keyButton.classList.add('key-long');
                    keyButton.textContent = element;
                    board.appendChild(keyButton);
                    board.appendChild(clearFix);
                    break;
                case 'Shift':
                    keyButton.classList.add('key-long');
                    keyButton.textContent = element;
                    board.appendChild(keyButton);
                    break;
                case 'Shift2':
                    keyButton.classList.add('key-long');
                    keyButton.textContent = element;
                    board.appendChild(keyButton);
                    board.appendChild(clearFix);
                    break;
                case ' ':
                    keyButton.classList.add('key-space');
                    keyButton.textContent = ' ';
                    board.appendChild(keyButton);
                    break;
                case 'ArrowUp':
                    keyButton.textContent = '';
                    keyButton.classList.add('key-arrow-up');
                    board.appendChild(keyButton);
                    break;
                case 'ArrowDown':
                    keyButton.textContent = '';
                    keyButton.classList.add('key-arrow-down');
                    board.appendChild(keyButton);
                    break;
                case 'ArrowLeft':
                    keyButton.textContent = '';
                    keyButton.classList.add('key-arrow-left');
                    board.appendChild(keyButton);
                    break;
                case 'ArrowRight':
                    keyButton.textContent = '';
                    keyButton.classList.add('key-arrow-right');
                    board.appendChild(keyButton);
                    break;
                case 'Control':
                    keyButton.textContent = 'Ctrl';
                    board.appendChild(keyButton);
                    break;

                default:
                    keyButton.textContent = element;
                    board.appendChild(keyButton);
                    break;
            }
            keyButton.dataset.name = element.toLowerCase();
            keyButton.addEventListener('click', () => this.pressKey(element));
        });
    }

}