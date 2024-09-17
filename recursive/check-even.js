// THIS IS ONLY FOR PRACTICE PURPOSE, DO NOT TRY THIS IN REAL PROJECT

const isEven = (arrayNum) => {
  if (arrayNum.length <= 1) {
    if (arrayNum[0] % 2 === 0) {
      console.log("there's is even number");
      return;
    }

    console.log("there's no even number");
    return;
  }

  if (arrayNum[0] % 2 === 0) {
    console.log("there's is even number");
    return;
  }

  arrayNum.shift();
  isEven(arrayNum);
};

isEven([1, 5, 7, 9]);
