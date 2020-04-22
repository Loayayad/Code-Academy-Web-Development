const { checkInventory } = require('./library.js');

const order = [['sunglasses', 1], ['bags', 2]];

// Write your code below:


const handleSuccess = (value) => {
    console.log(value);
}

const handleFailure = (value) => {
    console.log(value);
}

checkInventory(order).then(handleSuccess, handleFailure);

//with catch 
//checkInventory(order).then(handleSuccess).catch(handleFailure);