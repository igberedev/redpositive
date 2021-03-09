import React from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

import { googleKeys } from "../../keys/keys";

import "./MapContainer.css";

const smallMapStyles = {
    width: '45vw',
    height: '60vh'
};

const bigMapStyles = {
    width: '95vw',
    height: '60vh'
}



const MapContainer = (props) => {

    const [width, setWidth] = React.useState(window.innerWidth);
	const breakpoint = 650;
  
	React.useEffect(() => {
	  const handleWindowResize = () => setWidth(window.innerWidth)
	  window.addEventListener("resize", handleWindowResize);
  
	  // Return a function from the effect that removes the event listener
	  return () => window.removeEventListener("resize", handleWindowResize);
	}, []);

    if (width > breakpoint) {
        return (
            <div className="map-container">
                <Map
                    google={props.google}
                    zoom={7}
                    style={smallMapStyles}
                    initialCenter={{ lat: props.latitude, lng: props.longitude }}
                >
                <Marker 
                    position={{ lat: props.latitude, lng: props.longitude }} 
                />
                </Map>
            </div>
        )
    } else {
        return (
        
            <div className="map-container">
                <Map
                    google={props.google}
                    zoom={7}
                    style={bigMapStyles}
                    initialCenter={{ lat: props.latitude, lng: props.longitude }}
                >
                <Marker 
                    position={{ lat: props.latitude, lng: props.longitude }} 
                />
                </Map>
            </div>
        );
    }


}

export default GoogleApiWrapper({
  apiKey: googleKeys
})(MapContainer);