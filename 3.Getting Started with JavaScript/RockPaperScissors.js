const getUserChoice = userInput => {
    userInput.toLowerCase();

    if (userInput === 'rock' || userInput === 'scissors' || userInput === 'paper' || userInput === 'bomb') {
        return userInput;
    } else {
        return 'Invaled Input';
    };
}

const getComputerChoice = () => {
    const computerChoice = Math.floor(Math.random() * 3);
    switch (computerChoice) {
        case 0:
            return 'rock';
            break;
        case 1:
            return 'paper';
            break;
        case 2:
            return 'scissors';
            break;
        default:
            console.log('Invalid Input');
    }
}

const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) {
        return 'the game was a tie.';
    } else if (userChoice === 'rock') {

        return computerChoice === 'paper' ? 'the computer won.' : 'the user won.';

    } else if (userChoice === 'paper') {

        return computerChoice === 'scissors' ? 'the computer won.' : 'the user won.';

    } else if (userChoice === 'scissors') {

        return computerChoice === 'rock' ? 'the computer won.' : 'the user won.';

    } else if (userChoice === 'bomb') {
        return 'the user won.';
    }
}

const playGame = () => {
    const userChoice = getUserChoice('bomb');
    const computerChoice = getComputerChoice();
    console.log(userChoice);
    console.log(computerChoice);
    console.log(determineWinner(userChoice, computerChoice));
}
playGame();