
const validationInputEl = document.querySelector("#validation-input");

function validateInput(event) {
    const update = event.target;
    
    const length = Number(update.dataset.length);
    // const addClassValidValue = update.classList.add("valid");
    // const addClassInvalidValue = update.classList.add("invalid");
    length === update.value.trim().length ? update.classList.add("valid") : update.classList.add("invalid");
}

validationInputEl.addEventListener("blur", validateInput);



// Напиши скрипт, который при потере фокуса на инпуте
//     (событие blur), проверяет его содержимое на 
//     правильное количество введённых символов.

//     Сколько символов должно быть в инпуте, указывается 
// в его атрибуте data - length.
// Если введено подходящее количество символов, то border 
// инпута становится зелёным, если неправильное - красным.
// Для добавления стилей, используй CSS - классы valid и
// invalid, которые мы уже добавили в исходные файлы задания.