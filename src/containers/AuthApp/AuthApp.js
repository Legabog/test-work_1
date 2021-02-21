import LogoutButton from "../../pres-components/LogoutButton/LogoutButton";
import { Preloader } from "../../pres-components/Preloader/Preloader";
import FlightsContainer from "../FlightsContainer/FlightsContainer";
import "./AuthApp.css";

const AuthApp = (props) => {
  return (
    <div className="auth-app-wrapper">
      <div className="auth-app">
        {props.authFetching ? (
          <Preloader />
        ) : (
          <>
            <FlightsContainer />
            <LogoutButton text={"Выйти"} onClick={props.logoutButton} />
          </>
        )}
      </div>
    </div>
  );
};

export default AuthApp;
