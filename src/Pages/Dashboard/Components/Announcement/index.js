import "./index.css"

function AnnouncementComponent(){



    return(
        <div className="DashboardAnnouncement animate__fadeIn">
            <div className="DashboardAnnouncementTitle"><h1>Latest Announcement</h1></div>
            <div className="DashboardAnnouncementInfos">
                <div className="DashboardAnnouncementInfosName"><p>John Doe</p></div>
                <div className="DashboardAnnouncementInfosDate"><p>2023-08-01</p></div>
            </div>
            <div className="DashboardAnnouncementMessage">
                <p>
                Salam ! As the Hijri New Year dawns upon us and on behalf of the MAGvACC @Staff, I extend my heartfelt congratulations and warm wishes to each and @everyone of you. This significant occasion marks the beginning of a new lunar year, a time of reflection, renewal, and spiritual growth May this auspicious event brings you success and prosperity in all your endeavors, both within the virtual skies of VATSIM and in your real-life pursuits Wishing you a joyous and blessed Hijri New Year 1445 Maghreb vACC, Virtually Real
                </p>
            </div>
        </div>
    )
}

export default AnnouncementComponent