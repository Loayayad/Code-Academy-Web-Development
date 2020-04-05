// kelvin tempreture
let kelvin = 293;

//celsius tempreture
let celsius = kelvin - 273;

//calculating fahrenheit tempreture
let fahrenheit = celsius*(9/5)+32;
fahrenheit = Math.floor(fahrenheit);

let newton = Math.floor(celsius*(33/100));

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit and ${newton} in newton.`);
