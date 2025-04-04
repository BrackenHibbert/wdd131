import { adventures } from '/weddingannouncement/adventures.mjs'; 

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

