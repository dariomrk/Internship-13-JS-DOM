export const addClearStorage = (eventTarget) => {
  document.querySelector(eventTarget).addEventListener('click', (e) => {
    if (confirm('Clear localstorage? This action is irreversible.'))
      localStorage.clear();
  });
};

export const getElementData = (target) => {
  return document.querySelector(target).value;
};

export const setElementData = (target, value) => {
  document.querySelector(target).value = value;
};

export const saveData = (data) => {
  localStorage.setItem('form-data', JSON.stringify(data));
};

export const retrieveData = () => {
  return JSON.parse(localStorage.getItem('form-data'));
};
