import { useState, useEffect } from "react";
import SideBar from "../Component/SideBar";
import UpperBar from "../Component/UpperBar";

// internal components
import StatisticComponent from "./Components/Statistic"
import PilotATCStats from "./Components/PilotATCStats";


import "./index.css"

function Stats() {

  const LastPostion = sessionStorage.getItem("LastPosition")

  console.log(LastPostion)



    return(
      <>
        <SideBar />
        <div className="Stats PagesContainer">
          <UpperBar Username={sessionStorage.getItem("FullName")} />
      
          <StatisticComponent
          Name = { sessionStorage.getItem("FullName") }
          LongRating = {sessionStorage.getItem("LongATCRating")}
          // ATC PROPS
          ShortAtcRating = {sessionStorage.getItem("ShortATCRating")}
          ATCTime = {sessionStorage.getItem("ATCStat")}
          LastPosition = {""}
          // PilotProps
          PilotTime = {sessionStorage.getItem("PilotStat")}
          ShortPilotRating = {sessionStorage.getItem("ShortPilotRating")}
          LastFlownHours = {sessionStorage.getItem("LastHoursFlown")}
    
        />
          
          <PilotATCStats

          />
        </div>
      </>
    )
}

export default Stats;