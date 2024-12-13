import { Console } from '@woowacourse/mission-utils';
import Calendar from './model/Calendar.js';
import InputView from './view/InputView.js';

class App {
  async run() {
    const newCalendar = new Calendar();
    const monthDate = await newCalendar.getMonthDate();
    const daysList = await newCalendar.getDays();
    const [month, dayWord] = await InputView.getDateInput(daysList);
    const days = await newCalendar.findDays(Number(month));
    const { weekdayInput, holidayInput } = await InputView.getAllInput();

    const calendar = [];
    for (let day = 1; day <= monthDate[month - 1]; day++) {
      this.holiday = false;
      const restDay = await newCalendar.getHoliday(Number(month), day);
      const monthdays = (days[0] + day - 1) % 7;
      if (restDay || monthdays === 0 || monthdays === 6) this.holiday = true;

      calendar.push({
        day,
        month: Number(month),
        daysWord: daysList[monthdays],
        holiday: this.holiday,
      });
    }

    const holidayVisited = new Array(holidayInput.split(',').length).fill(0);
    const weekdayVisited = new Array(weekdayInput.split(',').length).fill(0);
    const arr = [];
    this.start = false;
    calendar.forEach((dayInfo) => {
      const { day, month, daysWord, holiday } = dayInfo;

      if (dayWord === daysWord) this.start = true;

      if (this.start) {
        if (holiday === true) {
          this.visiteIndex = holidayVisited.indexOf(0);

          if (this.visiteIndex === -1) {
            holidayVisited.fill(0);
            this.visiteIndex = 0;
          }
          this.name = holidayInput.split(',')[this.visiteIndex];
          if (arr.length > 0 && arr[arr.length - 1][3] === this.name) {
            this.name = holidayInput.split(',')[this.visiteIndex + 1];
            holidayVisited[this.visiteIndex + 1] = 1;
          } else {
            holidayVisited[this.visiteIndex] = 1;
          }

          if (daysWord === '토' || daysWord === '일') {
            return arr.push([month, day, daysWord, this.name, '']);
          }

          return arr.push([month, day, daysWord, this.name, '(휴일)']);
        }

        this.wvisiteIndex = weekdayVisited.indexOf(0);
        if (this.wvisiteIndex === -1) {
          weekdayVisited.fill(0);
          this.wvisiteIndex = 0;
        }
        this.name = weekdayInput.split(',')[this.wvisiteIndex];
        if (arr.length > 0 && arr[arr.length - 1][3] === this.name) {
          this.name = weekdayInput.split(',')[this.wvisiteIndex + 1];
          weekdayVisited[this.wvisiteIndex + 1] = 1;
        } else {
          weekdayVisited[this.wvisiteIndex] = 1;
        }
        arr.push([month, day, daysWord, this.name, '']);
      }

      return dayInfo;
    });

    arr.forEach((info) => {
      Console.print(
        `${info[0]}월 ${info[1]}일 ${info[2]}${info[4]} ${info[3]}`,
      );
    });
    /**
     * 준팍,도밥,고니,수아,루루,글로,솔로스타,우코,슬링키,참새,도리
      수아,루루,글로,솔로스타,우코,슬링키,참새,도리,준팍,도밥,고니
     */
  }
}

export default App;
