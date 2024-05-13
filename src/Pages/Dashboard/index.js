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

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useLocation } from 'react-router-dom';
import { useEffect, useState } from "react";

function Dashboard(props){

    // alert(props.APILink)
    const notify = (e) => toast( e , {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
    });
    const [Config , setConfig] = useState([])


    const location = useLocation();
    const stateData = location.state;
        

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
                 
                <AnnouncementComponent
                    APILink = {props.APILink}
                />
                <DashboardEventsWeather
                    APILink = {props.APILink}
                />   
                <FlightPLN
                    APILink = {props.APILink}
                />


                {/* <BookingComponent/> */}
                {/* <DashboardOnlineControllers/> */}
            </div>
         <ToastContainer />

        </>
    )
}

export default Dashboard