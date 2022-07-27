// Напиши скрипт создания и очистки коллекции элементов. 
// Пользователь вводит количество элементов в input и нажимает 
// кнопку Создать, после чего рендерится коллекция.
// При нажатии на кнопку Очистить, коллекция элементов очищается.

// Создай функцию createBoxes(amount), которая принимает один параметр
//   - число.Функция создает столько < div >,
//     сколько указано в amount и добавляет их в div#boxes.

// Размеры самого первого <div> - 30px на 30px.
// Каждый элемент после первого, должен быть шире и выше предыдущего
//  на 10px.
// Все элементы должены иметь случайный цвет фона в формате HEX.
//  Используй готовую функцию getRandomHexColor для получения цвета.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function getRandomRgbColor() {
  const red = Math.round(Math.random(0, 1) * 255);
  const green = Math.round(Math.random(0, 1) * 255);
  const blue = Math.round(Math.random(0, 1) * 255);
  return `rgb(${red},${green},${blue})`;
}

const ref = {
  inputValue: document.querySelector('#controls>input'),
  btnCreate: document.querySelector('[data-create]'),
  btnDestroy: document.querySelector('[data-destroy]'),
  
  boxesEl: document.querySelector('#boxes'),
}
  
const createBoxes = (amount) => {
  const boxArr = [];
  amount = ref.inputValue.value;

for (let i = 0; i < amount; i += 1) {
        const boxSize = 30;
        let growBoxSize = boxSize + i * 10;
        const boxItem = `<div style='width:${growBoxSize}px;
    height:${growBoxSize}px; background-color:${getRandomHexColor()}' >
    </div>`;
  boxArr.push(boxItem);
   ref.boxesEl.insertAdjacentHTML('afterbegin', boxArr.join(''));
  // ref.boxesEl.append(...boxArr);
}  
}

const destroyBoxes = () => {
  ref.boxesEl.innerHTML = '';
  ref.inputValue.value = '';
};

ref.btnCreate.addEventListener('click', createBoxes);
ref.btnDestroy.addEventListener('click', destroyBoxes);

// ==================================================
// function getRandomHexColor() {
//     return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
//   }
//   function getRandomRgbColor() {
//     const red = Math.round(Math.random(0, 1) * 255);
//     const green = Math.round(Math.random(0, 1) * 255);
//     const blue = Math.round(Math.random(0, 1) * 255);
//     return `rgb(${red},${green},${blue})`;
//   }
//   const ref = {
//     inputValue: document.querySelector('#controls>input'),
//     btnCreate: document.querySelector('[data-create]'),
//     btnDestroy: document.querySelector('[data-destroy]'),
//     boxListHTML:  document.querySelector('#boxes'),
//   };
//   const createBoxes = (amount) => {
//     const boxWrap = [];
//   amount = ref.inputValue.value;
//   for (let i = 0; i < amount; i += 1 ){
//     const boxSize = 30;
//     let growBox = boxSize + i * 10;
//     const boxItem = `<div style ='width:${growBox}px ;height:${growBox}px; background-color:${getRandomRgbColor()}'></div>`
//     boxWrap.push(boxItem);
//   ref.boxListHTML.insertAdjacentHTML('afterbegin', boxWrap.join(''));
//   }
//   const destroyBoxes =() =>{
//     ref.boxListHTML.innerHTML="";
//     ref.inputValue.value = "";
//   };
//   ref.btnCreate.addEventListener('click', createBoxes );
//   ref.btnDestroy.addEventListener('click', destroyBoxes);