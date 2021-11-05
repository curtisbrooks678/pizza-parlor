function Pizza (size, toppings, cost) {
  this.size = size;
  this.toppings = toppings;
  this.cost = cost;
}

Pizza.prototype.pizzaCost = function() {
  if (this.size === "small") {
    this.cost = 8;
  }
  if (this.size === "medium") {
    this.cost = 10;
  }
  if (this.size === "large") {
    this.cost = 12;
  }
  toppingsArray.forEach(function (topping) {
    if (this.topping === "cheese") {
      this.cost += 1;
    }
    if (this.topping === "artichokes") {
      this.cost += 2;
    }
    if (this.topping === "anchovies") {
      this.cost += 3;
    }
  });
}

$(document).ready(function () {
  
  let toppingsArray = [];
  
  $("#add-topping").click(function () {
    let topping = $("select#topping").val();
    toppingsArray.push(topping);
    $("ul#toppings-listed").prepend("<li>" + topping + "</li>");
  });

  $("#order").submit(function (event) {
    event.preventDefault();
    const inputSize = $("select#size").val();
    const inputToppings = toppingsArray;
    let myPizza = new Pizza (inputSize, inputToppings);
  });

});