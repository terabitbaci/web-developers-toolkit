function checkValue(inputValue) {
    let outputValue = inputValue;
    if (inputValue == "") {
        outputValue = 0;
    }
    if (inputValue == undefined) {
        outputValue = 0;
    }
    if (inputValue == null) {
        outputValue = 0;
    }
    return outputValue;
}

function checkText(inputText) {
    let outputText = inputText;
    if (inputText == undefined) {
        outputText = "";
    }
    if (inputText == null) {
        outputText = "";
    }
    return outputText;
}

function checkURL(inputURL) {
    let outputURL = inputURL;
    if (inputURL == undefined) {
        outputURL = "/";
    }
    if (inputURL == null) {
        outputURL = "/";
    }
    return outputURL;
}
