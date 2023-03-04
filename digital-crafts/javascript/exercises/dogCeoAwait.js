const dogButn = document.getElementById("dog-button");
const body = document.getElementById('body');
const header = document.getElementById('header');

const dogPic = async () => {
    const response = await fetch('https://dog.ceo/api/breeds/image/random');
    const data = await response.json();
    const url = data.message;
    return url;
}

const dogPicButn = async () => {
    const list = [];
    const imgs = document.createElement('div');
    // const bg = imgs.className("bg");
    for (let i = 0; i <=3; i++){
        //add innerHtml to wipe current pics
        const dogPicUrl = dogPic();
        const dogpic = document.createElement('img');
        dogpic.src = await dogPicUrl;
        body.append(imgs);
        imgs.append(dogpic);
        list.push(dogPicUrl);
        // imgs.className("bg");
    }
    console.log(list);
    dogQ();
    return list;
}

const breedAnswer = e => {
    let breed = dogQ;
    const answer = document.createElement('div');
    if (e.target.matches === `${breed}`) {
        answer.innerText('Correct!');
        header.append(answer);
    } else {
        answer.innerText('Wrong!');
        header.append(answer);
    }
}

// const urlList = dogPicButn();

const dogQ = async () => {
    const urlList = dogPicButn();
    const prompt = document.createElement('div');
    for (let i = 0; i <= 4; i++) {    
        const dogPicBreeds = await urlList;
        const findBreed = dogPicBreeds[Math.floor(Math.random() * dogPicBreeds.length)];
        const breedIndex = findBreed.split('/');
        const whichBreed = breedIndex[2];
        prompt.innerText(`which image is ${whichBreed}`);
        }
    return prompt;
}

dogButn.addEventListener('click', dogQ);