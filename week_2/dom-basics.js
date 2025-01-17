const newParagraph = document.createElement("p");
newParagraph.innerText = "Added with Javascript!";
document.body.appendChild(newParagraph);

const newImage = document.createElement("img");
newImage.setAttribute("src", "https://picsum.photos/200");
newImage.setAttribute("alt", "Practice image added with javaxcript, shows a skyline.");
document.body.appendChild(newImage);

const newSection = document.createElement("section");
newSection.innerHTML = "<section><h2>Dom Basics</h2><p>This was added through Java Script</p></section>";
document.body.appendChild(newSection);