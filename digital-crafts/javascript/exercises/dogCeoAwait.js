const dogButn = document.getElementById("dog-button");
const body = document.getElementById('body');
const header = document.getElementById('header');
const imgs = document.getElementById('imgs');
const dogPrompt = document.getElementById('dog-prompt');
const Answer = document.getElementById('answer');
const statusTracker = document.getElementById('status-tracker');

let breeds = [];
let answer = '';

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
    for (let i = 0; i <=3; i++){
        const imgcont = document.createElement('div');
        imgcont.className = `imgcont`;
        const {breedIndex, url} = await dogPic();
        const dogpic = document.createElement('img');
        dogpic.src = url;
        dogpic.setAttribute('data-type', breedIndex);
        dogpic.className = `img`;
        imgs.append(imgcont);
        imgcont.append(dogpic);
    }
    findBreedUrl();
}

const breedAnswer = e => {
    const breed = e.target.getAttribute('data-type');
    Answer.innerText = '';
    if (breed === answer) {
        Answer.append('Correct!');
        statusTracker.append('You have answered')
    } else {
        Answer.append('WRONG!');
    }

}

const findBreedUrl = async () => {
    answer = breeds[Math.floor(Math.random() * breeds.length)];
    const prompt = document.createElement('div');
    prompt.innerText = `Which dog is the ${answer}?`;
    dogPrompt.append(prompt);
}

const trackAnswers = () => {
    if (findBreedUrl === answer) {
        console.log('continue');
        }
}

dogButn.addEventListener('click', dogPicButn);
imgs.addEventListener('click', breedAnswer);