//"for" is used if you know both ends of the loop (count from XXXXX to YYYY)

//ascending for loop
for( var i =0; i<=100; i+3) {}

//descending for loop
for (var i=5000; i>=2000; i-100) {}



//"while" is used if you know only ONE end of the loop (count up to AAAA; count down to BBBBB)

//ascending while loop going TOWARDS the limit (1000)
while (var i < 1000){ i++;}

//descending while loop going AWAY from the limit (5000)
while (var i >5000){i++;} // ATTENTION: creates INFINITE LOOPS

//descending while loop going TOWARDS from the limit (5000)
while (var i > 5000) {i--; };
