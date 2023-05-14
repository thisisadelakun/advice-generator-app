let num = document.getElementById("advice-number");
let adv = document.getElementById("advice-text");
let btn = document.getElementById("btn");

function getAdvice() {
    fetch('https://api.adviceslip.com/advice')
        .then((res) => res.json())
        .then((data) => {
            num.innerText = `ADVICE #${data.slip.id}`;
            adv.innerText = `"${data.slip.advice}"`;
        })
        .catch((error) => {
            console.error('error:', error);
        });
}

window.addEventListener("load", getAdvice);
btn.addEventListener("click", getAdvice);
