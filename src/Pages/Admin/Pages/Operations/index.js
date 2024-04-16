
import "./index.css"
import SideBar from "../../../Component/SideBar";
import UpperBar from "../../../Component/UpperBar";
import { useEffect, useState } from "react";

function StaffOPSPage(){
  if(sessionStorage.getItem("CID") == "10000008"){
    return(
      <>
        <SideBar />
            <div className="AdminPage PagesContainer">
              <UpperBar Username={sessionStorage.getItem("FullName")} />
              <div className="OPS-Container">
                <div className="OPS-Container-Header">
                  <div><a href="/AddairportOPS"> <i class="fa-solid fa-road"></i> Add airport</a></div>
                  <div><input type="text" placeholder="search by ICAO"></input></div>
                </div>
                <div className="OPS-Container-Body">
                  <div className="OPS-Container-Body-Airport OPS-Container-Body-Airport-Header">
                    <div>ICAO Code</div>
                    <div>Country</div>
                    <div>FullName</div>
                  </div>
                  <div className="OPS-Container-Body-Airport">
                    <div>GMMN</div>
                    <div>Morocco</div>
                    <div>Mohamed V</div>
                    <div><a href="#"><i class="fa-regular fa-eye"></i></a></div>
                  </div>
                  <div className="OPS-Container-Body-Airport">
                    <div>GMMN</div>
                    <div>Morocco</div>
                    <div>Mohamed V</div>
                    <div><a href="#"><i class="fa-regular fa-eye"></i></a></div>
                  </div>
                  
                </div>
              </div>
            </div>
      </>
    )
  }
}
export default StaffOPSPage