import { useEffect, useState } from "react"

import "./index.css"
import NoEventPNG from "../../../../Ressources/No Events Loaded.png"

// SkyColors
import Dawn from '../../../../Ressources/SkyImages/Dawn.jpg';
import Day from '../../../../Ressources/SkyImages/Day.jpg';
import Sunset from '../../../../Ressources/SkyImages/Sunset.jpg';
import Night from '../../../../Ressources/SkyImages/Night.jpg';
// import Dawn from "../../../../../public/SkyImages/Dawn.jpg"

function DashboardEventsWeather(){
    const [Metar , setMetar] = useState()
    const [Events , setEvents] = useState()


    useEffect(()=>{


        // Rest of your component code
        if (JSON.parse(sessionStorage.getItem("MaghrebEvents")) == null){
            setEvents(JSON.parse(sessionStorage.getItem("VatsimEvents")))
            console.log("NO MAGHREB EVENT")
        }else{
            setEvents(JSON.parse(sessionStorage.getItem("MaghrebEvents")))

            console.log("MAGHREB EVENT EXISTS")
        }

        // setMaghrebEvents(JSON.parse(sessionStorage.getItem("MaghrebEvents")));
        // console.log(`Events : ${JSON.stringify(MaghrebEvents)}`)
        const GetAirportWeatherArray = ["gmmn","daag","dtta","gmad","gmff"]
        var i = 0

        fetch(`http://127.0.0.1:1000/GetWeather/${GetAirportWeatherArray[i]}`)
                .then(data => data.json())
                .then(data => {
                    const state = (data.reportTime.split(" "))[1].split(":")[0]
                    // console.log(`State : ${state} , time report : ${data.reportTime}`)
                    // const state = 18
                    // alert(state)
                    if ( state > 0)
                        document.querySelector(".DashboardWeather > div ").style.backgroundImage = `url(${Night})`;
                    if ( state > 5)
                        document.querySelector(".DashboardWeather > div ").style.backgroundImage = `url(${Dawn})`;
                    if ( state > 8)
                        document.querySelector(".DashboardWeather > div ").style.backgroundImage = `url(${Day})`;
                    if ( state > 17)
                        document.querySelector(".DashboardWeather > div ").style.backgroundImage = `url(${Sunset})`;
                    if ( state > 20)
                        document.querySelector(".DashboardWeather > div ").style.backgroundImage = `url(${Night})`;
                    setMetar(data)
                })
                .catch((err)=>{
                    // alert("check console there is an error")
                    console.log(`Error from alert : ${err}`)
                })
                                

        setInterval(()=>{
            fetch(`http://127.0.0.1:1000/GetWeather/${GetAirportWeatherArray[i]}`)
                .then(data => data.json())
                .then(data => {
                    const DashboardWeather = document.querySelector(".DashboardWeather > div ")
                    const state = (data.reportTime.split(" "))[1].split(":")[0]
                    // console.log(`State : ${state} , time report : ${data.reportTime}`)
                    // const state = 6
                    // alert(state)
                    if (DashboardWeather){
                        if ( state > 0)
                            DashboardWeather.style.backgroundImage = `url(${Night})`;
                        if ( state > 5)
                            DashboardWeather.style.backgroundImage = `url(${Dawn})`;
                        if ( state > 8)
                            DashboardWeather.style.backgroundImage = `url(${Day})`;
                        if ( state > 17)
                            DashboardWeather.style.backgroundImage = `url(${Sunset})`;
                        if ( state > 20)
                            DashboardWeather.style.backgroundImage = `url(${Night})`;
                    }
                    
                    setMetar(data)
                })
                .catch((err)=>{
                    // alert("check console there is an error")
                    console.log(`Error from alert : ${err}`)
                })
                i++
                // console.log(`i = ${i} , ${GetAirportWeatherArray.length}`)
                if ( i >= GetAirportWeatherArray.length )
                    i = 0
            },10000)
        
    },[])



    return(
        <div className="dashboard-container">
        
            {Events ? (  
                <div className="DashboardEvent animate__fadeIn">
                    <div>
                        <a href="/Event">
                            <img src={Events[Math.floor(Math.random() * Events.length) ].banner}></img>
                        </a>
                    </div>
                </div>  
                 ):(
                <div className="DashboardEvent animate__fadeIn">
                    <div>
                        <a href="/Event">
                            <img src={NoEventPNG}></img>
                        </a>
                    </div>
                </div>
                 )
                 
            }
           {
            Metar ? (
                <div className="DashboardWeather animate__fadeIn">
                    <div>
                        <div>
                            <h1 className=" animate__fadeIn">{Metar.icaoId}</h1>
                            <p className=" animate__fadeIn">{Metar.wdir}/{Metar.wspd} kts<br />{Metar.altim} QNH</p>
                            {/* {JSON.stringify(Metar)} */}
                            <a href="#">See More</a>
                        </div>
                    </div>
                </div>
            ):(

                <div className="DashboardWeather animate__fadeIn">
                    <div>
                        <div>
                            <h1>No Weather Data For Today</h1>
                        </div>
                    </div>
                </div>
            )
           }
            
            
        </div>
        

)


   
}

export default DashboardEventsWeather