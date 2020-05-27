import React from "react";

import Map from "../Map/Map";

function MapContainer() {
  return (
    <Map
      isMarkerShown
      originLat={40.689495}
      originLng={-73.90796}
      destLat={34.038125}
      destLng={-118.473072}
      waypoints={[
        {
          location: "Grand Canyon",
          stopover: false,
        },
      ]}
      googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_API_KEY}&v=3.exp&libraries=geometry,drawing,places`}
      loadingElement={<div style={{ height: `100%` }} />}
      containerElement={<div style={{ height: `400px` }} />}
      mapElement={<div style={{ height: `100%` }} />}
    />
  );
}

export default MapContainer;
