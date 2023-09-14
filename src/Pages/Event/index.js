import { useState, useEffect } from "react";
import SideBar from "../Component/SideBar";
import UpperBar from "../Component/UpperBar";
import "./index.css"

function Event() {

  const [MagEvent , SetMagEvent] = useState([])

  useEffect(()=>{
    fetch("http://127.0.0.1:1000/MaghrebEvents")
    .then(res => res.json())
    .then(res => SetMagEvent(res))
    
    sessionStorage.setItem("EventBanner" , MagEvent.banner )
    sessionStorage.setItem("EventLink" , MagEvent.link )
  
  })


  return (
    <>
      <SideBar />
      <div className="Event PagesContainer">
        <UpperBar Username={sessionStorage.getItem("FullName")} />

        <div className="Event-Title">
          <h1>Events</h1>
        </div>

        {/* <div className="Events">
          <div className="Event-Container">
            <div className="Event-Container-IMG">
              <img src="https://vatsim-my.nyc3.digitaloceanspaces.com/events/YQfA7qAOrMvMH9f4QBILdxqrHAYX8v8lpaiyENqF.jpg"></img>
            </div>
            <div className="Event-Container-Description">
              <p>
              For all those who miss our old Alpine Crossings, vACC Switzerland and French vACC are eager to invite you back to our Geneva (LSGG) to Nice (LFMN) route for our latest edition of “Transversal Thursday”. Enjoy full and proficient ATC service from 18:00z to 20:00z on the 14th of September. Fly south towards the cool Mediterranean breeze and tackle the challenging approaches into the gem of the French Riviera, or head north over the Alps’ melting snow-caps for a scenic arrival surrounded by stunning mountain chains. This journey never fails to surprise even the most seasoned pilots, so bring your skills and your charts and join us this Thursday evening!
              For all those who miss our old Alpine Crossings, vACC Switzerland and French vACC are eager to invite you back to our Geneva (LSGG) to Nice (LFMN) route for our latest edition of “Transversal Thursday”. Enjoy full and proficient ATC service from 18:00z to 20:00z on the 14th of September. Fly south towards the cool Mediterranean breeze and tackle the challenging approaches into the gem of the French Riviera, or head north over the Alps’ melting snow-caps for a scenic arrival surrounded by stunning mountain chains. This journey never fails to surprise even the most seasoned pilots, so bring your skills and your charts and join us this Thursday evening!
              </p>
            </div>
            
          </div>
        </div>
        
        <div className="Events">
          <div className="Event-Container">
            <div className="Event-Container-IMG">
              <img src="https://vatsim-my.nyc3.digitaloceanspaces.com/events/YQfA7qAOrMvMH9f4QBILdxqrHAYX8v8lpaiyENqF.jpg"></img>
            </div>
            <div className="Event-Container-Description">
              <p>
              For all those who miss our old Alpine Crossings, vACC Switzerland and French vACC are eager to invite you back to our Geneva (LSGG) to Nice (LFMN) route for our latest edition of “Transversal Thursday”. Enjoy full and proficient ATC service from 18:00z to 20:00z on the 14th of September. Fly south towards the cool Mediterranean breeze and tackle the challenging approaches into the gem of the French Riviera, or head north over the Alps’ melting snow-caps for a scenic arrival surrounded by stunning mountain chains. This journey never fails to surprise even the most seasoned pilots, so bring your skills and your charts and join us this Thursday evening!
              For all those who miss our old Alpine Crossings, vACC Switzerland and French vACC are eager to invite you back to our Geneva (LSGG) to Nice (LFMN) route for our latest edition of “Transversal Thursday”. Enjoy full and proficient ATC service from 18:00z to 20:00z on the 14th of September. Fly south towards the cool Mediterranean breeze and tackle the challenging approaches into the gem of the French Riviera, or head north over the Alps’ melting snow-caps for a scenic arrival surrounded by stunning mountain chains. This journey never fails to surprise even the most seasoned pilots, so bring your skills and your charts and join us this Thursday evening!
              </p>
            </div>
            
          </div>
        </div> */}
        {/* {JSON.stringify(MagEvent)} */}
        {MagEvent.map((item) => (
              <div className="Events">
              <div className="Event-Container">
                <div className="Event-Container-IMG">
                  <img src={item.banner}></img>
                </div>
                <div className="Event-Container-Description" dangerouslySetInnerHTML={{__html: item.description}}>

                </div>
                
              </div>
            </div>
            ))}
      </div>
    </>
  );
}

export default Event;