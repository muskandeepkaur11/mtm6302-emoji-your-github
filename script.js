const emojis = [
  128512,
  128513,
  128514,
  128515,
  128516,
  128521,
  128525,
  128526,
  128536,
  128540,
  129299,
  128075,
  129302,
  129409
];

const emojiGallery = document.getElementById('emoji-gallery');

emojis.forEach(code => {
  const emojiItem = document.createElement('div');
  emojiItem.className = 'emoji-item';

  const emojiChar = document.createElement('span');
  emojiChar.className = 'emoji-char';
  emojiChar.innerHTML = `&#${code};`;

  const emojiCode = document.createElement('code');
  emojiCode.className = 'emoji-code';
  emojiCode.textContent = code;

  emojiItem.appendChild(emojiChar);
  emojiItem.appendChild(emojiCode);
  emojiGallery.appendChild(emojiItem);
});