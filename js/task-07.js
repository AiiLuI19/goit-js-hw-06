
const fontSizeControlEl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');


fontSizeControlEl.addEventListener('input', (evn) => {
    textEl.style.fontSize = evn.target.value + "px";
});



// Напиши скрипт, который реагирует на изменение значения 
// input#font - size - control(событие input) и изменяет инлайн
//     - стиль span#text обновляя свойство font - size.
//     В результате при перетаскивании ползунка будет меняться 
//     размер текста.

