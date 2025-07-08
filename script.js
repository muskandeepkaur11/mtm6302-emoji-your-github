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
  129409
];

const gallery = document.getElementById("emoji-gallery");

emojis.forEach(code => {
  const emojiDiv = document.createElement("div");
  emojiDiv.className = "emoji-item";

  const emojiSymbol = document.createElement("span");
  emojiSymbol.className = "emoji-symbol";
  emojiSymbol.innerHTML = `&#${code};`;

  const emojiCode = document.createElement("div");
  emojiCode.className = "emoji-code";
  emojiCode.textContent = code;

  emojiDiv.appendChild(emojiSymbol);
  emojiDiv.appendChild(emojiCode);
  gallery.appendChild(emojiDiv);
});
