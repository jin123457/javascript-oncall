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

  async create(month, dayWord) {
    const calendar = [];
    const firstDays = this.findFirstDayOfMonth(month)[0];
    this.start = false;
    for (let day = 1; day <= this.monthDate[month - 1]; day += 1) {
      const monthdays = (firstDays + day - 1) % 7;
      if (this.days[monthdays] === dayWord) this.start = true;
      if (this.start) {
        this.isHoliday = false;
        const restDay = this.checkHoliday(month, day);
        if (restDay || monthdays === 0 || monthdays === 6)
          this.isHoliday = true;

        calendar.push({
          month,
          day,
          daysWord: this.days[monthdays],
          holiday: this.isHoliday,
        });
      }
    }

    return calendar;
  }

  findFirstDayOfMonth(month) {
    const day = this.monthDate.slice(0, month - 1).reduce((acc, cur) => {
      const moveDay = cur % 7;
      const restDay = (acc + moveDay) % 7;
      return restDay;
    }, this.newYearDay);
    return [day, this.days[day]];
  }

  checkHoliday(month, day) {
    if (
      this.holiday.get(month) &&
      this.holiday.get(month).some((days) => days === day)
    ) {
      return true;
    }

    return false;
  }

  async getDays() {
    return this.days;
  }
}
