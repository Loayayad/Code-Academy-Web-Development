let input = 'turpentine and turtles';
const vowels = ['a', 'e', 'o', 'i', 'u']
let resultArray = [];

for (let i = 0; i < input.length; i++) {
    //console.log(input[i]);
    for (let j = 0; j < vowels.length; j++) {
        //console.log(vowels[j]);
        if (input[i] === vowels[j]) {
            if (input[i] === 'e' || input[i] === 'u') {
                resultArray.push(input[i]);
            }
            resultArray.push(input[i]);
        }
    }
}
console.log(resultArray.join(''));