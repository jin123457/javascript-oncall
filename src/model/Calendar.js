export default class Calendar {
  constructor() {
    this.month = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    this.newYearDay = 0;
    this.monthDate = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    this.days = ['일', '월', '화', '수', '목', '금', '토'];
    this.holiday = new Map([
      [1, [1]],
      [3, [1]],
      [5, [5]],
      [6, [6]],
      [8, [15]],
      [10, [3, 9]],
      [12, [25]],
    ]);
  }

  async findDays(month) {
    const day = this.monthDate.slice(0, month - 1).reduce((acc, cur) => {
      const moveDay = cur % 7;
      const restDay = (acc + moveDay) % 7;
      return restDay;
    }, this.newYearDay);
    return [day, this.days[day]];
  }

  async getMonth() {
    return this.month;
  }

  async getNewYearDay() {
    return this.newYearDay;
  }

  async getMonthDate() {
    return this.monthDate;
  }

  async getHoliday(month, day) {
    if (this.holiday.get(month)) {
      if (this.holiday.get(month).some((days) => days === day)) return true;
    }

    return false;
  }

  async getDays() {
    return this.days;
  }
}
