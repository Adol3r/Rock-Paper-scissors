function getComputerChoices(){
    return Math.floor(Math.random() * 3) + 1;
}
// 1 = rock, 2 = paper, 3 = scissors
function getHumanChoices(){
    return prompt("Choose Rock/Paper/Scissors:").toUpperCase();
}

function playRound(humanChoice, compChoice){

    let p;

    if (humanChoice === "ROCK"){
        if (compChoice == 1)
            console.log("Draw!")
        else if (compChoice == 2)
            p = 0;
        else if (compChoice == 3)
            p = 1;
    }

    else if (humanChoice === "PAPER"){
        if (compChoice == 2)
            console.log("Draw!")
        else if (compChoice == 3)
            p = 0;
        else if (compChoice == 1)
            p = 1;
    }

    else {
        if (compChoice == 3)
            console.log("Draw!")
        else if (compChoice == 1)
            p = 0;
        else if (compChoice == 2)
            p = 1;
    }   

    const options = ["Rock", "Paper", "Scissors"];
    compString = options[compChoice - 1].toUpperCase();

    if (p == 0)
        console.log(`You lose! ${compString} beats ${humanChoice}`); 
    else
        console.log(`You Win! ${humanChoice} beats ${compString}`); 

    return p;
}

function playGame(c, h){

    for (let i = 0; i < 5; i++){
        
        let compChoice = getComputerChoices();
        let humanChoice = getHumanChoices();

        let p = playRound(humanChoice, compChoice);
        if (p == 0)
            c++;
        else
            h++;
    }

    if (c > h)
        console.log(`Computer wins with ${c} points!`)
    else
        console.log(`You win with ${h} points!`)

}

let compScore = 0;
let humanScore = 0;

playGame(compScore, humanScore);
