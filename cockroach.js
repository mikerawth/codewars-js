function cockroachSpeed(s) {
    // To convert km/hour to cm/sec, the conversion is 100,000cm in 1 km, and 3,600 seconds in 1 hour, so:
    // 100,000/3,600 =(aprox) 27.78
    return Math.floor(s*100000/3600);
  }

  console.log(cockroachSpeed(1.08));
  console.log(cockroachSpeed(1.043973009046464));
  

/**
* The cockroach is one of the fastest insects. Write a function which takes its speed in km per hour and returns it in cm per second, rounded down to the integer (= floored).

For example:

1.08 --> 30
Note! The input is a Real number (actual type is language dependent) and is >= 0. The result should be an Integer.
*/