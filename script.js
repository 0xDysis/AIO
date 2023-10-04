let i = 0;
let textArray = [
  "In shadows deep, we drift and sway. Assimilate into oblivion's fray. A dance absurd, yet full of grace. We find our place in this boundless space.",
  "assimilate into oblivion, assimilate into oblivion, assimilate into oblivion, assimilate into oblivion, assimilate into oblivion, assimilate into oblivion"
];
let currentTextIndex = 0;
let speed = 100;

function typeText() {
  let text = textArray[currentTextIndex];
  if (i < text.length) {
    let currentChar = text.charAt(i);
    document.getElementById("typed-text").innerHTML += currentChar;
    if (currentChar === '.' || currentChar === ',') {
      document.getElementById("typed-text").innerHTML += '<br>';
    }
    i++;
    setTimeout(typeText, speed);
  } else {
    i = 0;
    currentTextIndex++;
    if (currentTextIndex >= textArray.length) {
      // Redirect to another webpage
      window.location.href = "page2.html";
    } else {
      document.getElementById("typed-text").innerHTML = "";
      setTimeout(typeText, speed);
    }
  }
}

document.addEventListener("DOMContentLoaded", function() {
  typeText();
});