const _ = {
    clamp(number, lower, upper) {
        let lowerClampedValue = Math.max(number, lower);
        let clampedValue = Math.min(lowerClampedValue, upper);
        return clampedValue;
    },
    inRange(number, start, end) {
        if (end === undefined) {
            end = start;
            start = 0;
        }
        if (start > end) {
            let temp = start;
            start = end;
            end = temp;
        }
        /*if (this.clamp(number, start, end) === number && number != end) {
            return true;
        } else {
            return false;
        }
        */
        return number >= start && number < end ? true : false;
    },
    words(sentence) {
        const arrayOfWords = sentence.split(' ');
        return arrayOfWords;
    },
    pad(string, length) {

        if (string.length >= length) {
            return string;
        }
        let startPaddingLength = Math.floor((length - string.length) / 2);
        let endPaddingLength = length - string.length - startPaddingLength;
        let paddedString = ' '.repeat(startPaddingLength) + string + ' '.repeat(endPaddingLength);
        return paddedString;
    },
    has(object, key) {
        hasValue = object[key] === undefined ? false : true;
        return hasValue;

    },
    invert(object) {

        let invertedObject = {};

        for (let key in object) {
            let originalValue = object[key];
            invertedObject = { originalValue: key }
            //console.log(`${key} : ${object[key]}`);
        }
        return invertedObject;

    },
    findKey(object, predicate) {

        for (let key in object) {

            let value = object[key];
            let predicateReturnValue = predicate(value);
            return predicateReturnValue ? key : undefined;
        }
    },
    drop(array, n) {
        if (n === undefined) {
            n = 1;
        }
        let droppedArray = array.slice(n);
        return droppedArray;

    },
    dropWhile(array, predicate) {
        let dropNumber = array.findIndex((element, index) => {
            return !predicate(element, index, array);
        })
        let droppedArray = this.drop(array, dropNumber);
        return droppedArray;
    },
    chunk(array, size) {
        let arrayChunks = [];
        if (size === undefined) {
            size = 1;
        }
        for (let i = 0; i < array.length; i += size) {
            let arrayChunk = array.slice(i, i + size);
            arrayChunks.push(arrayChunk);
        }
        return arrayChunks;
    }

}



//console.log(_.clamp(3, 1, 5));
//console.log(_.words('i am in love'));
//console.log(_.pad('hi', 6));
//var object = { 'a': { 'b': 2 } };
//console.log(_.has(object, 'a'));
//var object = { 'a': 1};
//console.log(_.invert(object));
//var array = [10, 20, 30, 40, 50];
//console.log(_.drop(array,2));
console.log(_.chunk(['a', 'b', 'c', 'd'], 2));
// Do not write or modify code below this line.
module.exports = _;