// Напиши скрипт который, при наборе текста в инпуте 
// input#name - input(событие input), подставляет его 
// текущее значение в span#name - output.
// Если инпут пустой, в спане должна отображаться строка
// "Anonymous".
const inputEl = document.querySelector("#name-input");
const outputEl = document.querySelector("#name-output");
// =================================================

inputEl.addEventListener("input", onInputChange); 
console.log(`Input: ${inputEl.value}`);
 

function onInputChange (event) {
  // event.preventDefault();   
  if (inputEl.value === "") {
    outputEl.textContent = `Anonymous`;
    return console.log("Please fill in  the fields!");
  }
  outputEl.textContent = event.currentTarget.value.trim();

    
 }
console.log(inputEl);
//  outputEl.textContent = event.currentTarget.value.trim()
//     ? event.currentTarget.value.trim()
//      : `Anonymous`;
//     return console.log("Please fill in  the fields!");
//  
 


  //  =============================================
  


