// Write your code here:

function findMyKeys(randomStuff) {

    return randomStuff.findIndex(key => key === 'keys');
}







// Feel free to comment out the code below to test your function

const randomStuff = ['credit card', 'screwdriver', 'receipt', 'gum', 'keys', 'used gum', 'plastic spoon'];

console.log(findMyKeys(randomStuff))
// Should print 4
