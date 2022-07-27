let speechButton = document.querySelector('.speak_btn');

speechButton.onclick = () => {

  let textArea = document.querySelector('.enter_text').value

  let speech = new SpeechSynthesisUtterance();
  speech.lang = 'en-US';
  speech.text = textArea;
  speech.rate = 1;
  speech.volume = 1;
  speech.pitch = 1;

  speechSynthesis.speak(speech);
}



// or

// function textToSpeech(text) {
//   let utternance = new SpeechSynthesisUtterance(text);
//   speechSynthesis.speak(utternance);
// }

// speechButton.addEventListener("click", e => {
//   e.preventDefault();
//   if (textArea.value !== ""); {
//     textToSpeech(textArea.value)
//   }
// })