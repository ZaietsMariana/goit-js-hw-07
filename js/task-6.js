function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const inputEl = document.querySelector("input");
const btnCreate = document.querySelector("#controls button[data-create]");
const btnDestroy = document.querySelector("#controls button[data-destroy]");
const divControls = document.querySelector("#controls");
const divBoxes = document.querySelector("#boxes");


function createBoxes(amount) {
  divBoxes.innerHTML = "";
 const resultArr = [];
  
  for (let i = 0; i < amount; i += 1){
    const size = 30 + i * 10;
    const divEl = document.createElement("div");
    divEl.style.width = `${size}px`;
    divEl.style.height = `${size}px`;
    divEl.style.backgroundColor = getRandomHexColor();
    resultArr.push(divEl);
  }
  divBoxes.append(...resultArr);
}

btnCreate.addEventListener("click", handleClick);

function handleClick() {
  const amount = inputEl.value;
  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
    inputEl.value = "";
  }
} 

btnDestroy.addEventListener("click", destroyBoxes);

function destroyBoxes() {
  divBoxes.innerHTML = "";
}

 
// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
// }

// const divControls = document.getElementById('controls');
// const divBoxes = document.getElementById('boxes')
// const refs = {
//   input: divControls.firstElementChild,
//   btnCreate: divControls.children[1],
//   btnDestroy: divControls.children[2]
// }

// refs.btnCreate.addEventListener('click', createBoxes)
// refs.btnDestroy.addEventListener('click', destroyBoxes)

// function createBoxes(event) {
//   createBoxess(refs.input.value)
// }

// function createBoxess(amount) {
//   for (let i = 0; i < amount; i++) {
//     const div = document.createElement('div')
//     div.style.height = `${30 + 10 * i}px`
//     div.style.width = `${30 + 10 * i}px`
//     div.style.backgroundColor = getRandomHexColor()
//     divBoxes.append(div)
//   }
// }

// function destroyBoxes() {
//   divBoxes.innerHTML = ''
// }