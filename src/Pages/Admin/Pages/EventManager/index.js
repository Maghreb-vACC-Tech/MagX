
import "./index.css"
import SideBar from "../../../Component/SideBar";
import UpperBar from "../../../Component/UpperBar";
import { useEffect, useState } from "react";

function EventManagerPage(){

    const [Archive, setArchive ] = useState([])

    useEffect(() => {
        fetch("http://127.0.0.1:1000/GetEventArchive")  
          .then(res => res.json())
          .then(data => setArchive(data));
      }, []);
    
    
    if(sessionStorage.getItem("CID") == "10000008") {

      
        return (
          <>
            <SideBar />
            <div className="AdminPage PagesContainer">
              <UpperBar Username={sessionStorage.getItem("FullName")} />
              <div className="EventsManagerContainer">
                <div className="EventsManagerContrainerHeader"><h1>Event Manager</h1></div>
                <div className="EventsManagerSubContrainer">
                    {
                    Archive.map(Event => {
                      return(
                        <div className="EventItem">
                            <div><img src={Event.banner}></img></div>
                        </div>

                      )
                    })}

                </div>
              </div>
            </div>
          </>
        );
      }
      else{
        return(
            <>
                <SideBar />
                <div className="AdminPage PagesContainer">
                    <UpperBar Username={sessionStorage.getItem("FullName")} />   
                </div>
            </>
            )
      }
    
    
}
export default EventManagerPage