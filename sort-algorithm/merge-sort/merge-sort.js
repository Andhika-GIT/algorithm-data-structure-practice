const sort = (array_one, array_two) => {
  const sortedArray = [];
  let firstIndex = 0;
  let secondIndex = 0;

  while (array_one[firstIndex] && array_two[secondIndex]) {
    if (array_one[firstIndex] < array_two[secondIndex]) {
      sortedArray.push(array_one[firstIndex]);
      firstIndex++;
    } else {
      sortedArray.push(array_two[secondIndex]);
      secondIndex++;
    }
  }

  while (firstIndex < array_one.length) {
    sortedArray.push(array_one[firstIndex]);
    firstIndex++;
  }

  while (secondIndex < array_two.length) {
    sortedArray.push(array_two[secondIndex]);
    secondIndex++;
  }

  return sortedArray;
};

const merge = (array) => {
  if (array.length < 2) {
    return array;
  }

  const mid = Math.floor(array.length / 2);
  const leftArray = [];
  const rightArray = [];

  for (let i = 0; i < mid; i++) {
    leftArray.push(array[i]);
  }

  for (let j = mid; j < array.length; j++) {
    rightArray.push(array[j]);
  }

  const left = merge(leftArray);
  const right = merge(rightArray);
  return sort(left, right);
};

const sorted = merge([2, 5, 9, 4, 7, 3, 1, 8, 6]);
console.log(sorted);
