'use strict';
let drivingLicense = false;
const drivingTest = 'pass';
if (drivingLicense || drivingTest === 'pass') {
    console.log('you can drive')
}
else {
    console.log('you can not drive');
}



/////////////function

function fruitProcessor(apples, oranges) {
    console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges`;
    return juice;
}

console.log(fruitProcessor(2, 3));
//fruitProcessor(2, 3);

const appleOrangeJuice = fruitProcessor(5, 3);
console.log(appleOrangeJuice);
