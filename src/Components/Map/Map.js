/*global google*/

import React from 'react';
const { compose, withProps, lifecycle } = require("recompose");
const {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  DirectionsRenderer,
} = require("react-google-maps");

const MapWithADirectionsRenderer = compose(
  withProps({
    googleMapURL: `https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_API_KEY}&v=3.exp&libraries=geometry,drawing,places`,
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap,
  lifecycle({
    componentDidMount() {

        fetch(
          `https://maps.googleapis.com/maps/api/directions/json?
origin=Toronto&destination=Montreal
&key=AIzaSyACWIZRgcXsFJv3UbH8MQw_-hqqiao2MS8`
        ).then((res) => {
        res.json()
        }).then(data => console.log(data))
      const DirectionsService = new google.maps.DirectionsService();

      DirectionsService.route(
        {
          origin: new google.maps.LatLng(
            this.props.originLat,
            this.props.originLng
          ),
          destination: new google.maps.LatLng(
            this.props.destLat,
            this.props.destLng
          ),
          waypoints: this.props.waypoints,
          optimizeWaypoints: true,
          travelMode: google.maps.TravelMode.DRIVING,
        },
        (result, status) => {
          if (status === google.maps.DirectionsStatus.OK) {
            this.setState({
              directions: result,
            });
          } else {
            console.error(`error fetching directions ${result}`);
          }
        }
      );
    },
  })
)((props) => (
  <>
    <GoogleMap
      defaultZoom={7}
      defaultCenter={new google.maps.LatLng(41.85073, -87.65126)}
    >
      {props.directions && <DirectionsRenderer directions={props.directions} />}
    </GoogleMap>
    <a
      href={`https://www.google.com/maps/dir/?api=1&origin=${props.originLat},${props.originLng}&destination=${props.destLat},${props.destLng}&travelmode=driving&waypoints=Grand+Canyon`}
      target={"_blank"}
      rel={"noopener noreferrer"}
    >
      see on google maps
    </a>
  </>
));

export default MapWithADirectionsRenderer