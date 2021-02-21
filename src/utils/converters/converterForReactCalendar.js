export const converterForReactCalendar = (fullDate) => {
  return `${fullDate.getFullYear()}-${
    fullDate.getMonth() + 1 < 10
      ? `0${fullDate.getMonth() + 1}`
      : fullDate.getMonth() + 1
  }-${
    fullDate.getDate() < 10
      ? `0${fullDate.getDate()}`
      : fullDate.getDate()
  }`;
};
