const characters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
  '0',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '~',
  '`',
  '!',
  '@',
  '#',
  '$',
  '%',
  '^',
  '&',
  '*',
  '(',
  ')',
  '_',
  '-',
  '+',
  '=',
  '{',
  '[',
  '}',
  ']',
  ',',
  '|',
  ':',
  ';',
  '<',
  '>',
  '.',
  '?',
  '/',
];

password1El = document.querySelector('#password1');
password2El = document.querySelector('#password2');

function render() {
  password1El.textContent = generatePassword();
  password2El.textContent = generatePassword();
}

function randomNumber() {
  return Math.floor(Math.random() * characters.length);
}

function generatePassword() {
  let string = '';

  for (let i = 0; i < 17; i++) {
    string = string + characters[randomNumber()];
  }

  return string;
}
