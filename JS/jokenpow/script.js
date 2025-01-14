const rock     = document.getElementById('rock');
const paper    = document.getElementById('paper');
const scissors = document.getElementById('scissors');

const result       = document.querySelector('.result')
const playerScore  = document.getElementById('player-score');
const machineScore = document.getElementById('machine-score');

const GAME_OPTIONS = {
    ROCK: 'paper',
    PAPER: 'paper',
    SCISSORS: 'scissors'
}

let player = 0;
let machineS = 0;

const playPlayer = (humanChoice) => {
    //console.log(humanChoice);    
    //console.log(playMachine())
    playGame(humanChoice, playMachine())
}

const playMachine = () => {
    const choices = [GAME_OPTIONS.ROCK, GAME_OPTIONS.PAPER, GAME_OPTIONS.SCISSORS]
    const randomNumber = Math.floor(Math.random() * 3)

    return choices[randomNumber]
}

const playGame = (human, machine) => {
    console.log(`Player: ${human} Machine: ${machine}`);

    if(human === machine){
        result.innerHTML = 'Deu empate'
    } else if(human === GAME_OPTIONS.PAPER    && machine === GAME_OPTIONS.ROCK     ||
              human === GAME_OPTIONS.ROCK     && machine === GAME_OPTIONS.SCISSORS ||
              human === GAME_OPTIONS.SCISSORS && machine === GAME_OPTIONS.PAPER
        ){
        player++
        playerScore.innerHTML = player;
        result.innerHTML = 'Você ganhou!'
    }else {
        machineS++
        machineScore.innerHTML = machineS;
        result.innerHTML = 'Você perdeu!'
    }
    
}