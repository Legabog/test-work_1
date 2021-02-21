import { BackDrop } from "../../pres-components/BackDrop/BackDrop";
import AuthForm from "../AuthForm/AuthForm";
import "./UnauthApp.css";

const UnauthApp = (props) => {
  return (
    <>
      <div className="unauth-app-wrapper">
          <div className="unauth-app">
            <AuthForm
              title={"Simple Flight Check"}
              signIn={props.signIn}
              authError={props.authError}
              authFetching={props.authFetching}
            />
            <BackDrop />
          </div>
      </div>
    </>
  );
};

export default UnauthApp;
