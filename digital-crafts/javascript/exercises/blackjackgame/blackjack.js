const BJHtml = document.getElementById("appDiv");
const playerHand = document.getElementById("player-hand");
const dealerHand = document.getElementById("dealer-hand");
const dealButn = document.getElementById("deal-button");
const hitButn = document.getElementById("hit-button");
const standButn = document.getElementById("stand-button");
const message = document.getElementById("messages");
const deck = buildDeck();
// let dealerTotalHand = 0;
// let playerTotalHand = 0;
let dealerTotal = 0;
let playerTotal = 0;

function deal () {
    let _dealerTotal = 0;
    let _playerTotal = 0;
    for (let i = 1; i <= 2; i++) {
        const card = document.createElement("img");
        const card2 = document.createElement("img");
        const _card = deck.pop();
        const _card2 = deck.pop();
        card.src = `./images/${_card.rank}_of_${_card.suit}.png`;
        card2.src = `./images/${_card2.rank}_of_${_card2.suit}.png`;
        dealerHand.append(card);
        playerHand.append(card2);
        function getValue2() {
            let _pointValue = _card2.pointValue;
            if (isNaN(_pointValue)) {
                if(_pointValue == "ace"){
                return 11;
                }
            return 10;
            }
            return parseInt(_pointValue);
        }
        _playerTotal += getValue2(_card2);
        function getValue() {
            let _pointValue = _card.pointValue;
            if (isNaN(_pointValue)) {
                if(_pointValue == "ace"){
                    return 11;
                }
                return 10;
            }
            return parseInt(_pointValue);
        }
        _dealerTotal += getValue(_card);
        
    }
    dealerTotal += _dealerTotal;
    playerTotal += _playerTotal;
    console.log(dealerTotal);
    console.log(playerTotal);
}

function hit () {
    let _dealerTotal = dealerTotal;
    let _playerTotal = playerTotal;
    for (let i = 1; i <= 1; i++) {
        const card = document.createElement("img");
        const card2 = document.createElement("img");
        const _card = deck.pop();
        const _card2 = deck.pop();
        card.src = `./images/${_card.rank}_of_${_card.suit}.png`;
        card2.src = `./images/${_card2.rank}_of_${_card2.suit}.png`;
        dealerHand.append(card);
        playerHand.append(card2);
        _playerTotal += getValue2(_card2);
        _dealerTotal += getValue(_card);
        function getValue2() {
            let _pointValue = _card2.pointValue;
            if (isNaN(_pointValue)) {
                if(_pointValue == "ace"){
                return 11;
                }
            return 10;
            }
            return parseInt(_pointValue);
        }
        _playerTotal += getValue2(_card2);
        function getValue() {
            let _pointValue = _card.pointValue;
            if (isNaN(_pointValue)) {
                if(_pointValue == "ace"){
                    return 11;
                }
                return 10;
            }
            return parseInt(_pointValue);
        }
        _dealerTotal += getValue(_card);
        
    }
    dealerTotal += _dealerTotal;
    playerTotal += _playerTotal;
    
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



function stand () {
       if (playerTotal <= 21 && playerTotal > dealerTotal || playerTotal < dealerTotal && dealerTotal > 21) {
        message.innerText = "You Win!";
       } else if (playerTotal < dealerTotal && dealerTotal < 21 || playerTotal > 21) {
        message.innerText = "You Lose";
       } else if (playerTotal === dealerTotal) {
        message.innerText = "Draw!";
       }
}
    


standButn.addEventListener('click', stand);
hitButn.addEventListener('click', hit);
dealButn.addEventListener('click', deal);

