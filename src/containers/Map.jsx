import React, { Component } from 'react';
// const mapboxgl = require('mapbox-gl');
// const MapboxDirections = require('mapbox-gl-directions');
import * as mapboxgl from 'mapbox-gl';
const MapboxDirections = require('@mapbox/mapbox-gl-directions');

class Map extends Component{

  componentDidMount() {
    mapboxgl.accessToken = 'pk.eyJ1IjoiYXJqdW5sb2wiLCJhIjoiY2o2a2QxbDV3MGZ6cTMycGQ2aHA2YmhxbSJ9.PsWUXrMDKt4rYv5lLVfNMg'
    const map = new mapboxgl.Map({
      container: this.container,
      style: 'mapbox://styles/mapbox/streets-v9',
    });
    const directions = new MapboxDirections({
      unit: 'metric',
      profile: 'cycling'
    });
    map.addControl(directions, 'top-left');
  }

  render() {
    return (
      <div style={{height: 200}} ref={(x) => { this.container = x; }}/>
    )
  }
};

export default Map