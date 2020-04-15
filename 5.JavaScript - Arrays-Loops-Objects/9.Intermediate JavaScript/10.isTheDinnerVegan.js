// Write your code here:
function isTheDinnerVegan(dinner) {

    //method tests whether all elements in the array pass
    //the test implemented by the provided function. It returns a Boolean value.
    return dinner.every(dinner => dinner.source == 'plant');
}







// Feel free to comment out the code below to test your function

const dinner = [{ name: 'hamburger', source: 'meat' }, { name: 'cheese', source: 'dairy' }, { name: 'ketchup', source: 'plant' }, { name: 'bun', source: 'plant' }];

console.log(isTheDinnerVegan(dinner))
// Should print false

const meal = [{ name: 'arugula', source: 'plant' }, { name: 'tomatoes', source: 'plant' }, { name: 'lemon', source: 'plant' }, { name: 'olive oil', source: 'plant' }];

console.log(isTheDinnerVegan(meal));