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

    const [displayThreeDays, setDisplayThreedays] = useState("false")

    let curr = new Date();

    //let currdate = curr.toISOString().substr(0,10);


    let months = ["January", "February", "March", "April", "May", "June", "July", "August", 
                    "September", "October", "November", "December"]


    useEffect(() => {
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
                        <p className="margin-right">{months[curr.getMonth()]} {curr.getDate()}</p>
                        <p className="margin-right">{weatherForcasts[0]}&#176;C</p>
                        <p className="margin-right">{dailyDescription[0]}</p>

                    </div>
                    <div className="day-data">
                        <p className="margin-right">{months[curr.getMonth()]} {curr.getDate() + 1}</p>
                        <p className="margin-right">{weatherForcasts[1]}&#176;C</p>
                        <p className="margin-right">{dailyDescription[1]}</p>
                    </div>
                    <div className="day-data">
                        <p className="margin-right">{months[curr.getMonth()]} {curr.getDate() + 2}</p>
                        <p className="margin-right">{weatherForcasts[2]}&#176;C</p>
                        <p className="margin-right">{dailyDescription[2]}</p>
                    </div>
                </div>
                )
        } else {
            return <p className="empty-data"></p>
        }
    }

    // console.log(weatherData);
    // console.log(dailyDescription);
    // console.log("Daily Forcast: ", weatherForcasts);



    return (
        <div className="get-weather">
            <div className="get-weather__time">
                <p className="get-weather__time--text">{curr.getHours()}:{curr.getMinutes()}</p>
                <p className="get-weather__time--text">{months[curr.getMonth()]}</p>
                <p className="get-weather__time--text">{curr.getDate()}</p>
            </div>

            <p className="get-weather__time--text">{place}</p>

            <p className="get-weather__time--text">{weatherForcasts[0]}&#176;C</p>

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
