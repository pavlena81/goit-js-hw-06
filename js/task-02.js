// Напиши скрипт, который для каждого элемента массива ingredients:

// Создаст отдельный элемент < li >.
//  Обзательно используй метод document.createElement().
// Добавит название ингредиента как его текстовое содержимое.
// Добавит элементу класс item.
// После чего вставит все < li > за одну операцию 
// в список ul#ingredients.

const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const arrIngredients = document.querySelector('#ingredients');
console.log(arrIngredients);


const ingredientsEl = ingredients.map(ingredient => {
  const nameEl = document.createElement('li');
  nameEl.textContent = ingredient;
  nameEl.classList.add('item');
  return nameEl;
})


arrIngredients.append(...ingredientsEl);



