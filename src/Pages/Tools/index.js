import { useState, useEffect } from "react";
import SideBar from "../Component/SideBar";
import UpperBar from "../Component/UpperBar";
// import StatisticComponent from "./Components/Statistic";
import "./index.css"

function Tools() {

    return(
      <>
        <SideBar />
        <div className="Tools PagesContainer">
          <UpperBar Username={sessionStorage.getItem("FullName")} />
          <section className="ToolsChoice">
            
            <div className="ToolsChoicePilotSection animate__fadeInLeft">
              <div>
                <a href="/PilotTools" className="animate__fadeIn">Pilot</a>
              </div>
            </div>

            <div className="ToolsChoiceATCSection animate__fadeInRight">
              <div>
                <a href="/ATCTools" className="animate__fadeIn">ATC</a>
              </div>
            </div>
          </section>
        </div>
      </>
    )
}

export default Tools;