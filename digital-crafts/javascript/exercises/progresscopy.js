const appDiv = document.getElementById('app')

function renderProgress () {
    const blocks = document.createElement("div");
    const number = document.createElement("div");
    const backButn = document.createElement("button");
    const forwardButn = document.createElement("button");
    // const block1 = document.createElement("div");
    // const block2 = document.createElement("div");
    // const block3 = document.createElement("div");
    // const block4 = document.createElement("div");
    // const block5 = document.createElement("div");
    // const style = document.querySelectorAll("#block1", "#block2", "block3", "#block4", "#block5");
    // style.className = "blocks";
    // block1.className = "blocks";
    // block2.className = "blocks";
    // block3.className = "blocks";
    // block4.className = "blocks";
    // block5.className = "blocks";
    // blocks.className = "blockline";
    backButn.innerText = "back";
    forwardButn.innerText = "forward";
    forwardButn.id = "forward";
    let position = 1;
    number.innerText = position;
    let blockPosition = 1;
    
    const body = document.getElementById("cont1");
    body.appendChild(blocks);
    function addblocks () {
        for (let i = 1; i <= 5; i++) {
            const block = document.createElement("div");
            block.className = "blocks";
            document.getElementById(blocks).appendChild(block);
        }
    }
    addblocks();
    // blocks.appendChild(block1);
    // blocks.appendChild(block2);
    // blocks.appendChild(block3);
    // blocks.appendChild(block4);
    // blocks.appendChild(block5);
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