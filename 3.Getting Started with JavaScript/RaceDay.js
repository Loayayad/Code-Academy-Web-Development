let raceNumber = Math.floor(Math.random() * 1000);

const registeredEarly = true;

const age = 18;

if (registeredEarly && age > 18) {

    raceNumber += 1000;
}

if (age > 18 && registeredEarly) {
    console.log(`you will race at 9:30 am and your race number is ${raceNumber}`);
}
else if (age > 18 && !registeredEarly) {
    console.log(`you will race at 11:00 am and your race number is ${raceNumber}`);
} else if (age < 18) {
    console.log(`Youth registrants run at 12:30 pm and your race number is ${raceNumber}`);
} else {
    console.log("You should see the registration desk.")
}