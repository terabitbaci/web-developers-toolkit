// Original solutions by Teresa B. https://github.com/terabitbaci/
const ARRAY = [
    "hockey",
    "lacrosse",
    "curling"
];





console.log('use a for loop to loop through the ARRAY and console the contents');

for (let i = 0; i < ARRAY.length; i++) {
    console.log(`fun sport ${i}: ${ARRAY[i]}`);
}

console.log('- - - - - - - - - -');





console.log('use a forEach to loop through the ARRAY and console the contents');

// loop through the ARRAY and print the contents to the console using .forEach (https://www.w3schools.com/jsref/jsref_forEach.asp)
// syntax: ARRAY.forEach((itemGoesHere, indexGoesHere)

ARRAY.forEach((SPORT, NUM) => console.log(`fun sport ${NUM}: ${SPORT}`));

console.log('- - - - - - - - - -');





console.log('use a Map to loop through the ARRAY and console the contents');

function sports(item) {
    // console.log('ES5 --> we are playing ' + item + '!');
    console.log(`ES6 --> we are playing ${item} !`);
};

ARRAY.map(sports);

console.log('- - - - - - - - - -');
