const dogButn = document.getElementById("dog-button");
const body = document.getElementById('body');
const header = document.getElementById('header');
const imgs = document.getElementById('imgs');
const dogPrompt = document.getElementById('dog-prompt');
const Answer = document.getElementById('answer');
const answerTracker = document.getElementById('answerTracker');

let breeds = [];
let answer = '';
let answerTrack = [];

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
}

const findBreedUrl = async () => {
    dogPrompt.innerHTML = '';
    // console.log(breeds);
    answer = await breeds[Math.floor(Math.random() * breeds.length)];
    console.log(answer);
    const prompt = document.createElement('div');
    prompt.innerText =`Which dog is the ${answer}?`;
    dogPrompt.append(prompt);
}

const handleClick = () => {
    for (let i = 0; i <= 1; i++){
        dogPicButn();
        // findBreedUrl();
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
        answerTrack.push(1);
        dogPicButn();
    } else {
        Answer.append('WRONG! Try again!');
    }
    console.log(answerTrack);
}

const answerTrackerFunction = () => {
    
}

// const findBreedUrl = async () => {
//     dogPrompt.innerHTML = '';
//     answer = await breeds[Math.floor(Math.random() * breeds.length)];
//     console.log(answer);
//     const prompt = document.createElement('div');
//     prompt.innerText = `Which dog is the ${answer}?`;
//     dogPrompt.append(prompt);
// }



dogButn.addEventListener('click', handleClick);
imgs.addEventListener('click', breedAnswer);