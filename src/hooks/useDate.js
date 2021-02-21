import { useState } from "react";

export const useDate = () => {
  const date = new Date();
  let monthValue = "";
  const [dateResult] = useState({
    day: date.getDate(),
    dayOfWeek: date.getDay(),
    month: date.getMonth(),
    year: date.getFullYear(),
  });

  switch (dateResult.month) {
    case 0:
      monthValue = "января";
      break;
    case 1:
      monthValue = "февраля";
      break;
    case 2:
      monthValue = "марта";
      break;
    case 3:
      monthValue = "апреля";
      break;
    case 4:
      monthValue = "мая";
      break;
    case 5:
      monthValue = "июня";
      break;
    case 6:
      monthValue = "июля";
      break;
    case 7:
      monthValue = "августа";
      break;
    case 8:
      monthValue = "сентября";
      break;
    case 9:
      monthValue = "октября";
      break;
    case 10:
      monthValue = "ноября";
      break;
    case 11:
      monthValue = "декабря";
      break;

    default:
      return null;
  }

  return [
    dateResult.day,
    dateResult.dayOfWeek,
    dateResult.month,
    monthValue,
    dateResult.year,
  ];
};
