//integer
var integer = 1;


//string
var string = 'dog';


//boolean
var boolean = true;




//arrays and objects have key (index) and values pairs

//arays have integer as keys
var computers = ["server", "desktop", "tablet"];
//is a shortcut for ..
var computers = [0: "server", 1: "desktop", 2: "tablet"];
computers[0] = "server";

//objects have string as keys
var car = {
    "make": "Nissan",
    "model": "Terrano",
    "engine": "3.5l"
};

car.make = "Nissan";
var carDetails = {
    "make": "Nissan",
    "model": "Terrano",
    "engine": {
        "bhp": "160",
        "size": "3.5l",
        "turbo": true
    }
};
carDetails.engine.turbo = true




//function definition used to create code templates https://github.com/mariusbanea/web-developers-toolkit/blob/master/js/functions-and-objects-theory-with-examples.js
/*
The functions are a set of instructions ready to be reused multiple times (is a like a recipe in a cook book)

 function components:
 -- function name (ex: "addingNumbers") (example: like a the recipe title)
 -- input parameters or arguments (ex: "parameter1", "parameter2") (example: like a set of ingredients in a recipe)
 -- output parameters or arguments (ex: "result") (example: like the description of what dish gets cooked from that recipe)
 -- some set of instructions to convert the imput parameters into output (ex: "var result = parameter1 + parameter2;") (example: like the steps to cook the ingredients to create a dish in a recipe)

function definition:
*/
var addingNumbers = function (parameter1, parameter2) {
    var result = parameter1 + parameter2;
    return result;
};
//function usage or call (example: like cooking a recipe from the cook book)
addingNumbers(3, 4); //result is 7
addingNumbers(2, 9); //result is 11
