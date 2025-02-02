const menuButton = document.querySelector(".menuButton");
function toggleMenu() {
  const menu = document.querySelector("nav");
  menu.classList.toggle("hide");
}

function handleResize() {
    const menu = document.querySelector("nav");
    if (innderwidth > 1000) {
        menu.classList.remove("hide");
    }
    else {
        menu.classList.add("hide");
    }
}

function viewerTemplate(pic, alt) {
    return `<div class="viewer">
      <button class="close-viewer">X</button>
      <img src="${pic}" alt="${alt}">
      </div>`;
  }

function openViewer(src, alt) {
    const viewer = document.querySelector(".viewer");
    const viewerImg = viewer.querySelector("img");
    viewerImg.src = src;
    viewerImg.alt = alt;
    viewer.computedStyleMap.display = "grid;"
}

function closeViewer() {
    const viewer = document.querySelector(".viewer");
    viewer.remove();
}

function viewHandler(event) {
    // create a variable to hold the element that was clicked on from event.target
    const clickedElement = event.target;
    // get the src attribute from that element and 'split' it on the "-"
    const src = clickedElement.getAttribute("src");
    const alt = clickedElement.getAttribute("alt");
    document.body.insertAdjacentHTML("afterbegin", viewerTemplate(src, alt));

    const exitButton = document.querySelector(".close-viewer");
    exitButton.addEventListener("click", closeViewer);
}

const galleryImages = document.querySelectorAll(".gallery img");
galleryImages.forEach((img) => {
    img.addEventListener("click", viewHandler);
});

const closeButton = document.querySelector(".close-viewer");
menuButton.addEventListener("click", toggleMenu);
handleResize();
window.addEventListener("resize", handleResize);