/// node
/* first way*/

/*let Menu = {};
Menu.specialty = "Roasted Beet Burger with Mint Sauce";

module.exports = Menu; 
*/
let Airplane = {};

Airplane.myAirplane = "StarJet";

module.exports = Airplane;

/* second way */

module.exports = {
    myAirplane: "CloudJet",
    displayAirplane: function () {
        return this.myAirplane;
    }
};

/// ES6

/*first way */

const Airplane = {

}

Airplane.availableAirplanes = [{
    name: 'AeroJet',
    fuelCapacity: 800
}, {
    name: 'SkyJet',
    fuelCapacity: 500,
}]

export default Airplane;


/** second way */



let availableAirplanes = [{
    name: 'AeroJet',
    fuelCapacity: 800,
    availableStaff: ['pilots', 'flightAttendants', 'engineers', 'medicalAssistance', 'sensorOperators']
}, {
    name: 'SkyJet',
    fuelCapacity: 500,
    availableStaff: ['pilots', 'flightAttendants']
}]

let flightRequirements = {
    requiredStaff: 4,
}

function meetsStaffRequirements(availableStaff, requiredStaff) {
    if (availableStaff.length >= requiredStaff) {
        return true;
    } else {
        return false;
    }
}

export { availableAirplanes, flightRequirements, meetsStaffRequirements };


/**third way */

export let availableAirplanes = [
    {
        name: 'AeroJet',
        fuelCapacity: 800,
        availableStaff: ['pilots', 'flightAttendants', 'engineers', 'medicalAssistance', 'sensorOperators'],
        maxSpeed: 1200,
        minSpeed: 300
    },
    {
        name: 'SkyJet',
        fuelCapacity: 500,
        availableStaff: ['pilots', 'flightAttendants'],
        maxSpeed: 800,
        minSpeed: 200
    }
];

export let flightRequirements = {
    requiredStaff: 4,
    requiredSpeedRange: 700
};

export function meetsStaffRequirements(availableStaff, requiredStaff) {
    if (availableStaff.length >= requiredStaff) {
        return true;
    } else {
        return false;
    }
};

export function meetsSpeedRangeRequirements(maxSpeed, minSpeed, requiredSpeedRange) {
    let range = maxSpeed - minSpeed;
    if (range > requiredSpeedRange) {
        return true;
    } else {
        return false;
    }
};

/**fouth way */

let availableAirplanes = [
    {
        name: 'AeroJet',
        fuelCapacity: 800,
        availableStaff: ['pilots', 'flightAttendants', 'engineers', 'medicalAssistance', 'sensorOperators'],
        maxSpeed: 1200,
        minSpeed: 300
    },
    {
        name: 'SkyJet',
        fuelCapacity: 500,
        availableStaff: ['pilots', 'flightAttendants'],
        maxSpeed: 800,
        minSpeed: 200
    }
];

let flightRequirements = {
    requiredStaff: 4,
    requiredSpeedRange: 700
};

function meetsStaffRequirements(availableStaff, requiredStaff) {
    if (availableStaff.length >= requiredStaff) {
        return true;
    } else {
        return false;
    }
};

function meetsSpeedRangeRequirements(maxSpeed, minSpeed, requiredSpeedRange) {
    let range = maxSpeed - minSpeed;
    if (range > requiredSpeedRange) {
        return true;
    } else {
        return false;
    }
};

export { availableAirplanes as aircrafts, flightRequirements as flightReqs, meetsStaffRequirements as meetsStaffReqs, meetsSpeedRangeRequirements as meetsSpeedRangeReqs };

/**fifth way */

export let availableAirplanes = [
    {
        name: 'AeroJet',
        fuelCapacity: 800,
        availableStaff: ['pilots', 'flightAttendants', 'engineers', 'medicalAssistance', 'sensorOperators'],
        maxSpeed: 1200,
        minSpeed: 300
    },
    {
        name: 'SkyJet',
        fuelCapacity: 500,
        availableStaff: ['pilots', 'flightAttendants'],
        maxSpeed: 800,
        minSpeed: 200
    }
];

export let flightRequirements = {
    requiredStaff: 4,
    requiredSpeedRange: 700
};

export function meetsStaffRequirements(availableStaff, requiredStaff) {
    if (availableStaff.length >= requiredStaff) {
        return true;
    } else {
        return false;
    }
};

function meetsSpeedRangeRequirements(maxSpeed, minSpeed, requiredSpeedRange) {
    let range = maxSpeed - minSpeed;
    if (range > requiredSpeedRange) {
        return true;
    } else {
        return false;
    }
};

export default meetsSpeedRangeRequirements;