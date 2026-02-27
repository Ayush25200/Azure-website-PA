function showMessage() {
  const messages = [
    "Hello from Azure! ☁️",
    "Node.js + Azure = 🔥",
    "You're doing great, Ayush! 🚀",
    "Keep practising! 💪",
    "Azure loves you! ❤️"
  ];

  const msgEl = document.getElementById('message');
  const random = messages[Math.floor(Math.random() * messages.length)];
  msgEl.textContent = random;

  // Clear message after 3 seconds
  setTimeout(() => {
    msgEl.textContent = '';
  }, 3000);
}