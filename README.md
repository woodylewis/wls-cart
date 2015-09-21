# Stride's web code test

## Instructions

Implement the feature, [described](#prompt) below, using Javascript, HTML and CSS.

Any frameworks or pre-processors are up to you. Feel free to use third party libraries when necessary, but use your best judgment as to how much work you offload. We do ask that you don't use [bootstrap](http://getbootstrap.com) or a similar CSS framework, though. We want to see your CSS skills.

Add tests/specs as needed. This project includes a karma/[jasmine](http://jasmine.github.io/2.3/introduction.html) runner (described in [test](#test) below). Using it is optional.

We have provided a starter setup, which serves `public/` statically. The details are [below](#run). You're free to use it or not (it won't affect your grade either way). We just ask that if you change the way the application runs, you let us know.

Send any questions to [codetest@stridenyc.com](mailto:codetest@stridenyc.com).

## Submission

Please submit your code as a zip file.

If you're not using the supplied [running method](#run), instruct us on how to run your project.

Update README.md with any instructions you have for us, along with any notes you may want to share. If you're using any frameworks, make a note of it there.

#### Leave your name out

Please do not add your name, github profile or any identifying information to any file. Code tests will be anonymized before grading.

## Grading

This project is designed to test your knowledge of Javascript, HTML and CSS.

Your project will be graded on:
  - Code design and architecture.
  - Code quality metrics such as cleanliness, readability, maintainability, breakdown of responsibilities and simplicity.
  - Creativity in implementation.
  - Application and demonstrated knowledge of the aforementioned technologies and best practices.

Your project will not be graded on:
  - Aesthetic design
  - Choice of framework(s) and build setup

This test is not timed, so you will not be graded on how quickly you submit it. Please take your time and focus on the above.


## Prompt

Our client is Sugar Sweet Chocolate Treats (SSCT). SSCT is looking to grow their online presence, and you've been tasked with building their shopping cart.

## Spec

SSCT would like a single-page application.

It should work on mobile and desktop (between 768px wide and 1200px).

It must display their inventory, prices, and have the ability to add chocolates to their cart.

Each item will have the chocolate type, description, price, and an Add to Cart button.

Clicking Add to Cart multiple times will increase the count of that item in the cart.

It will have a button to view cart.

The cart will be a modal overlayed on the inventory page.

The cart should show the user's total.

If the cart is empty, it will show the message "There are no items in your cart".

Each item in the cart should have a remove button and a quantity count.

The cart should have a Clear button. It should clear the users cart, and close the modal.

The cart should have a Close button. It should close the modal, but not clear the cart.


### Mockup

```
Inventory page:

+---------------------------------------------------------------+
|                                                               |
|                   Sugar Sweet Chocolate Treats                |
|                            (header)                           |
+---------------------------------------------------------------+
|              +---------------------------------------------+  |
|              |Chocolate type   Price      Add  ||View cart |  |
|              |Description               to cart||(# items) |  |
|              +---------------------------------------------+  |
|              +---------------------------------+              |
|              |Chocolate type   Price      Add  |              |
|              |Description               to cart|              |
|              +---------------------------------+              |
|              +---------------------------------+              |
|              |Chocolate type   Price      Add  |              |
|              |Description               to cart|              |
|              +---------------------------------+              |
|              +---------------------------------+              |
|              |Chocolate type   Price      Add  |              |
|              |Description               to cart|              |
|              +---------------------------------+              |
|              +---------------------------------+              |
|              |Chocolate type   Price      Add  |              |
|              |Description               to cart|              |
|              +---------------------------------+              |
|              |---------------------------------|              |
+---------------------------------------------------------------+


Cart:

+---------------------------------------------------------------+
|                                                               |
|                                                               |
|                                                               |
|                                                               |
|                                                               |
|            +-----------------------------------+              |
|            |          Your cart                |              |
|            |                                   |              |
|            |   +----------------------------+  |              |
|            |   |Item     Price  Qty         |  |              |
|            |   |                            |  |              |
|            |   +----------------------------+  |              |
|            |   +----------------------------+  |              |
|            |   |Dark     $1.50   3  Remove  |  |              |
|            |   |                            |  |              |
|            |   +----------------------------+  |              |
|            |                                   |              |
|            |   Total: $X.XX                    |              |
|            |                                   |              |
|            +----------+-----------+            |              |
|            | Clear    |  Close    |            |              |
|            +----------+-----------+------------+              |
|                                                               |
|                                                               |
|                                                               |
|                                                               |
|                                                               |
|                                                               |
|                                                               |
|                                                               |
|                                                               |
+---------------------------------------------------------------+

```

### Inventory data

Inventory, including types of chocolate and prices, are available in `public/data/inventory.json`.


## Setup

1. Install [NodeJS](nodejs.org)
2. Run `npm install`

## Run

We added a default setup, which runs all files in `public/` as static assets. It's there to make your setup easier, but it's not meant to discourage you from using templates, compiled languages or pre-processors. Choosing your languages, framework, build process, etc. is your perogative!

To run the default setup:

1. Add your work inside `public`. If you're using a compiled language, save it elsewhere and compile it to `public/`.
2. `npm run serve` - Serves the `public/` directory at [localhost:3000](http://localhost:3000).

If you're running the non-default setup, be sure to tell us how to start your project up.

## Test

1. `npm run test` - Runs [Jasmine](http://jasmine.github.io/2.3/introduction.html) units tests in [Karma](https://karma-runner.github.io/0.12), through [PhantomJS](http://phantomjs.org) (This is installed for you by `npm`).
  - Runs every file ending in `-spec.js` inside `test/`
  - If you'd like to configure it, see `karma.config.js`
