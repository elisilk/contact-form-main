# Frontend Mentor - Contact form solution

This is a solution to the [Contact form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/contact-form--G-hYlqKJj). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshots](#screenshots)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- Complete the form and see a success toast message upon successful submission
- Receive form validation messages if:
  - A required field has been missed
  - The email address is not formatted correctly
- Complete the form only using their keyboard
- Have inputs, error messages, and the success message announced on their screen reader
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshots

|             Mobile designed at 375px:              |             Desktop designed at 1440px:             |
| :------------------------------------------------: | :-------------------------------------------------: |
|  ![](./screenshots/screenshot-mobile-rating.png)   |  ![](./screenshots/screenshot-desktop-rating.png)   |
|                Mobile (thank you):                 |                Desktop (thank you):                 |
| ![](./screenshots/screenshot-mobile-thank-you.png) | ![](./screenshots/screenshot-desktop-thank-you.png) |

### Links

- Solution URL: [https://github.com/elisilk/interactive-rating-component](https://github.com/elisilk/interactive-rating-component)
- Live Site URL: [https://elisilk.github.io/interactive-rating-component/](https://elisilk.github.io/interactive-rating-component/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- Fluid typography and spacing
- Accessible form controls

### What I learned

- [Basic native form controls](https://developer.mozilla.org/en-US/docs/Learn/Forms/Basic_native_form_controls)
- [HTML attribute: autocomplete](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete)
- [`color-mix()`](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/color-mix) - I learned how to mix two colors. Super cool! Used on the color for the button hover state.
- [`position: fixed`] - Positions the success modal relative to the viewport.

### Continued development

Specific areas that the solution should be improved (known issues):

- Should animate the showing and hiding of the success modal.
- Should be able to dismiss the success modal by pressing any key (or maybe just the escape key) or clicking somewhere.
- When finalizing and submitting the form successfully from an input field that previously had an error, that input element continues to have an error even after form submission. The error should be cleared along with all the others.

More general ideas I want to consider:

- Hmm 🤔 ...

### Useful resources

- [Accessibility Developer Guide](https://www.accessibility-developer-guide.com/)
- [MDN Web Docs for CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) - Went here a lot to reference the different CSS properties and the shorthands, and all the great explanations about best practices.
- [MDN Guides](https://developer.mozilla.org/en-US/docs/Learn)
- [The Clamp Calculator](https://royalfig.github.io/fluid-typography-calculator/) - Used for all of fluid typography and fluid spacing calculations.

## Author

- Website - [Eli Silk](https://github.com/elisilk)
- Frontend Mentor - [@elisilk](https://www.frontendmentor.io/profile/elisilk)
