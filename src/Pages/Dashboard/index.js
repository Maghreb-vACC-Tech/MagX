import SideBar from "../Component/SideBar"
import UpperBar from "../Component/UpperBar";

import DashboardEvents from "./Components/Events";
import AnnouncementComponent from "./Components/Announcement";
import StatisticComponent from "./Components/Statistic";
import BookingComponent from "./Components/Booking/Announcement";
import DashboardOnlineControllers from "./Components/OnlineController/Events";

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
    // console.log(JSON.stringify(stateData.cid))


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

            
            setPilotStat(data.pilot)
            setATCStat(data.atc)

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
                    Username = { sessionStorage.getItem("FullName")}
                />
                <DashboardEvents
                
                />
                <AnnouncementComponent
                
                />
                <StatisticComponent
                    Name = { sessionStorage.getItem("FullName") }
                    LongRating = {sessionStorage.getItem("LongATCRating")}
                    // ATC PROPS
                    ShortAtcRating = {sessionStorage.getItem("ShortATCRating")}
                    ATCTime = {ATCStat}
                    LastPosition = {LastPosition}
                    // PilotProps
                    PilotTime = {PilotStat}
                    ShortPilotRating = {sessionStorage.getItem("ShortPilotRating")}
                    LastFlownHours = {LastHoursFlown}
               
               />

                <BookingComponent/>
                <DashboardOnlineControllers/>
            </div>

        </>
    )
}

export default Dashboard