let Number = document.getElementById("advice-number");
let Advice = document.getElementById("advice-text");
let btn = document.getElementById("btn");

function getAdvice() {
    fetch('https://api.adviceslip.com/advice')
        .then((res) => res.json())
        .then((slip) => {
            Number.innerText = `ADVICE #${slip.slip_id}`;
            Advice.innerText = slip.advice;
        });
}

window.addEventListener("load", getAdvice);
btn.addEventListener("click", getAdvice);
