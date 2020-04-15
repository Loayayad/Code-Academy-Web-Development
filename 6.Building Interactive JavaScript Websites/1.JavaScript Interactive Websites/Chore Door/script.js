let doorImagie1 = document.getElementById('door1');
let doorImagie2 = document.getElementById('door2');
let doorImagie3 = document.getElementById('door3');
let startButton = document.getElementById('start');

let botDoorPath = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/robot.svg';
let beachDoorPath = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/beach.svg';
let spaceDoorPath = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/space.svg';
let closedDoorPath = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/closed_door.svg';

let numClosedDoors = 3;
let currentlyPlaying = true;

let openDoors1;
let openDoors2;
let openDoors3;

let isBot = door => {

    if (door === botDoorPath) {

        return true;
    } else {
        return false;

    }
}

let isClicked = door => {

    if (door === closedDoorPath) {
        return false;
    } else {
        return true;
    }

};

let playDoor = door => {

    numClosedDoors--;

    if (numClosedDoors === 0) {

        gameOver('win');
    } else if (isBot(door)) {
        gameOver();

    }

};

let randomChoreDoorGenerator = () => {

    let choreDoor = Math.floor(Math.random() * 3);

    if (choreDoor === 0) {

        openDoors1 = botDoorPath;
        openDoors2 = beachDoorPath;
        openDoors3 = spaceDoorPath;

    } else if (choreDoor === 1) {
        openDoors2 = botDoorPath;
        openDoors3 = beachDoorPath;
        openDoors1 = spaceDoorPath;

    } else {
        openDoors3 = botDoorPath;
        openDoors1 = beachDoorPath;
        openDoors2 = spaceDoorPath;

    }
};

doorImagie1.onclick = () => {

    if (!isClicked(doorImagie1.src) && currentlyPlaying === true) {
        doorImagie1.src = openDoors1;
        playDoor(doorImagie1.src);
    }

};

doorImagie2.onclick = () => {

    if (!isClicked(doorImagie2.src) && currentlyPlaying === true) {
        doorImagie2.src = openDoors2;
        playDoor(doorImagie2.src);
    }
};

doorImagie3.onclick = () => {

    if (!isClicked(doorImagie3.src) && currentlyPlaying === true) {
        doorImagie3.src = openDoors3;
        playDoor(doorImagie3.src);
    }
};

startButton.onclick = () => {
    if (currentlyPlaying === false) {
        startRound();
    }
};

let startRound = () => {

    doorImagie1.src = closedDoorPath;
    doorImagie2.src = closedDoorPath;
    doorImagie3.src = closedDoorPath;
    numClosedDoors = 3;
    startButton.innerHTML = 'Good luck!';
    currentlyPlaying = true;
    randomChoreDoorGenerator();


};

let gameOver = status => {

    if (status === 'win') {
        startButton.innerHTML = 'You win! Play again?';
    } else {
        startButton.innerHTML = 'Game over! Play again?';
    }
    currentlyPlaying = false;

};

startRound();