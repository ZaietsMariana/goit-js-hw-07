function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const refs = {
  changespan: document.querySelector(".color"),
  changebutton: document.querySelector(".change-color"),
}

refs.changebutton.addEventListener("click", onBtnClick);


function onBtnClick(event) {
  document.body.style.background = getRandomHexColor();
  refs.changespan.textContent = document.body.style.background
}



