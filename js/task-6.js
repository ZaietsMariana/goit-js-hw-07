function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const divControls = document.querySelector("#controls");
const divBoxes = document.querySelector("#boxes");

const refs = {
  input: document.querySelector("input"),
  btnCreate: document.querySelector("#controls button[data-create]"),
  btnDestroy: document.querySelector("#controls button[data-destroy]"),
}

refs.btnCreate.addEventListener("click", createBoxess);
refs.btnDestroy.addEventListener("click", destroyBoxes);


function createBoxess(event) {
  createBoxes(refs.input.value);
 
} 



function createBoxes(amount) {
 const resultArr = [];
  
  for (let i = 0; i < amount; i += 1){
    const divEl = document.createElement("div");
    const size = 30 + 10 * i;
    divEl.style.width = `${size}px`;
    divEl.style.height = `${size}px`;
    divEl.style.backgroundColor = getRandomHexColor();
    resultArr.push(divEl);
  }
  divBoxes.append(...resultArr);
}



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