import React from "react";
import "../styles/pages/Map.scss";
// import MapGraph from "./MapGraph";
import MapSlide from "./MapSlide";
import "swiper/swiper.min.css";
import "swiper/swiper-bundle.min.css";

function Map() {
  return (
    <div className="map">
      <div className="inner">
        <div className="map__title">LOA ROAD MAP</div>
      </div>
      <div className="map__graph">
        {/* <MapGraph /> */}
        <MapSlide />
      </div>
    </div>
  );
}

export default Map;
