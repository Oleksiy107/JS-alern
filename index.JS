const numbers = [
  16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54,
  76, -4, 12, -35, 4, 47,
];

let plusElement2 = 0;
let plusElement = 0;
let negative = 0;
let maxElement = -1;
let maxIndex;
let doubleNumber = 0;
let doubleNumberNegative = 0;
let productSum = 1;
let sumj = 0;
let product = 1;
let positiveProduct = 1;
let oddPositiveCount = 0;
let oddPositiveSum = 0;

for (let number of numbers) {
  if (number > 0) {
    plusElement++;
    plusElement2 += number;
    productSum += number;
    product *= number;
    positiveProduct *= number;

    if (number % 2 !== 0) {
      sumj += number;
      oddPositiveCount++;
    } else {
      doubleNumber++;
    }
  } else if (number < 0) {
    negative++;
    product *= number;
  }
  if (number > 0 && number % 2 !== 0) {
    oddPositiveSum += number;
  }
}

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > maxElement) {
    maxElement = numbers[i];
    maxIndex = i;
  }
  
}

alert(
  // 1 + 2 + 3 + 4 + 5 + 6
  `Number of positive numbers: ${plusElement} and Sum of numbers: ${plusElement2}
  Max number: ${maxElement} at index: ${maxIndex}
Number of negative numbers: ${negative}
Number of odd positive numbers: ${oddPositiveCount} and ${oddPositiveSum}
Sum of all positive numbers: ${productSum} 
Number of even positive numbers: ${doubleNumber}
Sum of odd positive numbers: ${sumj}
Product of positive numbers: ${positiveProduct}
` //
);
