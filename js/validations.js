function checkInteger(inputInteger) {
    let outputValue = inputInteger;
    if (inputInteger == "") {
        outputValue = 0;
    }
    if (inputInteger === undefined) {
        outputValue = 0;
    }
    if (inputInteger == null) {
        outputValue = 0;
    }
    return outputValue;
}

function checkString(inputString) {
    let outputText = inputString;
    if (inputString === undefined) {
        outputText = "";
    }
    if (inputString == null) {
        outputText = "";
    }
    return outputText;
}

function checkURL(inputURL) {
    let outputURL = inputURL;
    if (inputURL === undefined) {
        outputURL = "/";
    }
    if (inputURL == null) {
        outputURL = "/";
    }
    return outputURL;
}

// how to use
console.log(checkInteger(25));
console.log(checkString("hey"));
console.log(checkURL("google.com"));
