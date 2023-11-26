import "./Scoreboard.css"

function TopPilots(){
    const TopPilotsIcon = (
        <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 34 46" fill="none">
            <path d="M16.3333 0.0959473C18.5792 0.0959473 20.4167 2.14959 20.4167 4.6596C20.4167 7.1696 18.5792 9.22325 16.3333 9.22325C14.0875 9.22325 12.25 7.1696 12.25 4.6596C12.25 2.14959 14.0875 0.0959473 16.3333 0.0959473ZM24.2958 14.0151C23.4792 13.1023 22.05 11.5051 19.3958 11.5051H14.2917C8.575 11.5051 4.08333 6.48506 4.08333 0.0959473H0C0 7.39779 4.2875 13.3305 10.2083 15.3842V45.7324H14.2917V32.0415H18.375V45.7324H22.4583V18.5787L30.625 27.4778L33.4833 24.2833L24.2958 14.0151Z" fill="#F8D20C"/>
        </svg>
    )
    return(
        <div className="ScoreBoard PilotOfMonth">
            <div className="ScoreBoardTitle"><h1>Top Pilots of the month</h1></div>
            <div className="ScoreBoardBody">
                <div className="ScoreBoardBodySVG"> 
                    {TopPilotsIcon}
                </div>
                <div>
                    <h2>John Doe</h2>
                    <p>2000h 00min </p>
                </div>
            </div>
        </div>
    )
}

export default TopPilots;