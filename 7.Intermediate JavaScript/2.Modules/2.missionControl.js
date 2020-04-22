/* first way*/

const Airplane = require('./1-airplane.js');

function displayAirplane() {
    console.log(Airplane.myAirplane);
}

displayAirplane();

/* second way */

const Airplane = require('./2-airplane.js');

console.log(Airplane.displayAirplane());


/// ES6

/*first way */

import Airplane from './airplane';

function displayFuelCapacity() {

    Airplane.availableAirplanes.forEach((element) => {
        console.log(`Fuel Capacity of ${element.name} : ${element.fuelCapacity}`);
    })
}

displayFuelCapacity();


/** second way */

import { availableAirplanes, flightRequirements, meetsStaffRequirements } from './airplane';

function displayFuelCapacity() {

    availableAirplanes.forEach((element) => {
        console.log(`Fuel Capacity of ${element.name} : ${element.fuelCapacity}`);
    })
}

displayFuelCapacity();

function displayStaffStatus() {
    availableAirplanes.forEach(function (element) {
        console.log(element.name + ' meets staff requirements: ' + meetsStaffRequirements(element.availableStaff, flightRequirements.requiredStaff));
    });
}

displayStaffStatus();


/**third way */

import { availableAirplanes, flightRequirements, meetsStaffRequirements, meetsSpeedRangeRequirements } from './airplane';

function displayFuelCapacity() {
    availableAirplanes.forEach(function (element) {
        console.log('Fuel Capacity of ' + element['name'] + ': ' + element['fuelCapacity']);
    });
}

function displayStaffStatus() {
    availableAirplanes.forEach(function (element) {
        console.log(element['name'] + ' meets staff requirements: ' + meetsStaffRequirements(element['availableStaff'], flightRequirements['requiredStaff']));
    });
}

function displaySpeedRangeStatus() {
    availableAirplanes.forEach(function (element) {
        console.log(element.name + 'meets speed range requirements: ' + meetsSpeedRangeRequirements(element.maxSpeed, element.minSpeed, flightRequirements.requiredSpeedRange));
    });
}

displayFuelCapacity();
displayStaffStatus();
displaySpeedRangeStatus();


/**fouth way */

import { aircrafts, flightReqs, meetsStaffReqs, meetsSpeedRangeReqs } from './airplane';

function displayFuelCapacity() {
    aircrafts.forEach(function (element) {
        console.log('Fuel Capacity of ' + element['name'] + ': ' + element['fuelCapacity']);
    });
}

function displayStaffStatus() {
    aircrafts.forEach(function (element) {
        console.log(element['name'] + ' meets staff requirements: ' + meetsStaffReqs(element['availableStaff'], flightReqs['requiredStaff']));
    });
}

function displaySpeedRangeStatus() {
    aircrafts.forEach(function (element) {
        console.log(element.name + 'meets speed range requirements: ' + meetsSpeedRangeReqs(element.maxSpeed, element.minSpeed, flightReqs.requiredSpeedRange));
    });
}

displayFuelCapacity();
displayStaffStatus();
displaySpeedRangeStatus();

/**fifth way */

import { availableAirplanes, flightRequirements, meetsStaffRequirements } from './airplane';

import meetsSpeedRangeRequirements from './airplane';

function displayFuelCapacity() {
    availableAirplanes.forEach(function (element) {
        console.log('Fuel Capacity of ' + element['name'] + ': ' + element['fuelCapacity']);
    });
}

function displayStaffStatus() {
    availableAirplanes.forEach(function (element) {
        console.log(element['name'] + ' meets staff requirements: ' + meetsStaffRequirements(element['availableStaff'], flightRequirements['requiredStaff']));
    });
}

function displaySpeedRangeStatus() {
    availableAirplanes.forEach(function (element) {
        console.log(element.name + 'meets speed range requirements: ' + meetsSpeedRangeRequirements(element.maxSpeed, element.minSpeed, flightRequirements.requiredSpeedRange));
    });
}

displayFuelCapacity();
displayStaffStatus();
displaySpeedRangeStatus();
