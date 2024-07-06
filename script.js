document.addEventListener('DOMContentLoaded', () => {
  const keys = document.querySelectorAll('.key');
  const clickSound = new Audio('audio/click.mp3');
  const bgColor = 'yellow'; // Background color
  const keyMap = {
      'CapsLock': '.capslock', 'Backspace': '.backspace', 'Tab': '.tab', 'Enter': '.enter',
      'Shift': '.lshift, .rshift', 'Control': '.lctrl, .rctrl', 'Alt': '.lalt, .ralt', 'Meta': '.win',
      'Insert': '.ins', 'Delete': '.del', 'Home': '.home', 'End': '.end', 'PageUp': '.pageup',
      'PageDown': '.pagedown', 'ArrowUp': '.up', 'ArrowDown': '.down', 'ArrowLeft': '.left',
      'ArrowRight': '.right'
  };

  window.addEventListener('keydown', (e) => {
      if (keyMap[e.key]) {
          document.querySelectorAll(keyMap[e.key]).forEach(key => key.style.backgroundColor = bgColor);
          clickSound.play();
          console.log(`${e.key} is pressed`);
      }
  });

  const keyMapPress = {
      '`': 0, '1': 1, '2': 2, '3': 3, '4': 4, '5': 5, '6': 6, '7': 7, '8': 8, '9': 9, '0': 10,
      '-': 11, '=': 12, 'q': 15, 'Q': 15, 'w': 16, 'W': 16, 'e': 17, 'E': 17, 'r': 18, 'R': 18,
      't': 19, 'T': 19, 'y': 20, 'Y': 20, 'u': 21, 'U': 21, 'i': 22, 'I': 22, 'o': 23, 'O': 23,
      'p': 24, 'P': 24, '[': 25, ']': 26, '\\': 27, 'a': 29, 'A': 29, 's': 30, 'S': 30, 'd': 31,
      'D': 31, 'f': 32, 'F': 32, 'g': 33, 'G': 33, 'h': 34, 'H': 34, 'j': 35, 'J': 35, 'k': 36,
      'K': 36, 'l': 37, 'L': 37, ';': 38, "'": 39, 'z': 42, 'Z': 42, 'x': 43, 'X': 43, 'c': 44,
      'C': 44, 'v': 45, 'V': 45, 'b': 46, 'B': 46, 'n': 47, 'N': 47, 'm': 48, 'M': 48, ',': 49,
      '.': 50, '/': 51, ' ': 56
  };

  window.addEventListener('keypress', (e) => {
      if (keyMapPress[e.key] !== undefined) {
          keys[keyMapPress[e.key]].style.backgroundColor = bgColor;
          clickSound.play();
      } else {
          console.log('Invalid Key');
      }
  });

  const fullscreenBtn = document.getElementById('fullscreenBtn');
  const exitFullscreenBtn = document.getElementById('exitFullscreenBtn');

  fullscreenBtn.addEventListener('click', () => {
      if (!document.fullscreenElement) {
          document.documentElement.requestFullscreen();
          fullscreenBtn.style.display = 'none';
          exitFullscreenBtn.style.display = 'block';
      }
  });

  exitFullscreenBtn.addEventListener('click', () => {
      if (document.exitFullscreen) {
          document.exitFullscreen();
          exitFullscreenBtn.style.display = 'none';
          fullscreenBtn.style.display = 'block';
      }
  });
});
