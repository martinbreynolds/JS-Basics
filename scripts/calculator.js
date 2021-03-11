function calculator(num1, num2, operator) {
  switch (operator) {
    case "+":
      var result = num1 + num2;
      console.log(num1, operator, num2, "=", result);
      break;
    case "-":
      var result = num1 - num2;
      console.log(num1, operator, num2, "=", result);
      return;
      break;
    case "*":
      var result = num1 * num2;
      console.log(num1, operator, num2, "=", result);
      return;
      break;
    case "/":
      var result = num1 / num2;
      console.log(num1, operator, num2, "=", result);
      return;
      break;
    case "%":
      var result = num1 % num2;
      console.log(num1, operator, num2, "=", result);
      return;
  }
}

calculator(2, 2, "+");
calculator(3, 2, "-");
calculator(4, 2, "*");
calculator(6, 2, "/");
calculator(7, 2, "%");
