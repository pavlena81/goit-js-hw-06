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

const itemPotatoes = document.createElement('li');
itemPotatoes.textContent = 'Potatoes';
itemPotatoes.classList.add('item');
// console.log(itemPotatoes);

const itemMushrooms = document.createElement('li');
itemMushrooms.textContent = 'Mushrooms';
itemMushrooms.classList.add('item');

const itemGarlic = document.createElement('li');
itemGarlic.textContent = 'Garlic';
itemGarlic.classList.add('item');

const itemTomatos = document.createElement('li');
itemTomatos.textContent = 'Tomatos';
itemTomatos.classList.add('item');

const itemHerbs = document.createElement('li');
itemHerbs.textContent = 'Herbs';
itemHerbs.classList.add('item');

const itemCondiments = document.createElement('li');
itemCondiments.textContent = 'Condiments';
itemCondiments.classList.add('item');

arrIngredients.append(itemPotatoes, itemMushrooms, itemGarlic, itemTomatos, itemHerbs, itemCondiments);



