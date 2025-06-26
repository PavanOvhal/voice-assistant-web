const micBtn = document.getElementById("mic-btn");
const userInput = document.getElementById("user-input");
const chatBox = document.getElementById("chat-box");

let recognition;
if ('webkitSpeechRecognition' in window) {
  recognition = new webkitSpeechRecognition();
  recognition.continuous = false;
  recognition.interimResults = false;
  recognition.lang = 'en-US';

  recognition.onstart = () => {
    micBtn.classList.add("listening");
    micBtn.innerHTML = "🎙️ Listening...";
  };

  recognition.onend = () => {
    micBtn.classList.remove("listening");
    micBtn.innerHTML = "🎤";
  };

  recognition.onresult = function (event) {
    const transcript = event.results[0][0].transcript;
    userInput.value = transcript;
    sendQuery(transcript); // automatically send after recognition
  };

  recognition.onerror = function (event) {
    alert("Couldn’t recognize your voice. Please try again.");
  };
} else {
  alert("Speech recognition not supported in this browser.");
}

micBtn.onclick = function () {
  if (recognition) recognition.start();
};

function sendQuery(text) {
  appendMessage("You", text);
  fetch("/ask", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ query: text })
  })
    .then(response => response.json())
    .then(data => {
      appendMessage("Assistant", data.response);
      speak(data.response);
    })
    .catch(err => {
      appendMessage("Assistant", "Error connecting to assistant.");
    });
}

function appendMessage(sender, message) {
  const messageDiv = document.createElement("div");
  messageDiv.className = "message";
  messageDiv.innerHTML = `<strong>${sender}:</strong> ${message}`;
  chatBox.appendChild(messageDiv);
  chatBox.scrollTop = chatBox.scrollHeight;
}

function speak(text) {
  const speech = new SpeechSynthesisUtterance(text);
  window.speechSynthesis.cancel(); // stop previous
  window.speechSynthesis.speak(speech);
}
