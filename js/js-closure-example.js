function showName (firstName, lastName) {
    var nameIntro = "My name is ";
    // this inner function has access to the outer function's variables, including the parameter
    function makeFullName () {
        return nameIntro + firstName + " " + lastName;
    }

    return makeFullName ();
}
showName ("James", "Bond"); // Your name is Michael Jackson
