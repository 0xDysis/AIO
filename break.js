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
  
    mainContent.innerHTML = formattedText;
  });