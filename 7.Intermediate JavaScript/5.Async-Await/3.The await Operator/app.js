const brainstormDinner = require('./library.js')


// Native promise version:
function nativePromiseDinner() {
    brainstormDinner().then((meal) => {
        console.log(`I'm going to make ${meal} for dinner.`);
    })
}


//nativePromiseDinner();
// async/await version:
async function announceDinner() {
    // Write your code below:
    let resolvedValue = await brainstormDinner();
    console.log(`I'm going to make ${resolvedValue} for dinner.`);

}

announceDinner();


