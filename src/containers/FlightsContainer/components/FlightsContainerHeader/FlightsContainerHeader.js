import { useState } from "react";
import { useDate } from "../../../../hooks/useDate";
import ReactCalendar from "../../../../pres-components/ReactCalendar/ReactCalendar";
import "./FlightsContainerHeader.css";

const FlightsContainerHeader = (props) => {
  const [displayCalendar, setDisplayCalendar] = useState("none");
  const [day, dayOfWeek, month, monthValue, year] = useDate();

  const toggleCalendar = () => {
    displayCalendar === "none"
      ? setDisplayCalendar("block")
      : setDisplayCalendar("none");
  };
  return (
    <div className="flights-container-header-wrapper">
      <div className="flights-container-header">
        <div className="flights-container-header__title">
          <span>Вылеты</span>
        </div>
        <div className="flights-container-header__icon">
          <svg
            width="8.67"
            height="17.33"
            viewBox="0 0 11 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 1L9.66667 9.66667L1 18.3333"
              stroke="#A7A7A7"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div className="flights-container-header__flight">
          <span>SVO - JFK</span>
        </div>
        <div className="flights-container-header__date">
          <span>
            {day < 10 ? `0${day}` : day}&nbsp;{monthValue}&nbsp;{year}
          </span>
        </div>
        <div className="flights-container-header__date-icon">
          <svg
            width="22"
            height="24"
            viewBox="0 0 22 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            onClick={toggleCalendar}
          >
            <path
              d="M18 4H4C2.89543 4 2 4.89543 2 6V20C2 21.1046 2.89543 22 4 22H18C19.1046 22 20 21.1046 20 20V6C20 4.89543 19.1046 4 18 4Z"
              stroke="#1157A7"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M15 2V6"
              stroke="#1157A7"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M7 2V6"
              stroke="#1157A7"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M2 10H20"
              stroke="#1157A7"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <ReactCalendar display={displayCalendar} flightsInit={props.flightsInit}/>
      </div>
    </div>
  );
};

export default FlightsContainerHeader;
