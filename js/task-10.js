// Variables
const inputEl = document.querySelector('input');
const buttonCreateEl = document.querySelector("[data-create]");
const buttonDestroyEl = document.querySelector("[data-destroy]");
const boxesEl = document.querySelector('#boxes');
const controlsEl = document.querySelector("#controls")
// Listeners:
buttonCreateEl.addEventListener("click", addNumberVal);
buttonDestroyEl.addEventListener("click", clearMarkup);

// Functions:
function addNumberVal(event) { 
     event.preventDefault();
    const value = Number(inputEl.value);
    clickBox(value);
    console.log(value);
};

 function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

function clickBox(value) {
    let size = 30;
    let markup = "";

    for (let i = 0; i < value; i += 1) {
        size += 10;
        markup += `<div style="width: ${size}px; height: ${size}px; background: ${getRandomHexColor()}"></div>`;
    }
    updateMarkup(markup);
    return markup;
};
    
function updateMarkup(markup) {
   boxesEl.innerHTML = markup;
};

function clearMarkup() {
    inputEl.value = "";
     boxesEl.innerHTML = "";
};




// Напиши скрипт создания и очистки коллекции элементов. 
// Пользователь вводит количество элементов в input и нажимает 
// кнопку Создать, после чего рендерится коллекция.При нажатии 
// на кнопку Очистить, коллекция элементов очищается.

// <div id="controls">
//   <input type="number" min="1" max="100" step="1" />
//   <button type="button" data-create>Create</button>
//   <button type="button" data-destroy>Destroy</button>
// </div>

// <div id="boxes"></div>
// Создай функцию createBoxes(amount), которая принимает один
// параметр - число.Функция создает столько < div >, сколько 
// указано в amount и добавляет их в div#boxes.

// Размеры самого первого <div> - 30px на 30px.
// Каждый элемент после первого, должен быть шире и выше 
// предыдущего на 10px.
// Все элементы должены иметь случайный цвет фона в формате HEX. 
// Используй готовую функцию getRandomHexColor для получения цвета.