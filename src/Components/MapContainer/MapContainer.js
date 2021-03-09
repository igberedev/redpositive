import React from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

import { googleKeys } from "../../keys/keys";

import "./MapContainer.css";

const mapStyles = {
    width: '100vw',
    height: '50vh'
};

const MapContainer = (props) => {

    return (
        
        <div className="map-container">
            <Map
                google={props.google}
                zoom={7}
                style={mapStyles}
                initialCenter={{ lat: props.latitude, lng: props.longitude }}
            >
            <Marker 
                position={{ lat: props.latitude, lng: props.longitude }} 
            />
            </Map>
        </div>
    );

}

export default GoogleApiWrapper({
  apiKey: googleKeys
})(MapContainer);