const dogButn = document.getElementById("dog-button");
const body = document.getElementById('body');
const header = document.getElementById('header');
const imgs = document.getElementById('imgs');
const dogPrompt = document.getElementById('dog-prompt');
const Answer = document.getElementById('answer');
const answerTracker = document.getElementById('answerTracker');
const restartBtn = document.getElementById('restartBtn');
restartBtn.className = "hidden";

let breeds = [];
let answer = '';
let points = [];

function onLoad() {
    loadimg = document.createElement('img');
    loadimg.src = 'https://twitter.com/reactjpg/status/1434745877294317571/photo/1';
    imgs.append(loadimg);
}


const dogPic = async () => {
    const response = await fetch('https://dog.ceo/api/breeds/image/random');
    const data = await response.json();
    const url = data.message;
    const breedIndex = url.split('/')[4];
    breeds.push(breedIndex);
    return {breedIndex, url};
}

const dogPicButn = async () => {
    imgs.innerHTML = '';
    const parentCont = document.createElement('div');
    parentCont.className = 'parentCont';
    for (let i = 0; i <= 1; i++){
        const imgcont = document.createElement('div');
        imgcont.className = `imgcont`;
        const {breedIndex, url} = await dogPic();
        const dogpic = document.createElement('img');
        dogpic.src = url;
        dogpic.setAttribute('data-type', breedIndex);
        dogpic.className = `img`;
        imgs.append(parentCont);
        parentCont.append(imgcont);
        imgcont.append(dogpic);
    }
    if (breeds.length > 3){
        findBreedUrl();
    }
}

const findBreedUrl = async () => {
    dogPrompt.innerHTML = '';
    answer = await breeds[Math.floor(Math.random() * breeds.length)];
    console.log(answer);
    const prompt = document.createElement('div');
    prompt.innerText =`Which dog is the ${answer}?`;
    dogPrompt.append(prompt);
}

const handleClick = () => {
    for (let i = 0; i <= 1; i++){
        dogPicButn();
    }
    console.log(breeds);
    findBreedUrl();
}

const breedAnswer = e => {
    const breed = e.target.getAttribute('data-type');
    Answer.innerText = '';
    answerTracker.innerText = '';
    if (breed === answer) {
        Answer.append('Correct!');
        points.push(1);
        breeds = [];
        if (sumFunc() < 5) {
            for (let i = 0; i <= 1; i++){
                dogPicButn();
            }
        }
        answerTrackerFunction();
    } else {
        Answer.append('WRONG! Try again!');
    }
}

const answerTrackerFunction = () => {
    answerTracker.innerText = '';
    answerTracker.innerText = `You have answered ${sumFunc()} out of 5 correctly!`;
    if (sumFunc() === 5){
        clearImages();
        answerTracker.innerText = 'You have answered them all correctly!';
        restartBtn.className = "displayed";
        Answer.innerText = '';
        dogPrompt.innerText = '';
    }
}

const clearImages = () => {
    imgs.innerHTML = '';
    const placeHolder = document.createElement('img');
    placeHolder.src ='https://images.dog.ceo/breeds/poodle-medium/PXL_20210220_100624962.jpg';
    placeHolder.className = 'finalimgcont';
    imgs.append(placeHolder);
    dogButn.className = "hidden";
}

const restartBtnFnctn = () => {
    dogButn.className = "";
    Answer.innerText = '';
    imgs.innerHTML = '';
    dogPrompt.innerHTML = '';
    answerTracker.innerText = '';
    restartBtn.className = "hidden";
    points.length = 0;
}

const sumFunc = () => {
    const sum = points.reduce(function(a,b){
        return a + b;
    });
    return sum;
}



dogButn.addEventListener('click', handleClick);
imgs.addEventListener('click', breedAnswer);
restartBtn.addEventListener('click', restartBtnFnctn);