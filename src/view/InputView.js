import { Console } from '@woowacourse/mission-utils';
import { validateDate, validatePeople } from '../utils/validations.js';
import { errorHandler } from '../utils/errorHandler.js';
import { USER_MESSAGE } from '../utils/constants.js';

class InputView {
  static async getDateInput(daysList) {
    try {
      const input = await Console.readLineAsync(USER_MESSAGE.READ_DATE);
      validateDate(input, daysList);
      return input.split(',');
    } catch (error) {
      errorHandler(error);
      return this.getDateInput(daysList);
    }
  }

  static async getAllInput() {
    try {
      const weekdayInput = await Console.readLineAsync(
        USER_MESSAGE.READ_WEEKDAY,
      );
      validatePeople(weekdayInput);
      const holidayInput = await Console.readLineAsync(
        USER_MESSAGE.READ_HOLIDAY,
      );
      validatePeople(holidayInput);
      return { weekdayInput, holidayInput };
    } catch (error) {
      errorHandler(error);
      return this.getAllInput();
    }
  }
}

export default InputView;
