// Original solutions by Teresa B. https://github.com/terabitbaci/

const MyData = {
    fruit: "apple",
    drink: "water",
    dessert: "cookie"
};






console.log('use a For to loop through the OBJECT and console the contents');


for (let key in MyData) {
    console.log(`${key}: ${MyData[key]}`);
}

console.log('- - - - - - - - - -');





console.log('use a forEach to loop through the OBJECT and console the contents');

Object.keys(MyData).forEach(key => console.log(`${key}: ${MyData[key]}`));

console.log('- - - - - - - - - -');




// objects inside object

let contents = {
    nails: 40,
    bolts: 35,
    washers: 12,
    rings: {
        split: 5,
        washer: 33
    }
};

console.log('objects inside object --> return 33');

console.log(`${contents.rings.washer}`);

console.log('- - - - - - - - - -');
