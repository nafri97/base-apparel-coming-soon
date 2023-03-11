# Frontend Mentor - Base Apparel coming soon page solution

This is a solution to the [Base Apparel coming soon page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/base-apparel-coming-soon-page-5d46b47f8db8a7063f9331a0). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

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
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the `form` is submitted if:
  - The `input` field is empty
  - The email address is not formatted correctly

### Screenshot

![](./desktop_screenshot.png)
![](./mobile_screenshot.png)

### Links

- Solution URL: [Github Repository](https://github.com/nafri97/base-apparel-coming-soon)
- Live Site URL: [Github Pages](https://nafri97.github.io/base-apparel-coming-soon)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Javascript

### What I learned

To see how you can add code snippets, see below:

```html
<input type="email" id="emailInput" placeholder="Email Adress">
<image id="errorIcon" src="images/icon-error.svg" alt="icon"></image>
<!-- I just used the code above, if you want know you can try yourself -->
```
```css
#emailInput:focus {outline: none;}
#emailInput::placeholder{opacity: 25%}
.anya{display: none}
/* I just used the code above, if you want know you can try yourself */
```
```js
function checkEmail(){
  let validEmail = /^\S+@\S+\.\S+$/;
  if (validEmail.test(emailInput.value)){}
  else{}
// I just used the code above, if you want know you can try yourself
```

### Continued development

 in the future i will learn more about javascript.

### Useful resources

- [W3school](https://www.w3schools.com) - this helped me which code I decide to use.
- [chatGPT](https://www.chat.openai.com) - this is amazing it could fix my code (altough sometime its code doesn't work as i wanted)

## Author

- Github - [nafri97](https://gihub.com/nafri97)
- Frontend Mentor - [@nafri97](https://www.frontendmentor.io/profile/nafri97)
- Twitter - [@irfanrizkis](https://www.twitter.com/irfanrizkis)