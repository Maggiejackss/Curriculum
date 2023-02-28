const quiz = document.getElementById("app");
const answer = document.querySelectorAll("[data-answer]")
const answlist = document.getElementById("answlist");
const output = document.getElementById("answer")
const answclick = e => {
    if (e.target.matches("[data-answer]")) {
        // console.log(e.target.dataset.answer);
        let styles = "";
        if (e.target.dataset.answer === "true"){
            styles =  "color: green";
            document.getElementById("answer").innerText = "CORRECT!";
            output.setAttribute("style", styles);
        } else {
            styles = "color: red";
            document.getElementById("answer").innerText = "WRONG!";
            output.setAttribute("style", styles);
        }
    }
}

document.addEventListener('click', answclick);

