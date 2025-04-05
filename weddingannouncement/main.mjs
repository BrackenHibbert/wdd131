import { adventures } from './adventures.mjs';

// Slideshow Variables and Functions
let currentIndex = 0;

export function renderSlide() {
    const slideContainer = document.getElementById('slide');
    
    if (slideContainer) { // Check if the element exists
        const adventure = adventures[currentIndex];
        slideContainer.innerHTML = `
            <img src="${adventure.image}" alt="${adventure.title}" class="slide-image">
            <h2 class="slide-title">${adventure.title}</h2>
            <p class="slide-description">${adventure.description.join(' ')}</p>
        `;
    } else {
        console.log('Slide container not found on this page.');
    }
}

export function navigateSlides(direction) {
    const slideContainer = document.getElementById('slide');
    
    if (slideContainer) { // Only operate if the element exists
        if (direction === 'next') {
            currentIndex = (currentIndex + 1) % adventures.length;
        } else if (direction === 'prev') {
            currentIndex = (currentIndex - 1 + adventures.length) % adventures.length;
        }
        renderSlide();
    } else {
        console.log('Slide container not found, skipping navigation.');
    }
}

// Countdown Variables and Functions
const targetDate = new Date("2025-08-16T10:00:00").getTime(); // August 16 at 10AM

function updateCountdown() {
    const countdownContainer = document.getElementById('countdown');
    
    if (countdownContainer) { // Check if countdown element exists
        const now = new Date().getTime();
        const timeRemaining = targetDate - now;

        if (timeRemaining >= 0) {
            const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
            const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));

            const daysElement = document.getElementById("days");
            const hoursElement = document.getElementById("hours");
            const minutesElement = document.getElementById("minutes");

            if (daysElement && hoursElement && minutesElement) {
                daysElement.textContent = days;
                hoursElement.textContent = hours;
                minutesElement.textContent = minutes;
            } else {
                console.log("Countdown elements not found in the DOM!");
            }
        } else {
            countdownContainer.innerHTML = "<p>Countdown Complete!</p>";
        }
    } else {
        console.log('Countdown container not found on this page.');
    }
}

// Event Listeners for DOM Content Loaded
document.addEventListener('DOMContentLoaded', () => {
    // Slideshow Logic
    const slideContainer = document.getElementById('slide');
    if (slideContainer) {
        renderSlide();
        document.getElementById('prev').addEventListener('click', () => navigateSlides('prev'));
        document.getElementById('next').addEventListener('click', () => navigateSlides('next'));
    }

    // Countdown Logic
    const countdownContainer = document.getElementById('countdown');
    if (countdownContainer) {
        setInterval(updateCountdown, 1000); // Update every second
        updateCountdown(); // Initial call
    }
});


document.querySelector(".menu-toggle").addEventListener("click", function() {
  const nav = document.querySelector(".navigation");
  nav.style.display = nav.style.display === "flex" ? "none" : "flex";
});
