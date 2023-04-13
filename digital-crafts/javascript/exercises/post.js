const form = document.getElementById('form');

form.addEventListener('submit', handleSubmit);

function handleSubmit(e) {
    e.preventDefault();
    const data = new FormData(e.target);
    const stringified = stringifyFormData(data);
    console.log(stringified);
}

function stringifyFormData(fd) {
    const data = {};
    for (let key of fd.keys()) {
        data[key] = fd.get(key);
    }
    return JSON.stringify(data);
}

