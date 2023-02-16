/**
 * Adds/removes a css class from a array of HTML elements when a addOn/removeOn event occurs on the eventTarget
 * @param {keyof HTMLElementTagNameMap} eventTarget adds the event listeners to this element, this element is a target by default
 * @param {string} className css class name
 * @param {string} addOn the css class is added on this type of event
 * @param {string} removeOn the css class is removed on this type of event
 * @param {Array<keyof HTMLElementTagNameMap>} targets
 */
const addTiedEventListeners = (
  eventTarget,
  className,
  addOn,
  removeOn,
  targets = [eventTarget]
) => {
  const _eventTarget = document.querySelector(eventTarget);

  _eventTarget.addEventListener(addOn, (e) => {
    targets.forEach((t) => {
      document.querySelector(t).classList.add(className);
    });
  });

  _eventTarget.addEventListener(removeOn, (e) => {
    targets.forEach((t) => {
      document.querySelector(t).classList.remove(className);
    });
  });
};

/**
 * @param {keyof HTMLElementTagNameMap} eventTarget adds the event listener to this element
 * @param {(value: any) => boolean} validationPredicate used to validate the element data and determine whether to display the error
 */
export const addValidationEffect = (eventTarget, validationPredicate) => {
  const _eventTarget = document.querySelector(eventTarget);

  _eventTarget.addEventListener('blur', (e) => {
    if (!validationPredicate(e.currentTarget.value)) {
      _eventTarget.classList.add('error');

      if (!_eventTarget.nextSibling.tagName)
        _eventTarget.insertAdjacentHTML(
          'afterend',
          '<p class="form-input__error-message">This field is required</p>'
        );
      return;
    }

    if (_eventTarget.nextSibling.tagName)
      _eventTarget.nextElementSibling.remove();
    _eventTarget.classList.remove('error');
  });
};

export const addHoverEffect = (eventTarget) => {
  addTiedEventListeners(eventTarget, 'hover', 'mouseover', 'mouseleave');
};

export const addFocusEffect = (eventTarget, targets) => {
  addTiedEventListeners(eventTarget, 'focus', 'focus', 'blur', targets);
};
