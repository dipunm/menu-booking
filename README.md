Christmas Menu Booking App
====================================

## Description

This small web application allows a user to simulate a Christmas dinner booking for 2 people.
- The app displays the menu provided through a JSON file.
- The app enforces some rules provided by the restaurant. (see [#rules](#rules))
- The app must display the total price of the booking

## Rules

This restaurant unfortunately has a number of rules about the meals that can be ordered.
- Each person must have at least two courses, one of which must be a main.
- Each diner cannot have more than one of the same course.
- There is only one piece of cheesecake left.
- Pierre the snobby waiter will not let you have prawn cocktail and salmon fillet in the same meal.

## Detailed description
![alt text](https://raw.githubusercontent.com/dianatamas/menu-booking/master/christmas_dinner.jpg)
The left card displays the menu provided in the JSON file. If the menu changes, the card will display the updated menu.

The right card allows the user to select a starter, main course and a dessert for 2 people.

If the selection doesn't respect the rules, an error message will be displayed.

The 'Book' button allows the user to start the booking process - this will check for errors, calculate the total price and simulate the loading process (1.5 seconds).

The Reset button allows the user to reset their selection and start from scratch.


## Technical
The application is developed in React, using npm, Webpack and Babel.
The Material-UI library is used, which includes Material Design components and facilitates CSS-in-JS using JSS.
The menu data is provided in `menu-data.json` and the application source code is in `src/`.

## Tests
Unit tests are written using Jest and Enzyme and can be found in `src/__tests__`

I couldn't manage to configure Babel and Jest (I think it's not the same version of Babel as the one I'm used to work with and didn't have time to investigate more), so the unit tests do not work.
But in addition to testing the structure of the components, the tests should also make sure that errors are raised if the rules are not respected (using Enzyme's setState and simulate functions).
