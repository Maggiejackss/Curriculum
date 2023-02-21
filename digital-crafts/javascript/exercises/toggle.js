const question = document.getElementById("app");
const output = document.getElementById("output");

const qclick = e => {
    const q = output.innerText;
    if (q) {
        output.innerText = '';
} else {
    output.innerText = 'Because we let them play video games while they work.';
}
}
question.addEventListener('click', qclick);
//check zoom reccordings to finish