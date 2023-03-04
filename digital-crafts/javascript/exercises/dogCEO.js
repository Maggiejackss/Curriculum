//make button
//add eventlistener to button
//call dogceo api
//wait for a response
//create img element
//add src value to img
//append to dom
const body = document.getElementById("body");

fetch("https://dog.ceo/api/breeds/image/random")
.then((getImg) => getImg.json())
.then(x => console.log(x.message));

function getImg() {
    const promise = new Promise ((resolve, reject) => {
        const pup = json.find(x => x.message);
        resolve(pup.message);
        let img = document.createElement("img");
        img.src = pup;
        body.append(img);
    })
    return promise;
}
