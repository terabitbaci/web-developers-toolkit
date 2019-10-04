//integer
let integer = 1;
console.log(integer); // shows "1"


//string
let string = 'dog';
console.log(string); // shows "dog"


//boolean
let boolean = true;
console.log(boolean); // shows "true"




//arrays and objects have key (index) and values pairs

//arays have integer as keys
let computers = ["server", "desktop", "tablet"];
//is a shortcut for ..
//let computers = [0: "server", 1: "desktop", 2: "tablet"];
console.log(computers[0]); // shows "server"

//objects have string as keys
let car = {
    "make": "Nissan",
    "model": "Terrano",
    "engine": "3.5l"
};
console.log(car.make); // shows "Nissan"


let carDetails = {
    "make": "Nissan",
    "model": "Terrano",
    "engine": {
        "bhp": "160",
        "size": "3.5l",
        "turbo": true
    },
    //methods are functions living inside objects
    myCar: function () {
        return this.make + " " + this.model;
    }
};
console.log(carDetails.engine.turbo); // shows "true"
console.log(carDetails.myCar()); // shows "Nissan Terrano"




//function definition used to create code templates https://github.com/mariusbanea/web-developers-toolkit/blob/master/js/functions-and-objects-theory-with-examples.js
/*
The functions are a set of instructions ready to be reused multiple times (is a like a recipe in a cook book)

 function components:
 -- function name (ex: "addingNumbers") (example: like a the recipe title)
 -- input parameters or arguments (ex: "parameter1", "parameter2") (example: like a set of ingredients in a recipe)
 -- output parameters or arguments (ex: "result") (example: like the description of what dish gets cooked from that recipe)
 -- some set of instructions to convert the imput parameters into output (ex: "let result = parameter1 + parameter2;") (example: like the steps to cook the ingredients to create a dish in a recipe)

function definition:
*/
let addingNumbers = function (parameter1, parameter2) {
    let result = parameter1 + parameter2;
    return result;
};
//function usage or call (example: like cooking a recipe from the cook book)
console.log(addingNumbers(3, 4)); //result is 7
console.log(addingNumbers(2, 9)); //result is 11
