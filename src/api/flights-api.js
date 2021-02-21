import * as axios from "axios";

const instance = axios.create({
  baseURL: process.env.REACT_APP_FLIGHTS_URL,
  headers: {
    "x-rapidapi-key": process.env.REACT_APP_FLIGHTS_X_RAPIDAPI_KEY,
    "x-rapidapi-host": process.env.REACT_APP_FLIGHTS_X_RAPIDAPI_HOST,
  },
});

export const flightsApi = {
  getFlightsInfo(departureDate = "anytime") {
    return instance
      .get(`${departureDate}`)
      .then((responce) => {
        return responce.data;
      })
      .catch(function (error) {
        console.error(error);
      });
  },
};

// Code: "RU"
// Name: "Россия"

// Code: "US"
// Name: "Соединенные Штаты Америки"

// CityId: "MOSC-sky"
// CountryId: "RU-sky"
// CountryName: "Россия"
// PlaceId: "SVO-sky"
// PlaceName: "Moscow Sheremetyevo"
// RegionId: ""

// CityId: "NYCA-sky"
// CountryId: "US-sky"
// CountryName: "Соединенные Штаты Америки"
// PlaceId: "JFK-sky"
// PlaceName: "New York John F. Kennedy"
// RegionId: "NY"
