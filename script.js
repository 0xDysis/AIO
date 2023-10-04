let i = 0;
let textArray = [
  "In the vast expanse of existence, time ceaselessly flows through our fingers. Like a river meandering through the landscape, it carves its path, shaping the world around us and leaving indelible marks on the faces of those we hold dear. As we journey through life, Each moment we experience, no matter how profound or fleeting, is instantly reduced to nothingness as it slips into the past. The ephemeral nature of our existence is a stark reminder of the transience of life, and yet, in the face of this seemingly insurmountable chimera, we find within ourselves an unwavering sense of hope. This hope, a beacon of light in the darkness of oblivion, is the very essence of our humanity. It is the driving force that propels us forward, urging us to embrace the unknown and to forge new paths in the ever-changing landscape of time. As we assimilate into the vast expanse of oblivion, we do not merely succumb to the ravages of time; instead, we rise above them, fueled by the indomitable spirit of hope that resides within us. In the face of time's relentless flow, we find solace in the connections we forge with others, the memories we create, and the love we share. These intangible bonds transcend the physical realm, defying the ravages of time and offering us a glimpse of eternity. As we navigate the winding river of existence, we are not merely passive observers, but active participants in the grand tapestry of life. And so, as time inevitably flows through our fingers, we embrace the journey, cherishing each moment and finding solace in the knowledge that, though our lives may be fleeting, the hope that burns within us is eternal. In the end, it is this hope that allows us to assimilate into oblivion, not with fear or despair, but with a sense of purpose and a profound understanding of the beauty and impermanence of our existence.",
  "assimilate into oblivion, assimilate into oblivion, assimilate into oblivion, assimilate into oblivion, assimilate into oblivion, assimilate into oblivion, assimilate into oblivion, assimilate into oblivion, assimilate into oblivion, assimilate into oblivion, assimilate into oblivion, assimilate into oblivion, assimilate into oblivion, assimilate into oblivion, assimilate into oblivion, assimilate into oblivion, assimilate into oblivion, assimilate into oblivion, assimilate into oblivion, assimilate into oblivion, assimilate into oblivion, assimilate into oblivion, assimilate into oblivion, assimilate into oblivion, assimilate into oblivion, assimilate into oblivion, assimilate into oblivion, assimilate into oblivion, assimilate into oblivion, assimilate into oblivion, assimilate into oblivion, assimilate into oblivion, assimilate into oblivion, assimilate into oblivion, assimilate into oblivion, assimilate into oblivion, assimilate into oblivion, assimilate into oblivion, assimilate into oblivion, assimilate into oblivion, assimilate into oblivion, assimilate into oblivion, "
];
let currentTextIndex = 0;
let speed = 5;

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