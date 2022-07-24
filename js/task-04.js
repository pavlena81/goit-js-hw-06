// Счетчик состоит из спана и кнопок, которые,
//     при клике, должны увеличивать и уменьшать его значение на единицу.

// 
//     Создай переменную counterValue 
// в которой будет храниться текущее значение счетчика 
// и инициализируй её значением 0.
// Добавь слушатели кликов на кнопки,
//     внутри которых увеличивай или уменьшай значение
// счтетчика.
// Обновляй интерфейс новым значением переменной counterValue.

let counterValue = 0;

const valueEl = document.querySelector('#value')
const decrementBtnEl = document.querySelector('[data-action="decrement"]');
const incrementBtnEl = document.querySelector('[data-action="increment"]');

function handleClick(event) {
  console.log("click event listener callback");
};

decrementBtnEl.addEventListener("click", () => {
    counterValue -= 1;
    valueEl.textContent = counterValue;
    
    console.log(`decrease couter: ${counterValue}` );
});

incrementBtnEl.addEventListener("click", handleClick => {
    
    counterValue += 1;
    valueEl.textContent = counterValue;
    console.log(`increase couter: ${counterValue}`);
});


