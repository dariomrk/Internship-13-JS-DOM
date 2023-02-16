/**
 * @param {HTMLElement} target target HTML element
 * @param {string} className css class name
 * @param {string} addOn the css class is added on this type of event
 * @param {string} removeOn the css class is removed on this type of event
 */
const addTiedEventListeners = (target, className, addOn, removeOn) => {
  target.addEventListener(addOn, (e) => {
    target.classList.add(className);
  });

  target.addEventListener(removeOn, (e) => {
    target.classList.remove(className);
  });
};

export const addHoverEffect = (target) => {};

export const addFocusEffect = (target) => {};
