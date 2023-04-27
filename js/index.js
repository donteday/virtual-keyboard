const body = document.querySelector(".body");

const Keyboard = {
    // elements: {
    //     board: null,
    // },

    keys: {
        en: ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace',
            'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'Delete',
            'CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", 'Enter',
            'Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', 'ArrowUp', 'Shift2',
            'Control', 'Meta', 'Alt', 'Space', 'Alt', 'ArrowLeft', 'ArrowDown', 'ArrowRight', 'Control'],
    },

    init() {
        const board = document.createElement('div');
        board.className = 'board';
        body.appendChild(board);

        this.keys.en.forEach(element => {
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
                    keyButton.classList.add('key-long');
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
                case 'Space':
                    keyButton.classList.add('key-space');
                    keyButton.textContent = ' ';
                    board.appendChild(keyButton);
                    break;
                case 'ArrowUp':
                    keyButton.textContent = '|';
                    board.appendChild(keyButton);
                    break;
                case 'ArrowDown':
                    keyButton.textContent = '|';
                    board.appendChild(keyButton);
                    break;
                case 'ArrowLeft':
                    keyButton.textContent = '<-';
                    board.appendChild(keyButton);
                    break;
                case 'ArrowRight':
                    keyButton.textContent = '->';
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
        });
    }
}

const textArea = document.createElement('textarea');
textArea.rows = 8;
textArea.cols = 79;
textArea.className = 'textarea';
textArea.value = 'Wake Up Neo...';

body.appendChild(textArea);

Keyboard.init();

