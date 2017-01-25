//Definition:
//A closure is a function inside another function inorder to protect the scope of the inner function

//the outer (parent) function
function showName(firstName, lastName) {

    // nameIntro is global variable to the inner function but it is local to the outer function
    var nameIntro = "My name is ";

    // this inner (child) function has access to the outer (parent) function's variables, including the parameter
    function makeFullName() {
        return nameIntro + firstName + " " + lastName;
    }

    return makeFullName();
}
showName("James", "Bond"); // My name is James Bond
