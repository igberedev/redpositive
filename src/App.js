import React from 'react';

import GetWeather from "./Components/GetWeather/GetWeather";
import ExchangeRate from "./Components/ExchangeRate/ExchangeRate";
import MapContainer from "./Components/MapContainer/MapContainer";

import "./App.css"

export class App extends React.Component {

    constructor(props) {
		super(props)
		
		this.state = {
			lat: "",
            long: ""

		}
	}

    componentDidMount() {
        navigator.geolocation.getCurrentPosition((position) => {
            this.setState(() => ({
                lat: position.coords.latitude,
                long: position.coords.longitude
            }))
        });
    }

    render () {
        if ((this.state.lat) && (this.state.long)) {
            return (
                <div className="app">
                    <h1 className="header">Agwara Nnaemeka Solution</h1>
                    <div className="weather-forex">
                        <div className="test-1">
                            <GetWeather latitude={this.state.lat} longitude={this.state.long} />
                        </div>

                        <div className="test-2">
                            <MapContainer latitude={this.state.lat} longitude={this.state.long} />
                        </div>

                        <div className="test-3">
                            <ExchangeRate />
                        </div>
                    </div>
                </div>
            )
        } else {
            return (
                ""
            )
        }
    }

}

export default App;