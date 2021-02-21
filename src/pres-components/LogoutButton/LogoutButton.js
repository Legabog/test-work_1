import "./LogoutButton.css";

const LogoutButton = (props) => {
  const clickHandler = () => {
    props.onClick();
  };

  return (
    <div className="logout-button-wrapper">
      <div className="logout-button" onClick={clickHandler}>
        <div className="logout-button__text">
          <span>{props.text}</span>
        </div>
        <svg
          width="18"
          height="18"
          viewBox="0 0 22 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8 20H4C3.46957 20 2.96086 19.7893 2.58579 19.4142C2.21071 19.0391 2 18.5304 2 18V4C2 3.46957 2.21071 2.96086 2.58579 2.58579C2.96086 2.21071 3.46957 2 4 2H8"
            stroke="#1157A7"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M15 16L20 11L15 6"
            stroke="#1157A7"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M20 11H8"
            stroke="#1157A7"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  );
};

export default LogoutButton;
