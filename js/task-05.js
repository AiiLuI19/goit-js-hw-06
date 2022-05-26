
 const textInputEl = document.querySelector("#name-input");
 const outputEl = document.querySelector("#name-output");

textInputEl.addEventListener("input", (evt) => {
     outputEl.textContent = evt.currentTarget.value.trim() || "Anonymous";
});

console.log (outputEl)

// Напиши скрипт который, при наборе текста в инпуте
//  input#name - input(событие input), подставляет его
//   текущее значение в span#name - output.Если инпут
// пустой, в спане должна отображаться строка "Anonymous".

