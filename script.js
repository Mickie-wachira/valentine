// Set the date we're counting down to (Valentine's Day)
const countDownDate = new Date("Feb 14, 2024 00:00:00").getTime();

// Update the countdown every 1 second
const timer = setInterval(() => {
  const now = new Date().getTime();
  const distance = countDownDate - now;

  // Calculate days, hours, minutes, and seconds
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000;

  // Display the result
  document.getElementById("days").innerText = days;
  document.getElementById("hours").innerText = hours;
  document.getElementById("minutes").innerText = minutes;
  document.getElementById("seconds").innerText = seconds;

  // If the countdown is over, display a message
  if (distance < 0) {
    clearInterval(timer);
    document.getElementById("timer").innerHTML = "Happy Valentine's Day!";
  }
}, 1000);