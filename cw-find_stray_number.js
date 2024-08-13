function stray(numbers) {
  return numbers.reduce((acc, num) => acc ^ num, 0);
}

console.log(stray([17, 17, 3, 17, 17, 17, 17]));

// another solution:
function findSingleNumber(arr) {
  let frequency = {};

  // Count the frequency of each number
  for (let num of arr) {
    frequency[num] = (frequency[num] || 0) + 1;
  }

  // Find the number with a frequency of 1
  for (let num in frequency) {
    if (frequency[num] === 1) {
      return Number(num);
    }
  }
}

console.log(findSingleNumber([17, 17, 3, 17, 17, 17, 17]));

/**You are given an odd-length array of integers, in which all of them are the same, except for one single number.

Complete the method which accepts such an array, and returns that single different number.

The input array will always be valid! (odd-length >= 3)

Examples
[1, 1, 2] ==> 2
[17, 17, 3, 17, 17, 17, 17] ==> 3 */
