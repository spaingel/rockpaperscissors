const display = document.querySelector('body');
const roundResult = document.createElement('div');
roundResult.setAttribute('id', 'roundresult');
display.appendChild(roundResult);

const p1Wins = document.querySelector('#p1')
const cpuWins = document.querySelector('#cpu')

//GERAR A ESCOLHA DO CPU
function computerPlay() { 
let computerChoice = Math.floor(Math.random() * 3);
if (computerChoice === 0) {
    computerChoice = 'ROCK'
}
else if (computerChoice === 1) {
    computerChoice = 'PAPER'
}
else { computerChoice = 'SCISSORS'}

return computerChoice;
};

//INPUT DE JOGADOR 1 E COMPARAR A INPUT DE CPU
function singleRound() {
if ((playerSelection === 'ROCK' && computerSelection === 'SCISSORS') || 
    (playerSelection === 'PAPER' && computerSelection === 'ROCK') ||
    (playerSelection === 'SCISSORS' && computerSelection === 'PAPER')){
        vencedor = 'P1'
        roundResult.textContent = ('P1 GANHOU: ' + playerSelection + ' vs ' + computerSelection);
        P1score++
        p1Wins.textContent = P1score;
        theWinnerIs();
        return vencedor;   
}
else if ((computerSelection === 'ROCK' && playerSelection === 'SCISSORS') || 
        (computerSelection === 'PAPER' && playerSelection === 'ROCK') ||
        (computerSelection === 'SCISSORS' && playerSelection === 'PAPER')){
            vencedor = 'CPU'
            roundResult.textContent = ('CPU GANHOU: ' + playerSelection + ' vs ' + computerSelection);
            CPUscore++
            cpuWins.textContent = CPUscore;
            theWinnerIs();
            return vencedor;   
}
else if (playerSelection === computerSelection) {
            vencedor = 'empate'
            roundResult.textContent = ('EMPATE: ' + playerSelection + ' vs ' + computerSelection);
            return vencedor;
    }
else {alert('ERROR')}
}

let playerSelection
let computerSelection
let vencedor;
let P1score = 0;
let CPUscore = 0;

let btnrock = document.querySelector('#btnrock');
btnrock.addEventListener('click', () => {
    playerSelection = 'ROCK';
    computerSelection = computerPlay();
    singleRound();
});
let btnpaper = document.querySelector('#btnpaper');
btnpaper.addEventListener('click', () => {
        playerSelection = 'PAPER'
        computerSelection = computerPlay();
        singleRound();
});
let btnscissors = document.querySelector('#btnscissors');
btnscissors.addEventListener('click', () => {
    playerSelection = 'SCISSORS'
    computerSelection = computerPlay();
    singleRound();
});

//DIVULGAÇÃO DO VENCEDOR
               
function theWinnerIs() {
    if (P1score === 5) {
        alert('P1 ganhou com um total de '+P1score+ ' pontos!!')
    }
    if (CPUscore === 5) {
        alert('CPU ganhou com um total de '+CPUscore+ ' pontos!!')
    }
}