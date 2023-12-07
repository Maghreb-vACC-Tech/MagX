import { useEffect, useState } from "react"
import "./index.css"

function PilotATCStats(props){
    
    // const [PilotData , setPilotData] = useState()
    // const [FLightCount , setFLightCount] = useState()
    // const [LongestDuration , setLongestDuration] = useState()
    // const array=["1","2","3"]
    // function FetchPilotData(){
    //     fetch(`http://127.0.0.1:1000/Pilot` , {
    //         method: "POST",
    //         headers: {
    //         "Content-Type": "application/json"
    //         },
    //         body: JSON.stringify({cid: 1674212})
    //     })
    //     .then(data => data.json())
    //     .then(data => {
    //         setPilotData(data)
            
    //     })
    //     .then(()=>{
    //         FLightCountFunction()
    //     })
    // }
    // function FLightCountFunction(){setFLightCount(PilotData.items.length)}
    // function LongestFlightFunction(){
    //     const durations = PilotData.items.map(flight => {
    //         const start = new Date(flight.start);
    //         const end = new Date(flight.end);
    //         return end - start; 
    //       });
          
    //       const maxDuration = Math.max(...durations);
          
    //       const longestFlight = PilotData.items.find(flight => {
    //         const start = new Date(flight.start);
    //         const end = new Date(flight.end);
    //         return end - start === maxDuration;
    //       });
    //       setLongestDuration(longestFlight)
    // }
    // useEffect(()=>{
    //     FetchPilotData()
    // } ,[])


    return(
        <div className="Statistic animate__fadeIn">
{/* 
           <div className="PilotStatistic">
                <div className="PilotStatisticTitle">
                    <h1>Pilot Logs</h1>
                </div>
                <div className="PilotStatisticBody">
                    <div>
                        {FLightCount && LongestDuration &&(
                        <>
                            <p>Number of Flights : {FLightCount}</p>
                            <p>Longest Flight : {LongestDuration}</p>
                            <p>Top Callsign : </p>
                        </>
                        )
                        }
                        
                    </div>
                </div>
           </div>

           <div className="ATCStatistic">

           </div> */}
        </div>
    )
}


export default PilotATCStats