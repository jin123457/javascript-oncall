const USER_MESSAGE = Object.freeze({
  READ_DATE: '비상 근무를 배정할 월과 시작 요일을 입력하세요>',
  READ_WEEKDAY: '평일 비상 근무 순번대로 사원 닉네임을 입력하세요>',
  READ_HOLIDAY: '휴일 비상 근무 순번대로 사원 닉네임을 입력하세요>',
});
const ERROR_MESSAGE = Object.freeze({
  HEADER: '[ERROR]',
  RE_INPUT: '다시 입력해 주세요.',
  VALIDATION_INPUT: '유효하지 않은 입력 값입니다.',
});

export { USER_MESSAGE, ERROR_MESSAGE };
