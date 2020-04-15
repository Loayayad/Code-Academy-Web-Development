// Write your code here:

function shoutGreetings(greetings) {

    greetings = greetings.map(greet =>

        greet.toUpperCase() + '!'
    );

    return greetings;
}






// Feel free to uncomment out the code below to test your function!

const greetings = ['hello', 'hi', 'heya', 'oi', 'hey', 'yo'];

console.log(shoutGreetings(greetings))
// Should print [ 'HELLO!', 'HI!', 'HEYA!', 'OI!', 'HEY!', 'YO!' ]

