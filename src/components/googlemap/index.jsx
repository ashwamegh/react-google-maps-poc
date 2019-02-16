import { GoogleMap, Marker,Circle, withGoogleMap, withScriptjs } from "react-google-maps"
import React from 'react';

const MyMapComponent = withScriptjs(withGoogleMap((props) => <GoogleMap
    defaultZoom={11}
    defaultCenter={{ lat: 15.494, lng: 73.82 }}
  >
    {props.isMarkerShown && <Marker position={{ lat: 15.494, lng: 73.82 }} />}
    {props.isCircleShown &&             
      <Circle 
         center={{ lat: 15.494, lng: 73.82   }}
         visible={true}
         options={{
          strokeWeight: 1,
          strokeOpacity: 0.4,
          strokeColor: 'rgb(229, 227, 223)'
         }}
         radius={20000}/>}
  </GoogleMap>))

export default MyMapComponent;