import { withGoogleMap, GoogleMap, Marker } from "react-google-maps";
const React = require('react');
// const PropTypes = require('prop-types');

// Wrap all `react-google-maps` components with `withGoogleMap` HOC
// and name it GettingStartedGoogleMap
const GMap = withGoogleMap(props => (
  <GoogleMap
    ref={props.onMapLoad}
    defaultZoom={3}
    defaultCenter={{ lat: 40.72890645746088, lng: -73.98796604106292}}
  />
));

export default GMap;
