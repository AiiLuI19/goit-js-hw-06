
// Variables
const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');
const valueEl = document.querySelector('#value');
let counterValue = 0;


// Counter
function decrement () {
    counterValue -= 1;
    updateCounterValue();
};

 function increment () {
    counterValue += 1;
    updateCounterValue();
};

// add Listener
decrementBtn.addEventListener('click', decrement);
incrementBtn.addEventListener('click', increment);


//Displays the result
function updateCounterValue(){
    valueEl.textContent = counterValue;
}


