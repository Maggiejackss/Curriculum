const output = document.getElementById('output');
const button = document.getElementById('submit');


const getRequest = async () => {
  const input = document.querySelector('input').value;
  console.log(input);
  const requestType = /* `typeof input` is a JavaScript operator that returns a string indicating the
  type of the operand. In this case, it is used to determine whether the input
  is a number or not. */
  typeof input;
  if (requestType === 'number') {
    const request = await fetch(`https://localhost:8080/mvps/years/${input}`);
    const response = request.json;

  } else {
    const request = await fetch(`http://localhost:8080/mvps/players/${input}`);
    const response = await request.json();
    return response;
  } 
}

const stringify = async () => {
  const body = document.createElement('div');
  const response = await getRequest();
  for (let i = 0; i < response.length; i++) {
    let player = response[i].player;
    let year = response[i].year;
    let team = response[i].team;
    body.append(`player: ${player}, year: ${year}, team: ${team}`)
    output.append(body);
  }
}

button.addEventListener('click', stringify);
