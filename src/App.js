import { connect } from "react-redux";
import { compose } from "redux";
import { withRouter } from "react-router-dom";
import UnauthApp from "./containers/UnauthApp/UnauthApp";
import AuthApp from "./containers/AuthApp/AuthApp";
import { autoLogin, signIn, logoutButton } from "./redux/auth-reducer";
import { useEffect } from "react";

const App = (props) => {
  useEffect(() => {
    props.autoLogin();
    // eslint-disable-next-line
  }, [props.token]);

  if (!!localStorage.getItem("_token-id")) {
    return (
      <AuthApp
        logoutButton={props.logoutButton}
        authFetching={props.authFetching}
      />
    );
  } else {
    return (
      <UnauthApp
        signIn={props.signIn}
        authError={props.authError}
        authFetching={props.authFetching}
      />
    );
  }
};

const mapStateToProps = (state) => {
  return {
    token: state.authReducer.token,
    authFetching: state.authReducer.authFetching,
    authError: state.authReducer.authError,
    authApp: state.appReducer.authApp,
  };
};

export default compose(
  withRouter,
  connect(mapStateToProps, {
    autoLogin,
    signIn,
    logoutButton,
  })
)(App);
