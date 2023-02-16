import {
  addFocusEffect,
  addHoverEffect,
  addValidationEffect,
} from './effects.js';

addHoverEffect('#user-first-name');
addFocusEffect('#user-first-name', ['#user-first-name', '#first-name-label']);
addValidationEffect('#user-first-name', (value) => {
  return value.trim() !== '';
});

addHoverEffect('#user-last-name');
addFocusEffect('#user-last-name', ['#user-last-name', '#last-name-label']);
addValidationEffect('#user-last-name', (value) => {
  return value.trim() !== '';
});

addHoverEffect('#teach-level');
addFocusEffect('#teach-level', ['#teach-level', '#teach-level-label']);

addHoverEffect('#teach-duration');
addFocusEffect('#teach-duration', ['#teach-duration', '#teach-duration-label']);

const submitButton = document.querySelector('#submit');
