// Här har du fått all js kod från genomgången
// Den har självklart andra variabelnamn och annan funktionalitet än vad du behöver
// Använ ddenna fil som utgångspunkt för att lösa uppgiften eller skriv din egen kod

let secretNumber = Math.floor(Math.random() * 101);

// Hämtar element
let slider = document.getElementById("guessSlider");
let valueText = document.getElementById("guessValue");
let message = document.getElementById("message");


slider.addEventListener("input", function () {
  valueText.innerText = slider.value;
});


function checkGuess() {
  let guess = Number(slider.value);

  if (guess < secretNumber) {
    message.innerText = "För lågt!";
  } else if (guess > secretNumber) {
    message.innerText = "För högt!";
  } else {
    message.innerText = "Rätt! Du gissade rätt tal!";
  }
}

function NewGame() {
    secretNumber = Math.floor(Math.floor() * 101);
    message.innerText = "Nytt tall, gissa!";

}