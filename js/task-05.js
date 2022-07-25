// Напиши скрипт который, при наборе текста в инпуте 
// input#name - input(событие input), подставляет его 
// текущее значение в span#name - output.
// Если инпут пустой, в спане должна отображаться строка
// "Anonymous".
const inputEl = document.querySelector("#name-input");
const outputEl = document.querySelector("#name-output");

inputEl.addEventListener("input", event => {
  outputEl.textContent = event.currentTarget.value;
});
 console.log(`Input: ${inputEl.value}`);
function handleSubmit(event) {
  event.preventDefault();
       

  if (inputEl.value === "") {
    outputEl.textContent = `${Anonymous}`;
    return console.log("Please fill in  the fields!");
  }
}

  console.log(`Input: ${inputEl.value}`);
// //   event.currentTarget.reset();
// 


