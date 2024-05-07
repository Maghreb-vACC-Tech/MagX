import "./index.css"

import { useEffect, useState } from "react";
function AnnouncementComponent(){
    const [Announcement , setAnnouncement] = useState()
    useEffect(()=>{
        fetch("https://api.vatsim.ma/GetLastAnnouncement")
         .then(res=>res.json())
         // .then(res=> alert(res))
         .then(res=> setAnnouncement(res))

    })


    function RenderAnnouncement(){
        return(
        <>
            <div className="DashboardAnnouncementTitle"><h1>Latest Announcement</h1></div>
            <div className="DashboardAnnouncementInfos">
                <div className="DashboardAnnouncementInfosName"><p>{Announcement.author}</p></div>
                <div className="DashboardAnnouncementInfosDate"><p>{Announcement.date}</p></div>
            </div>
            <div className="DashboardAnnouncementMessage">
                <p>
                {Announcement.content}
                </p>
            </div>
        </>
        )
    }

    return(
        <div className="DashboardAnnouncement animate__fadeIn">
            {/* {Announcement} */}
            {Announcement && <>{RenderAnnouncement()}</>} 
            
        </div>
    )
}

export default AnnouncementComponent
