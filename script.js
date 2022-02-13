const rock = 1, scissors = 2, paper = 3;
let playerScore = 0, computerScore = 0, status = "";

let fillScore = (playerScore, computerScore) => {
    let player = document.querySelector(".score .you");
    player.innerText = playerScore;

    let computer = document.querySelector(".score .computer");
    computer.innerText = computerScore;
}

let fillResultPick = (playerHand, computerHand) => {
    let player = document.querySelector(".result-pick .you");
    player.innerText = playerHand;

    let computer = document.querySelector(".result-pick .computer");
    computer.innerText = computerHand;
}

let check = (playerHand, computerHand) => {

    if(playerHand === rock) {
        if(computerHand == scissors) {
            playerScore += 1;
            status = "Menang";
        } else if(computerHand == paper) {
            computerScore += 1;
            status = "kalah";
        } else {
            status = "seri";
        }
    } else if(playerHand === scissors) {
        if(computerHand == rock) {
            computerScore += 1;
            status = "kalah";
        } else if(computerHand == paper) {
            playerScore += 1;
            status = "menang";
        } else {
            status = "seri";
        }
    } else {
        if(computerHand == rock) {
            playerScore += 1;
            status = "menang";
        } else if(computerHand == scissors) {
            computerScore += 1;
            status = "kalah";
        } else {
            status = "seri";
        }
    }

    fillScore(playerScore, computerScore);
    // console.log("player (" + playerHand + ") vs computer (" + computerHand + ") ==> " + result);
}

let handToNumber = (hand) => {
    hand = hand.toLowerCase();
    return (hand == "hand rock") ? rock : (hand == "hand scissors") ? scissors : paper;
}

let numberToHand = (number) => {
    return (number == rock) ? "Rock" : (number == scissors) ? "Scissors" : "Paper";
}

let computerHand = () => {
    return Math.floor(Math.random() * 3) + 1;
}

let choose = () => {
    const hand = document.querySelectorAll(".choose-hand .hand");

    hand.forEach(btn => {
        btn.addEventListener('click', e => {
            const _playerHand = handToNumber(e.target.className);
            let _computerHand = computerHand();

            fillResultPick(numberToHand(_playerHand), numberToHand(_computerHand));
            check(_playerHand, _computerHand);

            alert(status.toUpperCase());
        });
    });
}

choose();