import { addErrorEffect, addImmediateValidationEffect } from './effects.js';

const validations = [
  {
    validation: (value) => value.trim() !== '',
    for: '#user-first-name',
  },
  {
    validation: (value) => value.trim() !== '',
    for: '#user-last-name',
  },
  {
    validation: (value) => !!value,
    for: '#teach-level',
  },
  {
    validation: (value) => !!value,
    for: '#teach-duration',
  },
];

/**
 * Overly complicated solution
 * @param {() => {}} validSubmitCallback
 */
export const setupValidation = (validSubmitCallback) => {
  validations.forEach((object) => {
    addImmediateValidationEffect(object.for, object.validation);
  });

  document.querySelector('#submit').addEventListener('click', (e) => {
    e.preventDefault();

    // Array.reduce() is necessary here since Array.every()
    // stops iterating on the first false occurence
    const validationResult = validations.reduce((accumulator, object) => {
      const result = object.validation(
        document.querySelector(object.for).value
      );

      if (!result) addErrorEffect(object.for);

      console.log(result && accumulator);
      return result && accumulator;
    }, true);

    if (validationResult) validSubmitCallback();
  });
};
