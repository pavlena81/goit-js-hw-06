// Посчитает и выведет в консоль количество категорий в ul#categories,
//     то есть элементов li.item.
// Для каждого элемента li.item в списке ul#categories,
//     найдет и выведет в консоль текст заголовка элемента(тега < h2 >) 
//     и количество элементов в категории(всех вложенных в него < li >)
// const ulEl = document.querySelector('ul#categories');
// console.log(ulEl);

const ulEl = document.querySelectorAll("li.item");
//  const numberOfUlEl = ulEl.length;
 const numberUlEl = ulEl.childElementCount;
console.log(`Number of categories: ${numberUlEl}`);

ulEl.forEach((element) => {
    
    console.log(`Category: ${element.firstElementChild.textContent}`);
    console.log(`Category: ${element.lastElementChild.children.length}`);
 });
