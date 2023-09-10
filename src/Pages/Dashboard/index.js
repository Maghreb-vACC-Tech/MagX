import SideBar from "../Component/SideBar"
import UpperBar from "../Component/UpperBar";

import DashboardEvents from "./Components/Events";
import AnnouncementComponent from "./Components/Announcement";
import StatisticComponent from "./Components/Statistic";

import { useLocation } from 'react-router-dom';
import { useEffect, useState } from "react";

function Dashboard(){
    
    const location = useLocation();
    const stateData = location.state;

    // State Hooks
    const [LastHoursFlown , setLastHoursFlown] = useState("")
    const [PilotStat , setPilotStat] = useState("")
    const [ATCStat,setATCStat] = useState("")
    const [LastPosition , setLastPosition] = useState("20")
    // Access the data
    console.log(stateData);
  
    // Rest of your component code

    // Usefull functions
    function millisecondsToHoursMinutes(ms , minstate) {
        const seconds = ms / 1000;
        const minutes = seconds / 60;
        const hours = minutes / 60;
      
        const hrs = Math.floor(hours);
        const mins = Math.floor(minutes % 60);

        if (minstate)
            return `${hrs}h ${mins}m`;
        else
        return `${hrs}h`;
      
      }    


    // Get Your Stats
    console.log(JSON.stringify(stateData.cid))


    function LastFlightTimeCalculations(Start , End){
        
        const startTime = new Date(Start);
        const endTime = new Date(End);

        const timeDiff = endTime - startTime; 
        console.log( `timeDiff ${timeDiff}`)

        const hoursMinutes = millisecondsToHoursMinutes(timeDiff , true);

        setLastHoursFlown(hoursMinutes);
    }

    useEffect(()=>{
    
    // ATC-Pilot Stats
        fetch("http://127.0.0.1:1000/stats" , {
            method: "POST",
            headers: {
            "Content-Type": "application/json"
            },
            body: JSON.stringify({cid: 1674212})
        })
        .then(data => data.json())
        .then(data => {

            const pilothours = millisecondsToHoursMinutes(data.pilot * 3600000)
            const atchours = millisecondsToHoursMinutes(data.atc * 3600000)

            
            // setPilotStat(data.pilot)
            // setATCStat(data.atc)

            setPilotStat(pilothours)
            setATCStat(atchours)
        })

    // Observing Hours
    // http://127.0.0.1:1000/AllStats

        fetch("http://127.0.0.1:1000/ATC" , {
            method: "POST",
            headers: {
            "Content-Type": "application/json"
            },
            body: JSON.stringify({cid: 1674212})
        })
        .then(data => data.json())
        .then(data => {
            setLastPosition(data.items[0].connection_id.callsign)
        })

    // Last Flight Hours
        fetch("http://127.0.0.1:1000/LastFlightTime" , {
            method: "POST",
            headers: {
            "Content-Type": "application/json"
            },
            body: JSON.stringify({cid: 1674212})
        })
        .then( data => data.json())
        .then( data => {
            LastFlightTimeCalculations(data.start , data.end)
        })




    } ,[])


    return(
        <>

            <SideBar/>

            <div className="Dashboard PagesContainer">
                <UpperBar
                    Username = { stateData.personal.name_full}
                />
                <DashboardEvents
                
                />
                <AnnouncementComponent
                
                />
                <StatisticComponent
                    Name = { stateData.personal.name_full}
                    LongRating = {stateData.vatsim.rating.long}
                    // ATC PROPS
                    ShortAtcRating = {stateData.vatsim.rating.short}
                    ATCTime = {ATCStat}
                    LastPosition = {LastPosition}
                    // PilotProps
                    PilotTime = {PilotStat}
                    ShortPilotRating = {stateData.vatsim.pilotrating.short}
                    LastFlownHours = {LastHoursFlown}
               
               />








                
                <p>{JSON.stringify(stateData)}</p>
                <p>{stateData.cid}</p>
                
            </div>

        </>
    )
}

export default Dashboard