const bubbleSort = (array) => {
  const arrayLength = array.length;

  for (let i = 0; i < arrayLength; i++) {
    for (let j = 0; j < arrayLength - 1; j++) {
      if (array[j] > array[j + 1]) {
        const temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }

  return array;
};

const sortedArray = bubbleSort([2, 5, 4, 8, 7, 6, 1]);
console.log(sortedArray);
