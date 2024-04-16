import { useState, useEffect } from "react";
import SideBar from "../Component/SideBar";
import UpperBar from "../Component/UpperBar";
import "./index.css"

function Event() {

  const MaghrebEvents = JSON.parse(sessionStorage.getItem("MaghrebEvents"));
  const VatsimEvents = JSON.parse(sessionStorage.getItem("VatsimEvents"));


  const [renderEvents, setRenderEvents] = useState(false);
  const handleClick = () => {
    setRenderEvents(true)
    document.querySelector(".Event-More").style.display = "none"
    document.querySelector(".Other-Events-Title").style.display = "flex"
  }
  // console.log()
  
  if(MaghrebEvents.length == 0){
    return (
      <>
        <SideBar />
        <div className="Event PagesContainer">
          <UpperBar Username={sessionStorage.getItem("FullName")} />
  
          <div className="Event-Title">
            <h1>Events</h1>
          </div>
          <div className="Event-Title">
            <h1>No Maghreb events for the moment</h1>
          </div>

               
          <div className="Event-More">
            <h1><a href="https://vatsim.net/events/" 
            // onClick={handleClick}
            >Want to see more Vatsim events ? </a></h1>
          </div>
        </div>
      </>
    )
  }
  else{

    return (
      <>  
        <SideBar />
        <div className="Event PagesContainer">
          <UpperBar Username={sessionStorage.getItem("FullName")} />
  
          <div className="Event-Title">
            <h1>Maghreb Events</h1>
          </div>

          {
            MaghrebEvents.map((event) => (
              <div className="Events">
              <div className="Event-Container">
                <div className="Event-Container-IMG animate__fadeInLeft">
                  <img src={event.banner}></img>
                </div>
                <div className="Event-Container-Description animate__fadeIn" >
                  <div className="Event-Container-Description-text" dangerouslySetInnerHTML={{__html: event.description}}></div>
                  <div className="Event-Container-Description-Links">
                    <div>
                      <div className="Event-Container-Description-Links-save"><a href="#"><i class="fa-regular fa-bell"></i> Reminder</a></div>
                      <div className="Event-Container-Description-Links-view"><a href={event.link} target="blank"><i class="fa-regular fa-eye"></i> View</a></div>
                      {/* <div className="Event-Container-Description-Links-roster"><a href={item.link} target="blank"><i class="fa-solid fa-list-ol"></i> Roster</a></div> */}
                    </div>
                  </div>
                </div>
                
              </div>
            </div>
            ))
          }
          
          
          <div className="Event-More">
            <h1><a href="https://vatsim.net/events/" 
            // onClick={handleClick}
            >Want to see more Vatsim events ? </a></h1>
          </div>

          
          <div className="Event-Title Other-Events-Title">
            <h1>Other Vatim Events</h1>
          </div>

          {/* {renderEvents && ( 
            
            VatsimEvents.map((item) => (
              <div className="Events">
              <div className="Event-Container">
                <div className="Event-Container-IMG animate__fadeInLeft">
                  <img src={item.banner}></img>
                </div>
                <div className="Event-Container-Description animate__fadeIn" >
                  <div className="Event-Container-Description-text" dangerouslySetInnerHTML={{__html: item.description}}></div>
                  <div className="Event-Container-Description-Links">
                    <div>
                      <div className="Event-Container-Description-Links-save"><a href="#"><i class="fa-regular fa-bell"></i> Reminder</a></div>
                      <div className="Event-Container-Description-Links-view"><a href={item.link} target="blank"><i class="fa-regular fa-eye"></i> View</a></div>
                      <div className="Event-Container-Description-Links-roster"><a href={item.link} target="blank"><i class="fa-solid fa-list-ol"></i> Roster</a></div>
                    </div>
                  </div>
                </div>
                
              </div>
            </div>
            ))

            )} */}
          
        </div>
      </>
    )
  }


  
}

export default Event;
