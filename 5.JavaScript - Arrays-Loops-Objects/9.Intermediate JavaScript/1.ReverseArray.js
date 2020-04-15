// Write your code here:
function reverseArray(sentence) {

    for (let i = 0; i < sentence.length / 2; i++) {

        let temp = sentence[i];
        sentence[i] = sentence[sentence.length - 1 - i];
        sentence[sentence.length - 1 - i] = temp;
    }
    return sentence;
}

// When you're ready to test your code, uncomment the below and run:

const sentence = ['sense.', 'make', 'all', 'will', 'This'];

console.log(reverseArray(sentence))
// Should print ['This', 'will', 'all', 'make', 'sense.'];



