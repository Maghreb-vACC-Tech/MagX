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

        {/* <div className="TrainingDiv animate__fadeIn">
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
        </div> */}
      <div className="TrainingVideos">
        
        <div>
          <iframe width="70%" height="90%" src="https://www.youtube.com/embed/JMvuYple0Q0?si=3VKDC3fdyU2EXdIP" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
        
        
        {/* <div>
        <iframe width="70%" height="90%" src="https://www.youtube.com/embed/JMvuYple0Q0?si=3VKDC3fdyU2EXdIP" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div> */}
        
        
      </div>
      

      </div>
    </>
  );
}

export default Training;