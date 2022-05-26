function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btnChangeColorEl = document.querySelector('.change-color');
const colorText = document.querySelector('.color');
const colorBody = document.body;

btnChangeColorEl.addEventListener('click', () => {
  const bgColor = getRandomHexColor();
  colorBody.style.background = bgColor;
  colorText.textContent = bgColor;
}
);

