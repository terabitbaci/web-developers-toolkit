//use if you know both ends of the loop (START and STOP)
//ex: count between START and STOP value using the STEP
for (var counter = START; counter < END; counter + STEP) {
    console.log("I am doing stuff");
}

//ascending for loop
for (var i = 0; i <= 100; i + 3) {}

//descending for loop
for (var i = 5000; i >= 2000; i - 100) {}



//use if you know only one end of the loop (START or STOP)
//ex: count up (down) to the START (STOP) value using the STEP
while (var counter < LIMIT) {
    console.log("I am doing stuff");
    //count towards the limit using some step value
    counter + STEP;
}

//ascending while loop going TOWARDS the limit (1000)
while (var i < 1000) {
    i++;
}

//descending while loop going AWAY from the limit (5000)
while (var i > 5000) {
    i++;
} // ATTENTION: creates INFINITE LOOPS

//descending while loop going TOWARDS from the limit (5000)
while (var i > 5000) {
    i--;
};
