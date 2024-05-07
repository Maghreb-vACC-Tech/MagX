import { useEffect, useState } from "react"
import "./index.css"
import VatsimLogo from "../../../../Ressources/VatsimLogo.png"
import SimbriefLogo from "../../../../Ressources/simbriefLogo.png"

function FlightPLN(props){
    const [FlightPlanData,SetFlightPlanData] = useState()
    const [FlightPlanDataDeptime,SetFlightPlanDataDeptime] = useState()



    const PlaneIcon = (
        <svg xmlns="http://www.w3.org/2000/svg" width="41" height="40" viewBox="0 0 41 40" fill="none">
            <path d="M32.1038 31.8517C32.8007 31.9937 33.5269 31.8665 34.1296 31.497C34.7324 31.1274 35.1648 30.5442 35.336 29.87V29.8683C35.4228 29.5262 35.4396 29.1708 35.3855 28.8223C35.3315 28.4739 35.2075 28.1392 35.0208 27.8376C34.834 27.5359 34.5881 27.273 34.2972 27.0641C34.0063 26.8552 33.676 26.7043 33.3252 26.62L25.5079 24.7317L16.6997 13.375L12.9004 13L17.9075 23.9817L10.3072 23.2333L6.3575 16.8517L4 17.3683L6.11833 26.5683L32.1038 31.8517ZM5.04037 36.3583H35.7904V39.6917H5.04037V36.3583Z" fill="white"/>
        </svg>
    )

    function timeFormating(number){// from 1333 to 13:33
        
        const formattedTime = number.toString().slice(0,2) + ":" + number.toString().slice(2);
        return formattedTime
    } 

    function arrivalTime(deptime,enroutetime){
        
        // Split times into hours and minutes
        const [hours1, minutes1] = deptime.split(":");  
        const [hours2, minutes2] = enroutetime.split(":");

        // Convert to minutes
        let totalMinutes1 = parseInt(hours1) * 60 + parseInt(minutes1);  
        let totalMinutes2 = parseInt(hours2) * 60 + parseInt(minutes2);

        // Add minutes
        let totalMinutes = totalMinutes1 + totalMinutes2;

        // Calculate hours and minutes 
        let hours = Math.floor(totalMinutes / 60);
        let minutes = totalMinutes % 60;

        // Format output
        hours = hours < 10 ? "0" + hours : hours;
        minutes = minutes < 10 ? "0" + minutes : minutes;

        const result = hours + ":" + minutes;
        
        return result

    }
    
   
    useEffect(()=>{
            fetch("https://api.vatsim.ma/LastFlightPlan/IlyassBaba")
            .then(data => data.json())
            .then(data => {
                SetFlightPlanData(data)
            })
    },[])

    return(
        <div className="FlightPLN animate__fadeIn">

            <section>
            {FlightPlanData && (
                    <>
                        <div className="FlightPLNTitle">
                                <h1>Latest Simbrief Flight</h1>
                                <p>{FlightPlanData.general.icao_airline + FlightPlanData.general.flight_number}</p>
                        </div>
                            
                        <div className="FlightPLNBody animate__fadeIn">
                            <div>
                                <h1>{FlightPlanData.origin.icao_code}</h1>
                                <p>{FlightPlanData.origin.iata_code}</p>
                            </div>
                            <div>
                                <p>{FlightPlanData.general.initial_altitude}</p>
                                {PlaneIcon}
                                <a target="blank" href={`https://www.simbrief.com/ofp/flightplans/${FlightPlanData.origin.icao_code + FlightPlanData.destination.icao_code}_PDF_${FlightPlanData.params.time_generated}.pdf`}>OFP</a>
                            </div>
                            <div>
                                <h1>{FlightPlanData.destination.icao_code}</h1>
                                <p>{FlightPlanData.destination.iata_code}</p>
                            </div>
                        </div>
            
                        <div className="FlightPLNFoot">
                            {/* <a href="#">Get more</a> */}
                            <a href={FlightPlanData.prefile.vatsim.link}><img src={VatsimLogo}></img> Vatsim</a>
                            <a href="https://dispatch.simbrief.com/briefing/latest"><img src={SimbriefLogo}></img> Simbrief</a>
                        </div>
                    </>

                    )}
          
          </section> 
        </div>
    )

}

export default FlightPLN
