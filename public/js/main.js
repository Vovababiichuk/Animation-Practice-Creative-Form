const mainDiv = document.getElementById("bg");
const backgrounds = ["background-1", "background-2", "background-3", "background-4", "background-5"];
let currentIndex = -1;

function toggleBackground() {
  if (currentIndex >= 0) {
    mainDiv.classList.remove(backgrounds[currentIndex]);
  }

  currentIndex = (currentIndex + 1) % backgrounds.length;

  if (currentIndex < backgrounds.length - 1) {
    mainDiv.classList.add(backgrounds[currentIndex]);
  } else {
    mainDiv.classList.remove(...backgrounds);
  }

  // if (currentIndex < backgrounds.length) {
  //   mainDiv.classList.add(backgrounds[currentIndex]);
  // } else {
  //   mainDiv.classList.remove(...backgrounds);
  // }
}




const logo = document.querySelector('.logo');

function getRandomPosition() {
  const maxX = window.innerWidth - logo.offsetWidth;
  const maxY = window.innerHeight - logo.offsetHeight;
  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);
  return { x: randomX, y: randomY };
}

function moveLogo() {
  const position = getRandomPosition();
  logo.style.transform = `translate(${position.x}px, ${position.y}px)`;
}

setInterval(moveLogo, 2000);
