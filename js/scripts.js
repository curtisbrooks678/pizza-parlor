function Pizza (size, toppings, cost) {
  this.size = size;
  this.toppings = toppings;
  this.cost = cost;
}

Pizza.prototype.pizzaSizeCost = function() {
  if (this.size === "small") {
    this.cost = 8; 
  }
  if (this.size === "medium") {
    this.cost = 10;
  }
  if (this.size === "large") {
    this.cost = 12;
  }
}

// Pizza.prototype.toppingsCost = function() {
//   toppingsArray.forEach(function (topping) {
//     if (topping === "cheese") {
//       this.cost += 1;
//     }
//     if (topping === "artichokes") {
//       this.cost += 2;
//     }
//     if (topping === "anchovies") {
//       this.cost += 3;
//     }
//   });
// }

let toppingsArray = [];

$(document).ready(function () {
  
  $("#add-topping").click(function () {
    let topping = $("select#topping").val();
    console.log(topping);
    toppingsArray.push(topping);
    console.log(toppingsArray);
    $("ul#toppings-listed").prepend("<li>" + topping + "</li>");
  });

  $("#order").submit(function (event) {
    event.preventDefault();
    const inputSize = $("select#size").val();
    const inputToppings = toppingsArray;
    let inputCost = 0;
    let myPizza = new Pizza (inputSize, inputToppings, inputCost);
    myPizza.pizzaSizeCost();
    let finalCost = myPizza.cost
    toppingsArray.forEach(function (topping) {
      if (topping === "cheese") {
        finalCost += 1;
      }
      if (topping === "artichokes") {
        finalCost += 2;
      }
      if (topping === "anchovies") {
        finalCost += 3;
      }
    });
    // myPizza.toppingsCost();
    console.log("final price: " + finalCost);
  });
});