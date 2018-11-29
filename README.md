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

## Technical
The application is developed in React, using npm, Webpack and Babel.
The menu data is provided in `menu-data.json` and the application source code is in `src/`.

## Tests
Unit tests are written using Jest and Enzyme and can be found in `src/__tests__`
