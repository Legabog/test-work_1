import Calendar from "react-calendar";
import { useState } from "react";
import "./ReactCalendar.css";
import { converterForReactCalendar } from "../../utils/converters/converterForReactCalendar";

const ReactCalendar = (props) => {
  const [today, changeDay] = useState(new Date());
  const changeDayHandler = (value, event) => {
    changeDay();
    props.flightsInit(converterForReactCalendar(value));
    console.log(value);
  };
  return (
    <div
      className="react-calendar-component"
      style={{ display: props.display }}
    >
      <Calendar value={today} onChange={changeDayHandler} />
    </div>
  );
};

export default ReactCalendar;
