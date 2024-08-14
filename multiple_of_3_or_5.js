function solution(number) {
  // this function will get the multiples of a chosen multiple and use the given number as the ceiling
  function getMultiples(multiple, number) {
    let multiplesArr = [];
    for (let i = multiple; i < number; i += multiple) {
      if (!multiplesArr.includes(i)) {
        multiplesArr.push(i);
      }
    }
    return multiplesArr;
  }

  // getting the multiple arrays of 3 and 5
  let multiplesArrOf3 = getMultiples(3, number);
  let multiplesArrOf5 = getMultiples(5, number);

  // combined the arrays into a Set for unique values
  let combinedMultipleArr = [
    ...new Set([...multiplesArrOf3, ...multiplesArrOf5]),
  ];

  // get the sum from the combinedMultipleArr
  let sum = combinedMultipleArr.reduce(function (accumulator, value) {
    return accumulator + value;
  }, 0);

  // answer
  return sum;
}

// best practice
function solutionBP(number) {
  var sum = 0;

  for (var i = 1; i < number; i++) {
    if (i % 3 == 0 || i % 5 == 0) {
      sum += i;
    }
  }
  return sum;
}

console.log(solution(10));
console.log(solutionBP(10));

/**
 * If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.

Additionally, if the number is negative, return 0.

Note: If the number is a multiple of both 3 and 5, only count it once.
 */
