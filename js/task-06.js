
const validationInputEl = document.querySelector("#validation-input");


function validateInput(event) {
    const update = event.target;
    const length = Number(update.dataset.length);
function addClassValidValue () {
        update.classList.add("valid");
    update.classList.remove("invalid");
    };

function addClassInvalidValue () {
    update.classList.add("invalid");
        update.classList.remove("valid");
    };
    
    length === update.value.trim().length ? addClassValidValue (): addClassInvalidValue();
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