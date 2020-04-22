const { checkInventory, processPayment, shipOrder } = require('./library.js');

const order = {
    items: [['sunglasses', 1], ['bags', 2]],
    giftcardBalance: 80.82
};

checkInventory(order)
    .then((resolvedValueArray) => {
        // Write the correct return statement here:
        return processPayment(resolvedValueArray);
    })
    .then((resolvedValueArray) => {
        // Write the correct return statement here:
        return shipOrder(resolvedValueArray);
    })
    .then((successMessage) => {
        console.log(successMessage);
    })
    .catch((errorMessage) => {
        console.log(errorMessage);
    });


    //Mistake 1: Nesting promises instead of chaining them. 
    //Mistake 2: Forgetting to return a promise.

//without refactor
    /*
      
    const {checkInventory, processPayment, shipOrder} = require('./library.js');

const order = {
  items: [['sunglasses', 1], ['bags', 2]],
  giftcardBalance: 79.82
};

// Refactor the code below:

checkInventory(order)
    .then((resolvedValueArray) => {
        processPayment(resolvedValueArray)
            .then((resolvedValueArray) => {
                shipOrder(resolvedValueArray)
                    .then((successMessage) => {
                        console.log(successMessage);
                    });
            });
    });
     
     */