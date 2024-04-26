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

function Dashboard(){

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

    // function ApplySettings(){
    //     // alert(`http://127.0.0.1:1000/Setting/${sessionStorage.getItem("CID")}`)
    //     fetch(`http://127.0.0.1:1000/Setting/${sessionStorage.getItem("CID")}`)
    //     .then(res => res.json())
    //     .then(res =>{
    //         // setConfig(res)
    //         if(res.BGIndex == 1)
    //             document.querySelector('body').style.backgroundImage = "url('Ressources/Background/BG1.jpg')"
    //         if(res.BGIndex == 2)
    //             document.querySelector('body').style.backgroundImage = "url('Ressources/Background/BG2.jpg')"
    //         if(res.BGIndex == 3)
    //             document.querySelector('body').style.backgroundImage = "url('Ressources/Background/BG3.jpg')"
    //         if(res.BGIndex == 4)
    //             document.querySelector('body').style.backgroundImage = "url('Ressources/Background/BG4.jpg')"
    //         if(res.BGIndex == 5)
    //             document.querySelector('body').style.backgroundImage = "url('Ressources/Background/BG5.jpg')"
    //         alert(JSON.stringify(res.BGIndex))
    //     })
    // }
    // useEffect(()=>{
    //     ApplySettings()
    // },[])
    const location = useLocation();
    const stateData = location.state;
        
    console.log("DATA : " , sessionStorage.getItem("Data"))
    // notify(`Hello ${sessionStorage.getItem("FullName")} `)
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
                <DashboardEventsWeather

                />   
                <FlightPLN/>


                {/* <BookingComponent/> */}
                {/* <DashboardOnlineControllers/> */}
            </div>
         <ToastContainer />

        </>
    )
}

export default Dashboard