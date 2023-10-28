// Store the original text
let originalText;

// Existing code
document.addEventListener('DOMContentLoaded', function() {
  const mainContent = document.getElementById('main-content');
  const words = mainContent.innerText.split(' ');
  const wordLimit = 16;

  let formattedText = '';
  for (let i = 0; i < words.length; i++) {
    formattedText += words[i] + ' ';
    if ((i + 1) % wordLimit === 0) {
      formattedText += '<br><br>';
    }
  }

  mainContent.innerHTML = '<p id="text">' + formattedText + '</p>';

  // Store the original text
  originalText = document.getElementById('text').innerText;

  // Encrypt the text when the page loads
  let encryptedText = encryptA1Z26(originalText);
  document.getElementById('text').innerText = encryptedText;
});

const text = document.querySelector('#text');

function mapRange(value, low1, high1, low2, high2) {
return low2 + (high2 - low2) * (value - low1) / (high1 - low1);
}

function clamp(value, min, max) {
return Math.min(Math.max(value, min), max);
}

window.addEventListener('mousemove', (event) => {
const bounds = text.getBoundingClientRect();
const distance = Math.hypot(
  event.x - (bounds.x + bounds.width * 0.5),
  event.y - (bounds.y + bounds.height * 0.5)
);
const active = clamp(mapRange(distance, 250, 50, 0, 1), 0, 1);
text.style.setProperty("--active", active);
});

// A1Z26 cipher functions
function encryptA1Z26(text) {
  let encryptedText = '';
  for (let i = 0; i < text.length; i++) {
      let charCode = text.toUpperCase().charCodeAt(i);
      if (charCode >= 65 && charCode <= 90) { // A-Z
          encryptedText += (charCode - 64) + '|';
      } else {
          encryptedText += text.charAt(i);
      }
  }
  return encryptedText.slice(0, -1); // Remove trailing pipe
}

// Toggle between encrypted and original text when the screen is clicked
window.addEventListener('click', function() {
  let currentText = document.getElementById('text').innerText;
  if (currentText.includes('|')) { // If the text is encrypted
      document.getElementById('text').innerText = originalText;
  } else { // If the text is original
      let encryptedText = encryptA1Z26(originalText);
      document.getElementById('text').innerText = encryptedText;
  }
});