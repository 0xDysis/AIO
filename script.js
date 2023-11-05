let i = 0;
let textArray = [
  "Time ceaselessly flows through our fingers. Like a river meandering through the landscape, it carves its path, voraciously devouring each instant, leaving memories warped and distorted, disfiguring the faces of those we love. Eternal 0blivion awaits us all, from inception, the first heartbeat echoes a relentless march to 0blivion, the omnipresent static noise of 0blivion that permeates every fraction of every iota of existence. We all feel it. it reverberates through our bones through every crevice and marrow. and yet, when faced with this chimera, this unrelenting force. we find within ourselves,  the will. for seconds, for minutes, for hours, for days, for years, we find the will, the will to persist, it is 0blivion that defines us, it is 0blivion which allows us to be more than mere echoes in the void, from the same void in which we materialized, we shall return. Assimilate into 0blivion.",
  "assimilate into oblivion, assimilate into oblivion, assimilate into oblivion, assimilate into oblivion, assimilate into oblivion, assimilate into oblivion, assimilate into oblivion, assimilate into oblivion, assimilate into oblivion, assimilate into oblivion, assimilate into oblivion, assimilate into oblivion, assimilate into oblivion, assimilate into oblivion, assimilate into oblivion, assimilate into oblivion, assimilate into oblivion, assimilate into oblivion, assimilate into oblivion, assimilate into oblivion, assimilate into oblivion, assimilate into oblivion, assimilate into oblivion, assimilate into oblivion, assimilate into oblivion, assimilate into oblivion, assimilate into oblivion, assimilate into oblivion, assimilate into oblivion, assimilate into oblivion, assimilate into oblivion, assimilate into oblivion, assimilate into oblivion, assimilate into oblivion, assimilate into oblivion, assimilate into oblivion, assimilate into oblivion, assimilate into oblivion, assimilate into oblivion, assimilate into oblivion, assimilate into oblivion, assimilate into oblivion, "
];
let currentTextIndex = 0;
let speed = 0.1;

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
