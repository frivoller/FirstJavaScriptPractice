
// Display the user's name in the greeting
document.getElementById("myName").innerHTML = userName;

// Function to show the current time and day
function showTime() {
  const today = new Date();
  let h = today.getHours();
  let m = today.getMinutes();
  let s = today.getSeconds();
  
  // Get the day of the week in Turkish
  const days = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"];
  let day = days[today.getDay()];
  
  // Add leading zeros if needed
  h = (h < 10) ? "0" + h : h;
  m = (m < 10) ? "0" + m : m;
  s = (s < 10) ? "0" + s : s;
  
  // Format the time and day
  const time = h + ":" + m + ":" + s + " " + day;
  
  // Display the time and day
  document.getElementById("myClock").innerHTML = time;
  
  // Update the time every second
  setTimeout(showTime, 1000);
}

// Start the clock when the page loads
window.onload = showTime;
