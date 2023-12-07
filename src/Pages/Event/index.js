import { useState, useEffect } from "react";
import SideBar from "../Component/SideBar";
import UpperBar from "../Component/UpperBar";
import "./index.css"

function Event() {

  const MagEvent = JSON.parse(sessionStorage.getItem("Events"));

  if(MagEvent == null){
    return (
      <>
        <SideBar />
        <div className="Event PagesContainer">
          <UpperBar Username={sessionStorage.getItem("FullName")} />
  
          <div className="Event-Title">
            <h1>Events</h1>
          </div>
  
              <div className="Events">
                <div className="Event-Container">
                  <h1>No Events Found</h1>
                </div>
              </div>
        </div>
      </>
    );
  }
  if(MagEvent){
    return (
      <>
        <SideBar />
        <div className="Event PagesContainer">
          <UpperBar Username={sessionStorage.getItem("FullName")} />
  
          <div className="Event-Title">
            <h1>Events</h1>
          </div>
  
          {MagEvent.map((item) => (
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
                        {/* <div className="Event-Container-Description-Links-roster"><a href={item.link} target="blank"><i class="fa-solid fa-list-ol"></i> Roster</a></div> */}
                      </div>
                    </div>
                  </div>
                  
                </div>
              </div>
              ))}
        </div>
      </>
    );
  }
  else{
    return (
      <>
        <SideBar />
        <div className="Event PagesContainer">
          <UpperBar Username={sessionStorage.getItem("FullName")} />
  
          <div className="Event-Title">
            <h1>Events</h1>
          </div>
  
          <div className="Events">
            <div className="Event-Container">
              <h1>Something Bad Happenned ,Contact Ilyass B. - ACCMA8</h1>
            </div>
          </div>
        </div>
      </>
    );
  }


  
}

export default Event;