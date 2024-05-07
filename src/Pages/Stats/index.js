import { useState } from "react";
import SideBar from "../Component/SideBar";
import UpperBar from "../Component/UpperBar";

// internal components
import StatisticComponent from "./Components/Statistic"
import PilotATCStats from "./Components/PilotATCStats";
import ATCLog from "./Components/ATCLog";

import "./index.css"

function Stats() {
  const [LastPosition , setLastPosition] = useState("")

  const LastPositionData = JSON.parse(sessionStorage.getItem("LastPosition"))

  if(!LastPositionData) {
    return <p>No last position data</p> 
  }

  console.table(LastPositionData)




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
          LastPosition = {LastPositionData.items[0].connection_id.callsign}
          // PilotProps
          PilotTime = {sessionStorage.getItem("PilotStat")}
          ShortPilotRating = {sessionStorage.getItem("ShortPilotRating")}
          LastFlownHours = {sessionStorage.getItem("LastHoursFlown")}
    
        />
          {/* {JSON.stringify(LastPostion.items[0].connection_id.callsign)} */}

          {/* <ATCLog
            Log = {sessionStorage.getItem("UserControllerLog")}
          /> */}
          {/* {JSON.stringify(sessionStorage.getItem("UserControllerLog"))} */}

        </div>
      </>
    )
}

export default Stats;