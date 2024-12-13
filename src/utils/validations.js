import { ERROR_MESSAGE } from './constants.js';
import { VALID_INPUT_IN_BRACKETS } from './regex.js';

const validateDate = (input, daysList) => {
  if (!input) {
    throw new Error(ERROR_MESSAGE.VALIDATION_INPUT);
  }

  if (!VALID_INPUT_IN_BRACKETS.test(input)) {
    throw new Error(ERROR_MESSAGE.VALIDATION_INPUT);
  }

  const [month, days] = input.split(',');
  if (Number(month) < 1 || Number(month) > 12) {
    throw new Error(ERROR_MESSAGE.VALIDATION_INPUT);
  }

  if (!daysList.some((day) => day === days)) {
    throw new Error(ERROR_MESSAGE.VALIDATION_INPUT);
  }
};

const validatePeople = (input) => {
  if (!input) {
    throw new Error(ERROR_MESSAGE.VALIDATION_INPUT);
  }

  const splitInput = input.split(',');
  if (splitInput.some((name) => name.length > 5)) {
    throw new Error(ERROR_MESSAGE.VALIDATION_INPUT);
  }

  if (new Set(splitInput).size !== splitInput.length) {
    throw new Error(ERROR_MESSAGE.VALIDATION_INPUT);
  }

  if (splitInput.length < 5 || splitInput.length > 35) {
    throw new Error(ERROR_MESSAGE.VALIDATION_INPUT);
  }
};

export { validateDate, validatePeople };
