import React, { useState, useEffect } from 'react';
import {Map as Reactmap} from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import {getMapStyle} from './TrafficController'
import { useMap } from '../../hooks/useMap';

const Map = () => {
  const {mapStyle, setMapStyle} = useMap();
  const {visibility} = useMap();

  useEffect(() => {
    setMapStyle(getMapStyle({visibility}));
  },[visibility])

  return (
    <>
      <Reactmap
        reuseMaps
        mapboxAccessToken="pk.eyJ1IjoiZG91Z2hudXQ2MTMiLCJhIjoiY2xvOWQyamRjMDlpeDJpbXU4bmZ2bWNncCJ9.WwAmQXPSCCUNHQgoOCaa1Q"
        initialViewState={{
          longitude: 121.005318, 
          latitude: 14.640861,
          zoom: 9
        }}
        style={{width: '100vw', height: '100vh'}}
        mapStyle={mapStyle && mapStyle.toJS()}
        maxBounds={[
          [120.836704, 14.382982], // Southwest coordinates
          [121.121494, 14.803155] // Northeast coordinates
        ]}
      />
    </>
  )
}

export default Map;
