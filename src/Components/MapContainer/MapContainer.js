import React from "react";

import Map from "../Map/Map";

function MapContainer() {
  return (
      <Map
        isMarkerShown
        googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyACWIZRgcXsFJv3UbH8MQw_-hqqiao2MS8&v=3.exp&libraries=geometry,drawing,places"
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `400px` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
  );
}

export default MapContainer;
