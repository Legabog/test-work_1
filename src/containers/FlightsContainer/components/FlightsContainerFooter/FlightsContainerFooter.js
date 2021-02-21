import "./FlightsContainerFooter.css";
import FlightsContainerFooterItem from "./FlightsContainerFooterItem/FlightsContainerFooterItem";

const FlightsContainerFooter = (props) => {
  return (
    <div className="flights-container-footer-wrapper">
      <div className="flights-container-footer">
        <div className="flights-container-footer__favotites">
          <span>Добавлено в Избранное:</span>
          <span>&nbsp;{props.flightsFavorites.length}&nbsp;</span>
          <span>рейсов</span>
        </div>
        <div className="flights-container-footer__container">
          {props.flightsQuotes === null
            ? null
            : props.flightsQuotes.map((e) => {
                return (
                  <FlightsContainerFooterItem
                    key={e.QuoteId}
                    flightsCarriers={props.flightsCarriers}
                    quoteId={e.QuoteId}
                    quoteData={e.OutboundLeg.DepartureDate}
                    qouteAeroflot={e.OutboundLeg.CarrierIds[0]}
                    quotePrice={e.MinPrice}
                    currenciesSymbol={props.flightsCurrencies[0].Symbol}
                    addToFlightsFavorites={props.addToFlightsFavorites}
                    deleteFromFlightsFavorites={props.deleteFromFlightsFavorites}
                    flightsFavorites={props.flightsFavorites}
                  />
                );
              })}
        </div>
      </div>
    </div>
  );
};

export default FlightsContainerFooter;
