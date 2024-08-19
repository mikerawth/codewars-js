function createArrayOfTiers(num) {
  let numStr = num.toString();
  let numArr = [];
  let tempStr = "";
  for (let i = 0; i < numStr.length; i++) {
    tempStr += numStr[i];
    numArr.push(tempStr);
  }
  return numArr;
}

console.log(createArrayOfTiers(420));

/**Create a function that takes a number and returns an array of strings containing the number cut off at each digit.

Examples
420 should return ["4", "42", "420"]
2017 should return ["2", "20", "201", "2017"]
2010 should return ["2", "20", "201", "2010"]
4020 should return ["4", "40", "402", "4020"]
80200 should return ["8", "80", "802", "8020", "80200"]
PS: The input is guaranteed to be an integer in the range [0, 1000000] */

// other solutions
function createArrayOfTiers(num) {
  let prev = "";
  return [...(num + "")].map((value) => {
    return (prev += value);
  });
}

function createArrayOfTiers(num) {
  return Array.prototype.map.call(num.toString(), (_, i, s) =>
    s.slice(0, i + 1)
  );
}

function createArrayOfTiers(num) {
  let a = [];
  for (let i = 0; i < String(num).length; i++) {
    a.push(String(num).substring(0, i + 1));
  }
  return a;
}
