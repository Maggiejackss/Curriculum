const BJHtml = document.getElementById("appDiv");
const playerHand = document.getElementById("player-hand");
const dealerHand = document.getElementById("dealer-hand");
const dealButn = document.getElementById("deal-button");
const hitButn = document.getElementById("hit-button");
const standButn = document.getElementById("stand-button");
const deck = buildDeck();
console.log(deck);
function deal () {
    for (let i = 1; i <= 2; i++) {
        const card = document.createElement("img");
        const card2 = document.createElement("img");
        const _card = deck.pop();
        const _card2 = deck.pop();
        card.src = `./images/${_card.rank}_of_${_card.suit}.png`;
        card2.src = `./images/${_card2.rank}_of_${_card2.suit}.png`;
        dealerHand.append(card);
        playerHand.append(card2); 
    }
}
function hit () {
    for (let i = 1; i <= 1; i++) {
        const card = document.createElement("img");
        const card2 = document.createElement("img");
        const _card = deck.pop();
        const _card2 = deck.pop();
        playerHand.array.forEach(pointValue => {
            playerTotalHand += pointValue
        });
        dealerHand.array.forEach(pointValue => {
            dealerTotalHand += pointValue
        });
        card.src = `./images/${_card.rank}_of_${_card.suit}.png`;
        card2.src = `./images/${_card2.rank}_of_${_card2.suit}.png`;
        dealerHand.append(card);
        playerHand.append(card2);
    }
}



function createCard (rank, suit) {
    const card = {
        rank: rank,
        suit: suit,
        pointValue: rank > 10 ? 10 : rank,
      };

    return card;
}
function buildDeck () {
    const deck = [];
    const suits = ["hearts", "spades", "clubs", "diamonds"];
    const ranks = ["ace", 2, 3, 4, 5, 6, 7, 8, 9, 10, "jack", "queen", "king"];

    for (let suit of suits) {
        for (const rank of ranks) {
            const card = createCard(rank, suit);
            deck.push(card);
        }
    }
    deck.sort(function() {return 0.5 - Math.random();})
    return deck;
    
}

const dealerhand = [];
const playerhand = [];

function stand () {
    const dealerTotalHand = 0;
    const playerTotalHand = 0;
    const message = document.getElementById("messages"); 
    console.log(dealerTotalHand);
    playerHand.array.forEach(pointValue => {
        playerTotalHand += pointValue
    });
    dealerHand.array.forEach(pointValue => {
        dealerTotalHand += pointValue
    });
    
    if (playerTotalHand === 21 || playerTotalHand > dealerTotalHand) {
        message.innerText = "You Win!";
    } else if (playerTotalHand < dealerTotalHand || playerTotalHand > 21) {
        message.innerText = "You Lose!";
    } else if (playerTotalHand === dealerTotalHand) {
        message.innerText = "Draw!";
    }
}

standButn.addEventListener('click', stand);
hitButn.addEventListener('click', hit);
dealButn.addEventListener('click', deal);

