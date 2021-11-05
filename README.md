# Pizza Parlor

#### By Curtis Brooks

#### This application takes a user's pizza order and shows the cost based on topping selection.

## Technologies Used

* HTML
* CSS
* Javascript

## Description

To use this application, select a pizza size. Next, select a topping and click the "Add Topping" button to add your topping to the current order. You can add multiple toppings to the current order. When toppings selected, click "Submit Order" to submit the order. If you'd like to start a new order, click "Clear Order".

## Setup/Installation Requirements

* Clone [this](https://github.com/curtisbrooks678/pizza-parlor) repository to your desktop
* Navigate to the top of the directory
* Open index.html in your browser

## Known Bugs

* Able to submit a pizza order with no toppings

## License

[MIT](https://en.wikipedia.org/wiki/MIT_License) 

Copyright (c) 11/5/2021 Curtis Brooks

_______________________

TESTS

Describe: Pizza()

Test: "It should return a Pizza object with properties on size, toppings, and cost"
Code: const myPizza = new Pizza ("medium", ["cheese", "olives"], 10)
Expected Output: myPizza("medium", ["cheese", "olives"], 10)

Describe: pizzaSizeCost()

Test: "It will evaluate a pizza's cost based on a Pizza object's size"
Code: myPizza.pizzaSizeCost()
Expected Output: 12 (size: large)

Describe: toppingsCost()

Test: "It will evaluate a pizza's cost based on a Pizza object's toppings"
Code: myPizza.toppingsCost()
Expected Output: 9 (size: small, toppings: vegan cheese)



