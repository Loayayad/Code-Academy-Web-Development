// Write your code here:
function convertToBaby(animals) {

    for (let i = 0; i < animals.length; i++) {
        animals[i] = 'baby ' + animals[i];

    }
    return animals;
}







// When you're ready to test your code, uncomment the below and run:

const animals = ['panda', 'turtle', 'giraffe', 'hippo', 'sloth', 'human'];

console.log(convertToBaby(animals))

