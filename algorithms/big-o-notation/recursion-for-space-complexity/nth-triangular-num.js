'use strict';

/* Exercise 4: Calculates the nth triangular number. */

let nthTriNum = (n, t) => {
	t = !t ? 0 : t;

	if (n === 0) {
		return 'T = ' + t;
	}

	t = t + n;
	n = n - 1;

	return nthTriNum(n, t);
}

console.log(nthTriNum(6));