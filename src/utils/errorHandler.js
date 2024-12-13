import { Console } from '@woowacourse/mission-utils';
import { ERROR_MESSAGE } from './constants.js';

const errorHandler = (error) => {
  Console.print(
    `${ERROR_MESSAGE.HEADER} ${error.message} ${ERROR_MESSAGE.RE_INPUT}`,
  );
};

export { errorHandler };
