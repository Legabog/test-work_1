import Carousel from "react-elastic-carousel";
import "./FlightsContainerBody.css";

const FlightsContainerBody = (props) => {
  return (
    <div className="flights-container-body-wrapper">
      <div className="flights-container-body">
        <div className="flights-container-body__carousel">
          <Carousel
            pagination={false}
            itemsToShow={3.4}
            showArrows={false}
            transitionMs={300}
            itemPadding={[0, 0]}
            outerSpacing={0}
          >
            {props.carouselItems.map((e) => (
              <div className="flights-container-body__carousel-item" key={e.id}>
                <img src={e.img} draggable="false" alt={`item-${e.id}`} />
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default FlightsContainerBody;
