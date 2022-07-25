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

const ref = {
  inputValue: document.querySelector('#controls>input'),
  btnCreate: document.querySelector('button[data-create]'),
  btnDestroy: document.querySelector('button[data-destroy]'),
  boxArr: [],
  boxesEl: document.querySelector('#boxes'),
}

function createBoxes (amount) {
  amount = +ref.inputValue.value;

for (let i = 0; i < amount; i += 1) {
        const boxSize = 30;
        let growBoxSize = boxSize + i * 10;
        const boxItem = `<div style="width:${growBoxSize}px;
    height:${growBoxSize}px; background-color:${getRandomHexColor()}" >
    </div>`;
        ref.boxArr.push(boxItem);
}
  return ref.boxArr;
}

ref.boxesEl.append(...ref.boxArr);

ref.btnCreate.addEventListener('click', createBoxes);

const destroyBoxes = () => {
  ref.boxesEl.innerHTML = ' ';
  ref.inputValue.value = ' ';
}
ref.btnDestroy.addEventListener('click', destroyBoxes);