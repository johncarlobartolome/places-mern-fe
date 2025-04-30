import ReactMapboxGl from "react-mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

import "./Map.css";

const MapComponent = ReactMapboxGl({
  accessToken:
    "pk.eyJ1IjoiYmFydG9sb21lam9obmNhcmxvIiwiYSI6ImNtYTJpZ29mbzFiYTQybHNkNmFmOXVwNm0ifQ.zHdL1C7j9LS0Ac7SDpsmWg",
});

const Map = (props) => {
  return (
    <div className={`map ${props.className}`} style={props.style}>
      <MapComponent
        style="mapbox://styles/mapbox/streets-v9"
        containerStyle={{
          height: "100%",
          width: "100%",
        }}
        center={[props.longitude, props.latitude]}
        zoom={[11]}
      />
    </div>
  );
};

export default Map;
