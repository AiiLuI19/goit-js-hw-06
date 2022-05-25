

const categoriEl = document.querySelector("#categories");
const itemEl = categoriEl.children.length
const message = `Number of categories: ${itemEl}`
console.log(message)
// --------1/1 --------


const items = document.querySelectorAll(".item");

items.forEach(function(item){
const title = item.children[0].textContent

const quanti = item.children[1].children.length
    
console.log( `Category: ${title}
Elements: ${quanti}`)
})



// Напиши скрипт который:

// Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item.
// Для каждого элемента li.item в списке ul#categories, 
//найдет и выведет в консоль текст заголовка элемента(тега < h2 >) 
//и количество элементов в категории(всех вложенных в него < li >).
// В результате, в консоли будут выведены такие сообщения.

// Number of categories: 3

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5