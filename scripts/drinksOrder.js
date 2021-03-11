function drinkOrder(size, drink) {
  switch (drink) {
    case "cola":
      return outputDrinksOrder(size, "cola");
      break;
    case "lemon":
      return outputDrinksOrder(size, "lemon");
      break;
    case "orange":
      return outputDrinksOrder(size, "orange");
      break;
  }
}

function outputDrinksOrder(size, drink) {
  switch (size) {
    case "small":
      return "Your order is a small " + drink;
      break;
    case "medium":
      return "Your order is a medium " + drink;
      break;
    case "large":
      return "Your order is a medium " + drink;
      break;
  }
}

console.log(drinkOrder("small", "cola"));
