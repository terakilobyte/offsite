"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactGoogleMaps = require("react-google-maps");

var React = require('react');
// const PropTypes = require('prop-types');

// Wrap all `react-google-maps` components with `withGoogleMap` HOC
// and name it GettingStartedGoogleMap
var GMap = (0, _reactGoogleMaps.withGoogleMap)(function (props) {
  return React.createElement(_reactGoogleMaps.GoogleMap, {
    ref: props.onMapLoad,
    defaultZoom: 3,
    defaultCenter: { lat: 40.72890645746088, lng: -73.98796604106292 }
  });
});

exports.default = GMap;