import { connect } from "react-redux";
import { compose } from "redux";
import { withRouter } from "react-router-dom";
import { flightsInit, addToFlightsFavorites, deleteFromFlightsFavorites } from "../../redux/flights-reducer";

import FlightsContainerBody from "./components/FlightsContainerBody/FlightsContainerBody";
import FlightsContainerFooter from "./components/FlightsContainerFooter/FlightsContainerFooter";
import FlightsContainerHeader from "./components/FlightsContainerHeader/FlightsContainerHeader";
import "./FlightsContainer.css";
import { Preloader } from "../../pres-components/Preloader/Preloader";

const FlightsContainer = (props) => {
  return (
    <div className="flights-container-wrapper">
      <div className="flights-container">
        {props.flightsFetch ? (
          <Preloader />
        ) : (
          <>
            <FlightsContainerHeader flightsInit={props.flightsInit}/>
            <FlightsContainerBody carouselItems={props.carouselItems} />
            <FlightsContainerFooter
              flightsFavorites={props.flightsFavorites}
              flightsQuotes={props.flightsQuotes}
              flightsCurrencies={props.flightsCurrencies}
              flightsCarriers={props.flightsCarriers}
              addToFlightsFavorites={props.addToFlightsFavorites}
              deleteFromFlightsFavorites={props.deleteFromFlightsFavorites}
            />
          </>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    carouselItems: state.flightsReducer.carouselItems,
    flightsFavorites: state.flightsReducer.flightsFavorites,
    flightsFetch: state.flightsReducer.flightsFetch,
    flightsQuotes: state.flightsReducer.flightsQuotes,
    flightsCurrencies: state.flightsReducer.flightsCurrencies,
    flightsCarriers: state.flightsReducer.flightsCarriers,
  };
};

export default compose(
  withRouter,
  connect(mapStateToProps, {
    flightsInit,
    addToFlightsFavorites,
    deleteFromFlightsFavorites
  })
)(FlightsContainer);
