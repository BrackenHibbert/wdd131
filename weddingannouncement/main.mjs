import { adventures } from '/adventures.mjs'; 

let currentIndex = 0;

export function renderSlide() {
    const slideContainer = document.getElementById('slide');
    const adventure = adventures[currentIndex];

    slideContainer.innerHTML = `
        <img src="${adventure.image}" alt="${adventure.title}" style="width:100%; height:auto;">
        <h2>${adventure.title}</h2>
        <p>${adventure.description.join(' ')}</p>
    `;
}


export function navigateSlides(direction) {
    if (direction === 'next') {
        currentIndex = (currentIndex + 1) % adventures.length;
    } else if (direction === 'prev') {
        currentIndex = (currentIndex - 1 + adventures.length) % adventures.length;
    }
    renderSlide();
}

document.addEventListener('DOMContentLoaded', () => {

    renderSlide();

    document.getElementById('prev').addEventListener('click', () => navigateSlides('prev'));
    document.getElementById('next').addEventListener('click', () => navigateSlides('next'));
});

// Set the target date and time
const targetDate = new Date("2025-08-16T10:00:00").getTime(); // August 16 At 10AM

// Function to update the countdown
function updateCountdown() {
  const now = new Date().getTime();
  const timeRemaining = targetDate - now;

  if (timeRemaining >= 0) {
    // Calculate days and hours
    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));

    // Update the HTML elements
    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
  } else {
    // If the countdown is over
    document.getElementById("countdown").innerHTML = "<p>Countdown Complete!</p>";
  }
}

// Update the countdown every second
setInterval(updateCountdown, 1000);

// Initial call to display countdown immediately
updateCountdown();
