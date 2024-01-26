import { useState } from "react"
import WeatherIMG from "../../../../Ressources/weather.jpg"
import "./index.css"


function DashboardEventsWeather(){

    // Rest of your component code
    const MaghrebEvents = JSON.parse(sessionStorage.getItem("MaghrebEvents"));
    console.log(`Events : ${JSON.stringify(MaghrebEvents)}`)

    return(
        <div className="dashboard-container">
        
            <div className="DashboardEvent animate__fadeIn">
            {MaghrebEvents && (  
                <div>
                    <a href="/Event">
                        <img src={MaghrebEvents[Math.floor(Math.random() * MaghrebEvents.length) ].banner}></img>
                    </a>
                </div>
                 )}
            </div>  
           
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