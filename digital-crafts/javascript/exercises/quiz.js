const quiz = document.getElementById("app");
const answer = document.getElementById("answer");
const right = document.getElementById("right");
const wrong = document.getElementById("wrong");
const answ = document.getElementById("answ")


const answclick = e => {
    const a = answer.innerText;
    if (right) {
        answer.innerText = 'CORRECT!';
    }
}
answ.addEventListener('click', answclick);