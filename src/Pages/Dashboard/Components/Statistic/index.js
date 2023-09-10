import "./index.css"

function StatisticComponent(props){
    return(
        <div className="DashboardStatistic">
            <div className="DashboardStatisticTitle">
                <h1>{props.Name}</h1>
            </div>
            <div className="DashboardStatisticTitle">
                <p>{props.LongRating}</p>
            </div>
            <div className="DashboardStatisticATC">
                <div className="DashboardStatisticDIVTitle">
                    <h1>Air Traffic Controller</h1>
                </div>

                <div className="DashboardStatisticATCRating DashboardStatisticATCDiv">
                    <h1>{props.ShortAtcRating}</h1>
                    <p>Rating</p>
                </div>
                <div className="DashboardStatisticATCHours DashboardStatisticATCDiv">
                    <h1>{props.ATCTime}</h1>
                    <p>Hours<br/>Controlling</p>
                </div>
                <div className="DashboardStatisticDIVLastPosition DashboardStatisticATCDiv"> 
                    <h1>{props.LastPosition}</h1> 
                    <p>Last<br/>Position</p>
                </div>

            </div>
            <div className="DashboardStatisticSeperation"></div>
            <div className="DashboardStatisticPilot">
                <div className="DashboardStatisticDIVTitle">
                    <h1>Pilot</h1>
                </div>

                <div className="DashboardStatisticDIVRating DashboardStatisticATCDiv">
                    <h1>{props.ShortPilotRating}</h1>
                    <p>Rating</p>
                </div>
                <div className="DashboardStatisticDIVHours DashboardStatisticATCDiv">
                    <h1>{props.PilotTime}</h1>
                    <p>Hours<br/>Flown</p>
                </div>
                <div className="DashboardStatisticDIVOBSHours DashboardStatisticATCDiv"> 
                    <h1>{props.LastFlownHours}</h1> 
                    <p>Last <br/>Flight time</p>
                </div>

            </div>
        </div>
    )
}


export default StatisticComponent