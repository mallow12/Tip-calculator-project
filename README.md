# Frontend Mentor - Tip calculator app solution

This is a solution to the [Tip calculator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/tip-calculator-app-ugJNGbJUX). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Calculate the correct tip and total cost of the bill per person

### Screenshot

![Mobile-Image](./images/Screenshot%202023-02-15%20at%2020-56-42%20Frontend%20Mentor%20Tip%20calculator%20app.png)
![Desktop-Image](./images/Screenshot%202023-02-15%20at%2020-55-47%20Frontend%20Mentor%20Tip%20calculator%20app.png)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [view the site live](https://abdullah-tip-calculator.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Desktop-first workflow
- Javascript

### What I learned

I learned a great deal about javascript event handlers and eventlistners on this project

```css
.container-one-item.second.error input {
  border: 2px solid red;
}

.container-one-item.second.error small {
  visibility: visible;
}
```

```js
const calculate = (tip, total) => {
  screenOne.innerText = tip.toFixed(2);
  screenTwo.innerText = total.toFixed(2);
};

percentage.forEach((percent) => {
  percent.addEventListener('click', (e) => {
    const buttonValue = e.target.innerText;
    const inputValue = eval(bill.value / people.value);
    if (buttonValue === '5%') {
      expression = 5 / 100;
    } else if (buttonValue === '10%') {
      expression = 10 / 100;
    } else if (buttonValue === '15%') {
      expression = 15 / 100;
    } else if (buttonValue === '25%') {
      expression = 25 / 100;
    } else if (buttonValue === '50%') {
      expression = 50 / 100;
    } else {
      expression = custom.value / 100;
    }
    const tip = expression * inputValue;
    const total = tip + inputValue;
    calculate(tip, total);
  });
});
```

### Continued development

I want to keep focusing on improving my javascript skills and bulding more advanced projects.

### Useful resources

- [Example resource 1](https://stackoverflow.com/questions/2808184/restricting-input-to-textbox-allowing-only-numbers-and-decimal-point) - This helped me in making my input fields read number and decimal point only. No text is allowed.

## Author

- Frontend Mentor - [@mallow12](https://www.frontendmentor.io/profile/mallow12)
