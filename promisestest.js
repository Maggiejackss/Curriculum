const db = [
    {
        id: 1,
        name: "anna"
    },
    {
        id: 2,
        name: "billy"
    },
    {
        id: 3,
        name: "carlos"
    },
];

function getName(id) {
    const promise = new Promise ((resolve, reject) => {
        const found = db.find(x => x.id === id);
        setTimeout(() => {
            resolve(found.name);
        }, 300);
    });
    return promise;
}

const name = getName(1).then(x => console.log(x));

// go to using fetch API mdn
// check .then examples
// dog.ceo api 

// async/await practice
// be sure to use parens after .json to utilize the callback

fetch('https://dog.ceo/api/breeds/image/random')
    .then(response => response.json())
    .then(data => console.log(data));

// custom promise

const getWithThen = () => {
    const promise = new Promise((resolve, reject) => {
        fetch('https://dog.ceo/api/breeds/image/random')
            .then(response => response.json())
            .then(data => resolve(data.message));
    });
    return promise;
}

// custom 

//await has to be within an async function, cannot work outside

const getWithAsync = async () => {
    const response = await fetch('https://dog.ceo/api/breeds/image/random');
    const data = await response.json();
    const url = data.message;
    return url;
}

const dogImageUrl = getWithAsync();
console.log(dogImageUrl);