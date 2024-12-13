import Schedule from './controller/Schedule.js';
import Calendar from './model/Calendar.js';
import InputView from './view/InputView.js';

class App {
  async run() {
    const newCalendar = new Calendar();
    const daysList = await newCalendar.getDays();
    const [month, dayWord] = await InputView.getDateInput(daysList);
    const calendar = await newCalendar.create(Number(month), dayWord);
    const { weekdayInput, holidayInput } = await InputView.getAllInput();
    const newSchedule = new Schedule(
      calendar,
      holidayInput,
      weekdayInput,
      dayWord,
    );
    await newSchedule.create();
    /*
      준팍,도밥,고니,수아,루루,글로,솔로스타,우코,슬링키,참새,도리
      수아,루루,글로,솔로스타,우코,슬링키,참새,도리,준팍,도밥,고니
     */
  }
}

export default App;
