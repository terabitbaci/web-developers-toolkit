'use strict';
/* Implement a function that takes in an integer and prints out its two's complement value by following the algorithm described above. Hint: to invert the bits of a number you can use the "~" operator. For example ~25 will invert the bits of the integer 25. */

let twosComp = (int) => {
	int = ~int;
	return int = int + 1;
}

console.log(twosComp(5));
