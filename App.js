let Number = document.getElementById("advice-number");
let Advice = document.getElementById("advice-text");
let btn = document.getElementById("btn");

function getAdvice() {
    fetch('https://api.adviceslip.com/advice')
        .then((res) => res.json())
        .then((data) => {
            Number.innerText = `ADVICE #${data.slip.id}`;
            Advice.innerText = `"${data.slip.advice}"`;
        })
        .catch((error) => {
            console.error('error:', error);
        });
}

window.addEventListener("load", getAdvice);
btn.addEventListener("click", getAdvice);
