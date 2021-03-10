import React from "react";
import { useState, useEffect } from 'react';
import axios from "axios";

import "./GetWeather.css";
import {weatherKeys} from "../../keys/keys";
import { googleKeys} from "../../keys/keys";

const GetWeather = (props) => {
    const [weatherForcasts, setDailyForcast] = useState([])

    // const [weatherData, setWeatherData] = useState([])

    const [dailyDescription, setDailyDescription] = useState([])

    const [place, setPlace] = useState("")

    const [day_1, setDay_1] = useState("")
    const [day_2, setDay_2] = useState("")
    const [day_3, setDay_3] = useState("")

    const [displayThreeDays, setDisplayThreedays] = useState("false")

    let curr = new Date();

    
    //console.log(curr.toISOString().substr(0,10));

    //let currdate = curr.toISOString().substr(0,10);


    let months = ["January", "February", "March", "April", "May", "June", "July", "August", 
                    "September", "October", "November", "December"]


    useEffect(() => {

        setDay_1(new Date().toDateString().substr(0, 10))

        setDay_2(new Date(new Date().getTime() + 86400000).toDateString().substr(0, 10))

        setDay_3(new Date(new Date().getTime() + 86400000 + 86400000).toDateString().substr(0, 10))
    
    
        // Get the Weather data for the next three days
        const getData = async () => {
            try {
                const baseUrl = 'https://api.openweathermap.org/data/2.5/onecall?';

                const response = await axios.get(`
                    ${baseUrl}lat=${props.latitude}&lon=${props.longitude}&exclude=current,
                    minutely,hourly,alerts&APPID=${weatherKeys}`
                )

                setDailyDescription([response.data.daily[0].weather[0].description, response.data.daily[1].weather[0].description,
                    response.data.daily[2].weather[0].description]) 

                setDailyForcast([
                    parseInt(response.data.daily[0].temp.day - 273), 
                    parseInt(response.data.daily[1].temp.day - 273), 
                    parseInt(response.data.daily[2].temp.day - 273)
                ])    

                console.log(response.data)

                // setWeatherData(response.data)
            }  catch (e) {
				console.log('There has been a problem with your fetch operation:', e)
			}
        } 


        // Use Google API to get the person's stringified location

        const getPlace = async () => {
            let lat = JSON.stringify(props.latitude);
            let lng = JSON.stringify(props.longitude);

            // let lat = JSON.stringify(5.4037642);
            // let lng = JSON.stringify(7.0086866);

            let latlng = lat + "," + lng;
            try {
                const baseUrl = 'https://maps.googleapis.com/maps/api/geocode/json?latlng=';

                const response = await axios.get(`${baseUrl}${latlng}&key=${googleKeys}`)

                setPlace(response.data.results[2].formatted_address)

            }  catch (e) {
				console.log('There has been a problem with your fetch operation:', e)
			}
        }

        getData(); 

        getPlace()

    }, [props.latitude, props.longitude])

    const onclickSetDisplay = () => {
        if (displayThreeDays === "true") {
            setDisplayThreedays("false")
        } else {
            setDisplayThreedays("true")
        }
    }

    const dislayThreeDays = () => {
        if (displayThreeDays === "true") {
            return (
                <div className="display-three-days">
                    <div className="day-data">
                        <p className="day-data--text">{day_1}</p>
                        <div className="day-data--text">
                            <img
                                src={weatherForcasts[0] > 34 ? "/img/clearDay.png" : "/img/normalDay.png"}
                                alt="Weather_Image"
                                className=""
                            />
                            <p className="day-data--text">{weatherForcasts[0]}&#176;C</p>
                        </div>
                        
                        <p className="day-data--text">{dailyDescription[0]}</p>

                    </div>

                    <div className="day-data">
                        <p className="day-data--text">{day_2}</p>
                        <div className="day-data--text">
                            <img
                                src={weatherForcasts[1] > 32 ? "/img/clearDay.png" : "/img/normalDay.png"}
                                alt="Weather_Image"
                                className=""
                            />
                            <p className="day-data--text">{weatherForcasts[1]}&#176;C</p>
                        </div>
                        <p className="day-data--text">{dailyDescription[1]}</p>
                    </div>

                    <div className="day-data">
                        <p className="day-data--text">{day_3}</p>
                        <div className="day-data--text">
                            <img
                                src={weatherForcasts[2] > 32 ? "/img/normalDay.png" : "/img/rainyDay.png"}
                                alt="Weather_Image"
                                className=""
                            />
                            <p>{weatherForcasts[2]}&#176;C</p>
                        </div>
                        <p className="day-data--text">{dailyDescription[2]}</p>
                    </div>
                </div>
                )
        } else {
            return <p className="empty-data"></p>
        }
    }

    return (
        <div className="get-weather">
            <div className="get-weather__time">
                <p className="get-weather__time--text get-weather--color">{curr.getHours()}:{curr.getMinutes()}</p>
                <p className="get-weather__time--text get-weather--color">{months[curr.getMonth()]}</p>
                <p className="get-weather__time--text get-weather--color">{curr.getDate()}</p>
            </div>

            <p className="get-weather__time--text get-weather--place">{place}</p>

            <div className="get-weather--temp">
                <img
                    src={weatherForcasts[0] > 34 ? "/img/clearDay.png" : "/img/normalDay.png"}
                    alt="Weather_Image"
                    className=""
                />
                <p>{weatherForcasts[0]}&#176;C</p>
            </div>

            <p onClick={onclickSetDisplay} className="three-days">Next Three Days Forcast</p>

            {dislayThreeDays()}

        </div>
    )
}


export default GetWeather;


/*{console.log(weatherForcasts)}
{console.log(curr)}

{console.log( curr.toISOString().substr(0,10))}

{console.log(weekDays[curr.getDay()])}

{console.log(curr.getMinutes())}*/
