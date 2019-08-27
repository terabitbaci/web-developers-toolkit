# Lean Development Example

A central concept of the Lean Development is the Code-Test-Learn feedback loop. The point is to develop a product quickly and put it into users’ hands to receive feedback. This feedback is then analyzed to discover what features customers actually want and to let the company see if the product has demand.

Examle of test-as-you-code strategy:

1. create an array and test to see if there are any errors

    ```javascript
    let carArray = ["ferarri", "merc", "landy", "nissan"];
    console.log(carArray);
    ```

2. create basic function and test to see if the function has no errors and it is connected to the global array

    ```javascript
    let carArray = ["ferarri", "merc", "landy", "nissan"];

    function myGarrage (inputArray) {
          return inputArray;
    }

    console.log(myGarrage(carArray));
    ```

3. create an output variable inside the function and test to see the if the connection with the ouput variable works

    ```javascript
    let carArray = ["ferarri", "merc", "landy", "nissan"];

    function myGarrage (inputArray) {
        let output = "In my garrage I have ";
        return output;
    }

    console.log(myGarrage(carArray));
    ```
4. create for loop inside the function and test to see if you can idetify the elements inside it

    ```javascript
    let carArray = ["ferarri", "merc", "landy", "nissan"];

    function myGarrage (inputArray) {
        let output = "In my garrage I have ";
        for(let i =0; i<inputArray.length; i++) {
            console.log(inputArray[i]);
        }
        return output;
    }

    console.log(myGarrage(carArray));
    ```

5. add the for loop items to the output and test everyting

    ```javascript
    let carArray = ["ferarri", "merc", "landy", "nissan"];

    function myGarrage (inputArray) {
        let output = "In my garrage I have ";
        for(let i =0; i<inputArray.length; i++) {
            //console.log(inputArray[i]);
            output += inputArray[i] + ", ";
        }
        return output;
    }

    console.log(myGarrage(carArray));
    ```
