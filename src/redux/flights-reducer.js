import { flightsApi } from "../api/flights-api";
import item_1 from "../assets/carusel-items/item-1.jpg";
import item_2 from "../assets/carusel-items/item-2.jpg";
import item_3 from "../assets/carusel-items/item-3.jpg";
import item_4 from "../assets/carusel-items/item-4.jpg";
import item_5 from "../assets/carusel-items/item-5.jpg";
import item_6 from "../assets/carusel-items/item-6.jpg";

const SET_FLIGHTS_CARRIERS = "SET_FLIGHTS_CARRIERS";
const SET_FLIGHTS_CURRENCIES = "SET_FLIGHTS_CURRENCIES";
const SET_FLIGHTS_PLACES = "SET_FLIGHTS_PLACES";
const SET_FLIGHTS_QUOTES = "SET_FLIGHTS_QUOTES";
const TOGGLE_FLIGHTS_FETCH = "TOGGLE_FLIGHTS_FETCH";
const ADD_TO_FLIGHTS_FAVORITES = "ADD_TO_FLIGHTS_FAVORITES";
const DELETE_FROM_FLIGHTS_FAVORITES = "DELETE_FROM_FLIGHTS_FAVORITES";

let initialState = {
  carouselItems: [
    { id: 1, img: item_1 },
    { id: 2, img: item_2 },
    { id: 3, img: item_3 },
    { id: 4, img: item_4 },
    { id: 5, img: item_5 },
    { id: 6, img: item_6 },
  ],
  flightsFetch: false,
  flightsCarriers: null,
  flightsCurrencies: null,
  flightsPlaces: null,
  flightsQuotes: null,
  flightsFavorites: [],
};

const flightsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FLIGHTS_CARRIERS:
      return {
        ...state,
        flightsCarriers: action.carriers,
      };
    case SET_FLIGHTS_CURRENCIES:
      return {
        ...state,
        flightsCurrencies: action.currencies,
      };
    case SET_FLIGHTS_PLACES:
      return {
        ...state,
        flightsPlaces: action.places,
      };
    case SET_FLIGHTS_QUOTES:
      return {
        ...state,
        flightsQuotes: action.quotes,
      };
    case TOGGLE_FLIGHTS_FETCH:
      return {
        ...state,
        flightsFetch: action.boolean,
      };
    case ADD_TO_FLIGHTS_FAVORITES:
      if (!state.flightsFavorites.includes(action.item)) {
        return {
          ...state,
          flightsFavorites: [...state.flightsFavorites, action.item],
        };
      } else {
        return state;
      }
    case DELETE_FROM_FLIGHTS_FAVORITES:
      return {
        ...state,
        flightsFavorites: state.flightsFavorites
          .slice(0, action.index)
          .concat(state.flightsFavorites.slice(action.index + 1)),
      };
    default:
      return state;
  }
};

export const toggleFlightsFetch = (boolean) => {
  return {
    type: TOGGLE_FLIGHTS_FETCH,
    boolean,
  };
};

export const setFilghtsCarriers = (carriers) => {
  return {
    type: SET_FLIGHTS_CARRIERS,
    carriers,
  };
};
export const setFilghtsCurrencies = (currencies) => {
  return {
    type: SET_FLIGHTS_CURRENCIES,
    currencies,
  };
};

export const setFilghtsPlaces = (places) => {
  return {
    type: SET_FLIGHTS_PLACES,
    places,
  };
};

export const setFilghtsQuotes = (quotes) => {
  return {
    type: SET_FLIGHTS_QUOTES,
    quotes,
  };
};

export const addToFlightsFavorites = (item) => {
  return {
    type: ADD_TO_FLIGHTS_FAVORITES,
    item,
  };
};

export const deleteFromFlightsFavorites = (index) => {
  return {
    type: DELETE_FROM_FLIGHTS_FAVORITES,
    index,
  };
};

export const flightsInit = (date) => {
  return (dispatch) => {
    dispatch(toggleFlightsFetch(true));
    flightsApi
      .getFlightsInfo(date)
      .then((response) => {
        dispatch(setFilghtsCarriers(response.Carriers));
        dispatch(setFilghtsCurrencies(response.Currencies));
        dispatch(setFilghtsPlaces(response.Places));
        dispatch(setFilghtsQuotes(response.Quotes));
      })
      .catch((e) => {
        console.log(`Couldn't get flights data: ${e}`);
        dispatch(setFilghtsCarriers(null));
        dispatch(setFilghtsCurrencies(null));
        dispatch(setFilghtsPlaces(null));
        dispatch(setFilghtsQuotes(null));
      })
      .finally(() => dispatch(toggleFlightsFetch(false)));
  };
};

export default flightsReducer;
