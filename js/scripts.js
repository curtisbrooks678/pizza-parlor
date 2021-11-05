function Pizza (size, toppings, cost) {
  this.size = size;
  this.toppings = toppings;
  this.cost = cost;
}

Pizza.prototype.pizzaSizeCost = function() {
  if (this.size === "Small") {
    this.cost = 8; 
  }
  if (this.size === "Medium") {
    this.cost = 10;
  }
  if (this.size === "Large") {
    this.cost = 12;
  }
}

Pizza.prototype.toppingsCost = function() {
  cost = this.cost;
  toppingsArray.forEach(function (topping) {
    if (topping === "Vegan Cheese") {
      cost += 1;
    }
    if (topping === "Artichokes") {
      cost += 2;
    }
    if (topping === "Vegan Pepperoni") {
      cost += 3;
    }
  });
  this.cost = cost;
}

Pizza.prototype.toppingList = function () {
  for (let i = 0; i < toppingsArray.length; i++) {
    if (toppingsArray.length === 1) {
      return toppingsArray[0];
    }
    toppingsArray[i] = toppingsArray[i] + ", ";
    if (i === toppingsArray.length - 2) {
      return toppingsArray[i];
    }
  }
}

let toppingsArray = [];

$(document).ready(function () {
  
  $("#add-topping").click(function () {
    $("ul#toppings-listed").show();
    let topping = $("select#topping").val();
    toppingsArray.push(topping);
    $("ul#toppings-listed").prepend("<li class='list-item'>" + topping + "</li>");
  });

  $("#clear-toppings").click(function () {
    toppingsArray = [];
    $(".list-item").remove();
  });

  $("#new-order").click(function (event) {
    event.preventDefault();
    toppingsArray = [];
    $(".list-item").remove();
    $("#final-order").hide();
    $("#add-topping").prop("disabled", false);
    $("#clear-toppings").prop("disabled", false);
    $("#order").prop("disabled", false);
    $("#submit").prop("disabled", false);
  });

  $("#order").submit(function (event) {
    event.preventDefault();
    const inputSize = $("select#size").val();
    const inputToppings = toppingsArray;
    let myPizza = new Pizza (inputSize, inputToppings);
    myPizza.pizzaSizeCost();
    myPizza.toppingsCost();
    myPizza.toppingList();
    $("#final-order").show();
    $("#pizza-size").html(inputSize);
    $("#pizza-toppings").html(toppingsArray);
    $("#pizza-cost").html(myPizza.cost);
    toppingsArray = [];
    $(".list-item").remove();
    $("#add-topping").prop("disabled", true);
    $("#clear-toppings").prop("disabled", true);
    $("#submit").prop("disabled", true);
  });
});