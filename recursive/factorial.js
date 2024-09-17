const factorial = (number, prev_result = 1) => {
  console.log(prev_result);
  if (number === 1) {
    return prev_result;
  }

  const final_result = prev_result * number;

  factorial(number - 1, final_result);
};

factorial(8);
