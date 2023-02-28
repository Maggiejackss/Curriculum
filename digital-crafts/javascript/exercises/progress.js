const appDiv = document.getElementById('app')

function renderProgress () {
    const blocks = document.createElement("div");
    blocks.className = "blocks";
    const number = document.createElement("div");
    const backButn = document.createElement("button");
    const forwardButn = document.createElement("button");
    backButn.innerText = "back";
    forwardButn.innerText = "forward";
    forwardButn.id = "forward";
    let position = 1;
    number.innerText = position;
    // let blockPosition = 1;
    
    const body = document.getElementById("cont1");
    body.appendChild(blocks);
    function addblocks() {
        for (let i = 1; i <= 5; i++) {
            const block = document.createElement("div");
            block.className = "block";
            blocks.appendChild(block);
        }
    }
    addblocks();
    body.appendChild(number);
    body.appendChild(backButn);
    body.appendChild(forwardButn);


    const move = e => {
        if (e.target.matches("#forward")) {
            position += 1;
        } else {
            position -= 1;
        } 
        // setActive(position);
        number.innerText = position;
    }
        
    const blockMove = e => {
        if (!position){
            document
        }  {
            document.getElementById("block1").className.remove("blocksRed");
        }
        
    }
        
    document.addEventListener('click', blockMove);
    document.addEventListener('click', move);
        
}


renderProgress();