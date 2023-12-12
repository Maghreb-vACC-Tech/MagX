import SideBar from "../Component/SideBar"
import UpperBar from "../Component/UpperBar";

import ControllerOfMonth from "./Components/Scoreboard/ControllerOfMonth";
import TopAirports from "./Components/Scoreboard/TopAirports";
import TopPilots from "./Components/Scoreboard/TopPilots";
import FlightPLN from "./Components/FlightPLN";
import DashboardEventsWeather from "./Components/Events";
import AnnouncementComponent from "./Components/Announcement";
import BookingComponent from "./Components/Booking/Announcement";
import DashboardOnlineControllers from "./Components/OnlineController/Events";

import { useLocation } from 'react-router-dom';
import { useEffect, useState } from "react";

function Dashboard(){
    
    const location = useLocation();
    const stateData = location.state;
        
    console.log("DATA : " , sessionStorage.getItem("Data"))

    return(
        <>

            <SideBar/>

            <div className="Dashboard PagesContainer">
                <UpperBar
                    Username = { sessionStorage.getItem("FullName")}
                    />            
                <div className="ScoreboardContainer animate__fadeIn">
                    <ControllerOfMonth/>
                    <TopAirports/>
                    <TopPilots/>
                </div>
                 
                <AnnouncementComponent/>
                <DashboardEventsWeather/>   
                <FlightPLN/>


                {/* <BookingComponent/> */}
                <DashboardOnlineControllers/>
            </div>

        </>
    )
}

export default Dashboard