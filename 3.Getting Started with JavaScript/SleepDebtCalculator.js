const getSleepHours = day => {

    day.toLowerCase();

    return day === 'saterday' || day === 'sunday' ||
        day === 'monday' || day === 'tuesday' ||
        day === 'wednesday' || day === 'thursday' ||
        day === 'friday' ? 8 : 'Invaled';
};

const getActualSleepHours = () => {
    return getSleepHours('saterday') + getSleepHours('sunday') + getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday');
};

const getIdealSleepHours = () => {
    let idealHours = 8;
    return idealHours * 7;
};

const calculateSleepDebt = () => {

    const actualSleepHours = getActualSleepHours();
    const idealSleepHours = getIdealSleepHours();

    if (actualSleepHours === idealSleepHours) {
        console.log('You got the perfect amount of sleep.')
    } else if (actualSleepHours > idealSleepHours) {
        console.log('You got more amount of sleep than needed.')
    } else {
        console.log('You should get some rest.')
    }
};
calculateSleepDebt();
//console.log(getSleepHours('sunday'));
//console.log(getActualSleepHours());
//console.log(getIdealSleepHours());