import { useState } from "react"
import WeatherIMG from "../../../../Ressources/weather.jpg"
import "./index.css"


function DashboardEventsWeather(){

    // Rest of your component code
    const event = JSON.parse(sessionStorage.getItem("Events"));
    console.log(`Events : ${JSON.stringify(event)}`)

    return(
        <div className="dashboard-container">
        {event && (  
            <div className="DashboardEvent animate__fadeIn">
                <div>
                    <a href="/Event">
                        <img src={event[Math.floor(Math.random() * event.length) + 1].banner}></img>
                    </a>
                </div>
            </div>  
            )}
            <div className="DashboardWeather animate__fadeIn">
                <div>
                    <div>
                        <h1>GMMN</h1>
                        <p>24014kt<br />Q1010</p>
                        
                        <a href="#">See More</a>
                    </div>
                </div>
            </div>
            
        </div>
        

)


   
}

export default DashboardEventsWeather