const getRandomCard =() =>{
   let randomNum = Math.floor(Math.random()*13)+ 1;
    if(randomNum === 1){
        return 11;
    }else if(randomNum > 10){
        return 10;
    }else{
    return randomNum;
    }
}

let player = {
    name: "per",
    chips: 500
}

const playerEl = document.querySelector("#player-el")
const messageEl = document.querySelector("#message-el");
const sumEl = document.querySelector("#sum-el");
const cardEl = document.querySelector("#card-el");

let cards = [];
let sum = 0;
let message = "";
let hasBlackJack = false;
let isAlive = false;

playerEl.textContent = player.name + ": $" + player.chips;

const startGame = ()=>{
    isAlive = true;
    hasBlackJack = false;
    let fCard = getRandomCard();
    let lCard = getRandomCard();
    cards = [fCard, lCard];
    sum = fCard + lCard;
    renderGame();
}

const renderGame = () =>{

    sumEl.textContent = "Sum: " + sum;
    cardEl.textContent ="Cards: ";
    for(let i = 0; i < cards.length; i++){
        cardEl.textContent += cards[i] + " ";
}

    if(sum <= 20){
        message ="do you want to draw another card?";
    } else if(sum === 21){
        message ="you got the blackJack!!.";
        hasBlackJack = true;
    }else{
        message ="you are out of the game!!";
        isAlive=false;
    }
    messageEl.textContent = message;

}


    
const newCard = ()=>{
if(isAlive === true && hasBlackJack === false ){
    let nCard = getRandomCard();
    sum += nCard;
    cards.push(nCard);
    renderGame();
}else{
    console.log("Start the game to get a new card.");
    // messageEl.textContent = "Start the game to get a new card.";
}
}



