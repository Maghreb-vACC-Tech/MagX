import { useState, useEffect } from "react";
import SideBar from "../Component/SideBar";
import UpperBar from "../Component/UpperBar";
import Cards from "./card";
import "./index.css"

function Training() {
  const [res, setRes] = useState([]);

  // TODO : Check if visitor or student then show card 

  return (
    <>
      <SideBar />
      <div className="Training PagesContainer">
        
        <UpperBar Username={sessionStorage.getItem("FullName")} />

        <div className="TrainingDiv animate__fadeIn">
          <Cards/>
        </div>

        <div className="TrainingDiv animate__fadeIn">
          <div className="TrainingDivSecond">
            <line>
              <div><p>Remaining ATC Hours : </p></div>
              <div><p>10 hours 52 minutes</p></div>
            </line>
            <line>
              <div><p>Remaining Days : </p></div>
              <div><p>25 Days</p></div>
            </line>
            <line>
              <div><p>Solo Remaining Days : </p></div>
              <div><p>N/A</p></div>
            </line>
          </div>
          <div className="TrainingDivSecondLink">
            <div><a href="">Book Session</a></div>
          </div>
        </div>

      </div>
    </>
  );
}

export default Training;