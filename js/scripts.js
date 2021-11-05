function Pizza (size, toppings, cost) {
  this.size = size;
  this.toppings = toppings;
  this.cost = cost;
}

Pizza.prototype.pizzaCost = function () {
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



