import OutputView from '../view/OutputView.js';

export default class Schedule {
  constructor(calendar, holidayInput, weekdayInput, dayWord) {
    this.calendar = calendar;
    this.holidayInput = holidayInput;
    this.weekdayInput = weekdayInput;
    this.dayWord = dayWord;
  }

  async create() {
    const holidayPeople = this.holidayInput.split(',').length;
    const weekdayPeople = this.weekdayInput.split(',').length;
    this.holidayVisited = new Array(holidayPeople).fill(0);
    this.weekdayVisited = new Array(weekdayPeople).fill(0);
    const scheduleArr = [];
    this.calendar.forEach((dayInfo) => {
      const { day, month, daysWord, holiday } = dayInfo;

      if (holiday === true) {
        this.holidayWorkPeople(scheduleArr);
        if (daysWord === '토' || daysWord === '일') {
          return scheduleArr.push([month, day, daysWord, this.name, '']);
        }

        return scheduleArr.push([month, day, daysWord, this.name, '(휴일)']);
      }

      this.weekdayWorkPeople(scheduleArr);

      return scheduleArr.push([month, day, daysWord, this.name, '']);
    });

    await OutputView.printSchedule(scheduleArr);
  }

  holidayWorkPeople(scheduleArr) {
    this.visiteIndex = this.holidayVisited.indexOf(0);

    if (this.visiteIndex === -1) {
      this.holidayVisited.fill(0);
      this.visiteIndex = 0;
    }
    this.name = this.holidayInput.split(',')[this.visiteIndex];
    if (
      scheduleArr.length > 0 &&
      scheduleArr[scheduleArr.length - 1][3] === this.name
    ) {
      this.name = this.holidayInput.split(',')[this.visiteIndex + 1];
      this.holidayVisited[this.visiteIndex + 1] = 1;
    } else {
      this.holidayVisited[this.visiteIndex] = 1;
    }
  }

  weekdayWorkPeople(scheduleArr) {
    this.wvisiteIndex = this.weekdayVisited.indexOf(0);
    if (this.wvisiteIndex === -1) {
      this.weekdayVisited.fill(0);
      this.wvisiteIndex = 0;
    }
    this.name = this.weekdayInput.split(',')[this.wvisiteIndex];
    if (
      scheduleArr.length > 0 &&
      scheduleArr[scheduleArr.length - 1][3] === this.name
    ) {
      this.name = this.weekdayInput.split(',')[this.wvisiteIndex + 1];
      this.weekdayVisited[this.wvisiteIndex + 1] = 1;
    } else {
      this.weekdayVisited[this.wvisiteIndex] = 1;
    }
  }
}
