// const questionList = document.getElementById("questions-container");
// const questions = [
//     {
//         id: 1,
//         question:
//             "In what year what the Gettysburg Address delivered by Abraham Lincoln",
//         answersOptions: [
//             { answer: 1861, list: "a", correct: false },
//             { answer: 1863, list: "b", correct: true },
//             { answer: 1865, list: "c", correct: false },
//             { answer: 1870, list: "d", correct: false },
//         ],
//     },
//     {
//         id: 2,
//         question:
//             "In what year what the Gettysburg Address delivered by Abraham Lincoln",
//         answersOptions: [
//             { answer: 1861, list: "a", correct: false },
//             { answer: 1863, list: "b", correct: true },
//             { answer: 1865, list: "c", correct: false },
//             { answer: 1870, list: "d", correct: false },
//         ],
//     },
// ];
const renderQuestion = () => {
    questions.map(({ id, question, answersOptions }) => {
        //Templeate for each Question....
        const div = document.createElement("div");
        const p = document.createElement("p");
        const output = document.createElement("div");
        p.innerText = question;
        div.appendChild(p);
        // Templeate for each answer option
        answersOptions.map(({ list, answer, correct }) => {
            const span = document.createElement("span");
            // A. answer option
            span.innerHTML = `${list}. ${answer}`;
            span.setAttribute("data-answer", "");
            div.appendChild(span);
            // Handle click and checking if the answer has a the attribute `true`
            const handleClick = (event) => {
                // Style and result set to empty string to clear the data
                let styles = "";
                let result = "";
                // .matches look for the data- attribute given in the html
                if (event.target.matches("[data-answer]")) {
                    // if the answer option have the attribute false...
                    if (correct !== true) {
                        result = "WRONG";
                        styles = `color: red`;
                    } else {
                        // if the answer option have the attribute true...
                        result = "CORRECT!!";
                        styles = `color: green`;
                    }
                }
                // setting the attribute style to the output
                output.setAttribute("style", styles);
                output.innerText = result;
                div.appendChild(output);
            };
            span.addEventListener("click", handleClick);
        });
        questionList.appendChild(div);
    });
};
renderQuestion(); 