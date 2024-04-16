
// import "./index.css"
import SideBar from "../../../../Component/SideBar";
import UpperBar from "../../../../Component/UpperBar";
import { useEffect, useState } from "react";

function AddairportOPS(){
  if(sessionStorage.getItem("CID") == "10000008"){
    return(
      <>
        <SideBar />
            <div className="AdminPage PagesContainer">
              <UpperBar Username={sessionStorage.getItem("FullName")} />
              <div className="AddAirport-OPS-Container">
                <div className="AddAirport-OPS-Container-Header">
                    <h1>Add airport</h1>
                </div>
                <div className="AddAirport-OPS-Container-Body">
                    <div><p>ICAO</p><input type="text"></input></div>
                    <div><p>Country</p><input type="text"></input></div>
                    <div>
                        <p>Runways</p>
                        <select>
                            <option selected>0</option>
                            <option>0</option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                            <option>6</option>
                        </select>
                    </div>
                </div>
              </div>
            </div>
      </>
    )
  }
}
export default AddairportOPS