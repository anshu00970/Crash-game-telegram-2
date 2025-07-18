const ADMIN_USERNAME = "admin";
const ADMIN_PASSWORD = "admin123"; // Change this in real deployment

function adminLogin() {
  const user = document.getElementById('adminUser').value;
  const pass = document.getElementById('adminPass').value;

  if (user === ADMIN_USERNAME && pass === ADMIN_PASSWORD) {
    document.getElementById('loginBox').style.display = 'none';
    document.getElementById('dashboard').style.display = 'block';
  } else {
    alert("Incorrect username or password.");
  }
}

function addCoins() {
  const userId = document.getElementById('targetUser').value;
  const coins = parseFloat(document.getElementById('coinAmount').value);

  if (!userId || isNaN(coins)) {
    document.getElementById('coinResult').innerText = "❌ Invalid input.";
    return;
  }

  // Simulate PHP call
  document.getElementById('coinResult').innerText = `✅ ${coins} coins added to user ${userId}`;
}

function setCrash() {
  const crash = parseFloat(document.getElementById('crashValue').value);

  if (isNaN(crash)) {
    document.getElementById('crashResult').innerText = "⚠️ No crash value set.";
    return;
  }

  // Simulate setting crash point
  document.getElementById('crashResult').innerText = `✅ Next crash set to ${crash.toFixed(2)}x`;
}