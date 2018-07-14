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
1. check if there are any syntax errors in the Web Development Tools => Console
2. check if the connection between the HTML elements and jQuery triggers are working by placing a console.log("here") inside the trigger;
3. check if the jQuery trigger connects to the corresponding function by placing console.log("here") inside the function
4. check if for jQuery nested triggers and avoid them
5. check if the data submitted by the html forms is the same with the data received inside the the function using (console log the relevant data)
6. check if every function definition has at least one function usage associated to it
7. check if data flows between cascading functions by console log the input paramenters after the first line in the function and the value of output just before the return in the same function
8. check if the "if" statements are true by placing console.log("here") inside them or console log the comparison items before the "if"
9. check if the "while" are counting towards the limit to avoid infinite loops
10. check if the "for" loops are counting by placing console.log("here") inside them
11. check if existing code can be scaled up for large volumes (for example login 1000 users per second) by verifying the Big-O complexity (https://en.wikipedia.org/wiki/Big_O_notation)
