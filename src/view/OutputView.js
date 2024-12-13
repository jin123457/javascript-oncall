import { Console } from '@woowacourse/mission-utils';

export default class OutputView {
  static async printSchedule(arr) {
    arr.forEach((info) => {
      Console.print(
        `${info[0]}월 ${info[1]}일 ${info[2]}${info[4]} ${info[3]}`,
      );
    });
  }
}
