// Write your code here:
function reverseArray(sentence) {

    for (let i = 0; i < sentence.length / 2; i++) {

        let temp = sentence[i];
        sentence[i] = sentence[sentence.length - 1 - i];
        sentence[sentence.length - 1 - i] = temp;
    }
    return sentence;
}

function sortYears(years) {

    years = reverseArray(years.sort());
    return years;
}







// Feel free to uncomment the below code to test your function:

const years = [1970, 1999, 1951, 1982, 1963, 2011, 2018, 1922]

console.log(sortYears(years))
// Should print [ 2018, 2011, 1999, 1982, 1970, 1963, 1951, 1922 ]

