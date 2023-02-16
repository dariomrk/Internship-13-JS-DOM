import {
  addClearStorage,
  getElementData,
  retrieveData,
  saveData,
  setElementData,
} from './data.js';
import {
  addButtonHoverEffect,
  addFocusEffect,
  addHoverEffect,
  addLinkHoverEffect,
} from './effects.js';
import { setupValidation } from './validation.js';

const data = retrieveData();
if (data) {
  setElementData('#user-first-name', data.firstName);
  setElementData('#user-last-name', data.lastName);
  setElementData('#teach-level', data.teachLevel);
  setElementData('#teach-duration', data.teachDuration);
}

addHoverEffect('#user-first-name');
addFocusEffect('#user-first-name', ['#user-first-name', '#first-name-label']);

addHoverEffect('#user-last-name');
addFocusEffect('#user-last-name', ['#user-last-name', '#last-name-label']);

addHoverEffect('#teach-level');
addFocusEffect('#teach-level', ['#teach-level', '#teach-level-label']);

addFocusEffect('#teach-duration', ['#teach-duration', '#teach-duration-label']);

addLinkHoverEffect('.form-links > a');

addLinkHoverEffect('#clear-localstorage');
addClearStorage('#clear-localstorage');

addButtonHoverEffect('#submit');

setupValidation(() => {
  saveData({
    firstName: getElementData('#user-first-name'),
    lastName: getElementData('#user-last-name'),
    teachLevel: getElementData('#teach-level'),
    teachDuration: getElementData('#teach-duration'),
  });
  alert('Successfully saved data to localstorage.');
});
