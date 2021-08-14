//

function ArrayChallenge(strArr) {
  // Check if passed in correct amount of coordinates
  if (strArr.length < 4) {
    throw new Error(
      'Invalid amount of coordinates passed. Four coordinates are requried to determine area of a rectangle.'
    );
  }

  let values = strArr.map((coord) => coord.match(/\d/g));

  //   console.log(values, 'VALUES');
  let finalValues = values.map((IntValues) =>
    IntValues.map((val) => parseInt(val))
  );

  //   console.log(finalValues, 'FINAL VALUES');

  let width = [finalValues[0], finalValues[1]];
  let height = [finalValues[2], finalValues[3]];

  //   console.log(width, 'WIDTH');
  //   console.log(height, 'HEIGHT');

  // arrW = [1, 1, 1, 3]
  let arrW = [];

  // arrL = [3, 1, 3, 3]
  let arrL = [];
  let one = width.forEach((a) => a.forEach((b) => arrW.push(b)));
  let two = height.forEach((a) => a.forEach((b) => arrL.push(b)));

  console.log(arrW, 'ARRW');
  console.log(arrL, 'ARRL');

  let finalW = Math.sqrt(
    Math.pow(arrW[0] - arrW[2], 2) + Math.pow(arrW[1] - arrW[3], 2)
  );

  let finalL = Math.sqrt(
    Math.pow(arrW[0] - arrL[0], 2) + Math.pow(arrW[1] - arrL[1], 2)
  );
  //   console.log(finalW, 'FINAL W');
  //   console.log(finalL, 'FINAL L');

  let rectangleArea = finalW * finalL;

  return rectangleArea;
}

let array1 = ['(1 1)', '(1 3)', '(3 1)', '(3 3)'];
let array2 = ['(0 0)', '(1 0)', '(1 1)', '(0 1)'];

// keep this function call here
console.log(ArrayChallenge(array1));
console.log(ArrayChallenge(array2));
