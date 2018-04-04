## Debugging tools (https://www.w3schools.com/js/js_debugging.asp)
* console.log() or alert()
    * If your browser supports debugging, you can use console.log() to display JavaScript values in the debugger window
* debugger()
    * The debugger keyword stops the execution of JavaScript, and calls (if available) the debugging function.
    * This has the same function as setting a breakpoint in the debugger.
    * If no debugging is available, the debugger statement has no effect.
    * With the debugger turned on, this code will stop executing before it executes the third line.
* web development tools + breaking points
    * In the debugger window, you can set breakpoints in the JavaScript code.
    * At each breakpoint, JavaScript will stop executing, and let you examine JavaScript values.
    * After examining values, you can resume the execution of code (typically with a play button).
* use strict
    * used to display logical errors (not only syntax ones) like any assignment to a non-writable property, a getter-only property, a non-existing property, a non-existing variable, or a non-existing object.
* JS Lint (https://www.jslint.com)
    * takes a JavaScript source and scans it. If it finds a problem, it returns a message describing the problem and an approximate location within the source. The problem is not necessarily a syntax error, although it often is. JSLint looks at some style conventions as well as structural problems. It does not prove that your program is correct. It just provides another set of eyes to help spot problems.
* for performance Web Dev tools > Network / Timeline / Audit


## Debugging strategies
* debugging level 1 => check if JS syntax is correct (check console in Web Dev)
* debugging level 2 => check if the targeting is working (check the connection between the HTML element and equivalent JS functionality ==> alert("here"); inside the function)
* debugging level 3 => check if the logic makes sense (check if the JS functionality returns what we expect ==> alert(VALUE-NAME); inside the function)

Example: trying to fix the remote for a TV
    * --> make sure that your TV remote has batteries
    * --> make sure that your remote connects to your own TV
    * --> make sure that when you click on the volume up button on your remote, you don't get to change channels or similar

## Other debugging strategies
* Check the logic inside the functions and objects (variable definitions, ifs, loops, etc. )
* Check the data flow between the code elements (functions / objects / components)
* Check the Big-O complexity (https://en.wikipedia.org/wiki/Big_O_notation)
