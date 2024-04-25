let clearBtnEl = document.getElementById("clearBtn");
let counterValue = document.getElementById("counterValue");

let counter = 0;

let counterTimer = function() {
    counter = counter + 1;
    counterValue.textContent = counter;
};

let intervalId = setInterval(counterTimer, 1000);

function stopTimer () {
    return clearInterval(intervalId);
}
// Write your code here
clearBtnEl.addEventListener("click", stopTimer);