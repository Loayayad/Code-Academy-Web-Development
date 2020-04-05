let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

let generateTarget = () => {
    return Math.floor(Math.random() * 10);
};

let compareGuesses = (user, computer, target) => {
    //user> 9? console.log('number is out of range.'):'';
    let userResult = Math.abs(target - user);
    let computerResult = Math.abs(target - computer);
    return userResult <= computerResult ? true : false;
};

let updateScore = winner => {
    winner === 'human' ? humanScore++ : computerScore++;
};

let advanceRound = () => {
    currentRoundNumber++;
};

/*let alert = user =>{
  user > 9? Alert('number is out of range.'):'';
};*/
//console.log(generateTarget());