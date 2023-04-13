const form = document.getElementById('form');

form.addEventListener('submit', handleSubmit);

function handleSubmit(e) {
    e.preventDefault();
    const data = new FormData(e.target);
    const stringified = stringifyFormData(data);
    fetchData(stringified);
}

function stringifyFormData(fd) {
    const data = {
        query: {
            term: {
                is_public_domain: true
            }
        }
    };
    for (let key of fd.keys()) {
        data[key] = fd.get(key);
    }
    return JSON.stringify(data);
}

async function fetchData(body) {
    const response = await fetch('https://api.artic.edu/api/v1/artworks/search', {
        method: "POST",
        headers: {
            "Content-Type": 'application/JSON'
        },
        body
    });
    const data = await response.json();
    console.log('data', data);

}