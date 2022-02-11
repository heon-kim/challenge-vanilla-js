const body = document.querySelector("body");
const BLUE = "bgColor-blue";
const PURPLE = "bgColor-purple";
const YELLOW = "bgColor-yellow";
let intViewportWidth = window.innerWidth;

function changeColor() {
  if (intViewportWidth > 700 && intViewportWidth <= 900) {
    body.classList.remove(BLUE);
    body.classList.remove(YELLOW);
    body.classList.add(PURPLE);
  } else if (intViewportWidth > 900) {
    body.classList.remove(PURPLE);
    body.classList.remove(BLUE);
    body.classList.add(YELLOW);
  } else {
    body.classList.remove(PURPLE);
    body.classList.remove(YELLOW);
    body.classList.add(BLUE);
  }
}
function handleResize() {
  intViewportWidth = window.innerWidth;
  changeColor();
}

changeColor();
window.addEventListener("resize", handleResize);
