import Axios from "axios";
import { flightsInit } from "./flights-reducer";

const AUTH_SUCCESS = "AUTH_SUCCESS";
const AUTH_LOGOUT = "AUTH_LOGOUT";
const TOGGLE_AUTH_FETCHING = "TOGGLE_AUTH_FETCHING";
const TOGGLE_AUTH_ERROR = "TOGGLE_AUTH_ERROR";

let initialState = {
  token: null,
  activeEmail: null,
  authFetching: false,
  authError: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_SUCCESS:
      return {
        ...state,
        token: action.token,
        activeEmail: action.activeEmail,
      };
    case AUTH_LOGOUT:
      return {
        ...state,
        token: null,
        activeEmail: null,
      };
    case TOGGLE_AUTH_FETCHING:
      return {
        ...state,
        authFetching: action.fetching,
      };
    case TOGGLE_AUTH_ERROR:
      return {
        ...state,
        authError: action.error,
      };
    default:
      return state;
  }
};

export const authSuccess = (token, activeEmail) => {
  return {
    type: AUTH_SUCCESS,
    token,
    activeEmail,
  };
};

export const logout = () => {
  localStorage.removeItem("_token-id");
  localStorage.removeItem("_user-active");
  localStorage.removeItem("_expiration-date");

  return {
    type: AUTH_LOGOUT,
  };
};

export const toggleFetching = (fetching) => {
  return {
    type: TOGGLE_AUTH_FETCHING,
    fetching,
  };
};

export const toggleAuthError = (error) => {
  return {
    type: TOGGLE_AUTH_ERROR,
    error,
  };
};

export const signIn = (email, password) => {
  return async (dispatch) => {
    const signInData = {
      email,
      password,
      returnSecureToken: true,
    };
    let url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${process.env.REACT_APP_FIREBASE_API_KEY}`;
    dispatch(toggleFetching(true));

    Axios.post(url, signInData)
      .then((response) => {
        const data = response.data;
        const expirationDate = new Date(
          new Date().getTime() + data.expiresIn * 24000
        );

        localStorage.setItem("_token-id", data.idToken);
        localStorage.setItem("_user-active", data.email);
        localStorage.setItem("_expiration-date", expirationDate);

        dispatch(authSuccess(data.idToken, data.email));
        dispatch(autoLogout(data.expiresIn));
      })
      .then(() => {
        dispatch(toggleFetching(false));
      })
      .catch((e) => {
        dispatch(toggleAuthError(true));
        console.log("Sign in error");
      })
      .finally(() => dispatch(toggleFetching(false)));
  };
};

export const autoLogin = () => {
  return (dispatch) => {
    const token = localStorage.getItem("_token-id");
    const emailActiveUser = localStorage.getItem("_user-active");

    if (!token && !emailActiveUser) {
      dispatch(logout());
    } else {
      const expirationDate = new Date(localStorage.getItem("_expiration-date"));

      if (expirationDate <= new Date()) {
        dispatch(logout());
      } else {
        dispatch(authSuccess(token, emailActiveUser));
        dispatch(flightsInit());
        dispatch(
          autoLogout((expirationDate.getTime() - new Date().getTime()) / 1000)
        );
      }
    }
  };
};

export const autoLogout = (time) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(logout());
    }, time * 1000);
  };
};

export const logoutButton = () => {
  return (dispatch) => {
    dispatch(logout());
  };
};

export default authReducer;
