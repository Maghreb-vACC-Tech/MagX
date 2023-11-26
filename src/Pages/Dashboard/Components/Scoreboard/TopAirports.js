import "./Scoreboard.css"

function TopAirports(){
    const TopAirportsIcon = (
        <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 40 41" fill="none">
            <path d="M24.95 10.1133C24.8379 9.69295 24.5684 9.33499 24.2 9.11741C23.8316 8.89983 23.3943 8.84025 22.9833 8.95164L17.3166 10.5062L9.91665 3.4679L7.86665 4.03165L12.3 11.8729L6.98331 13.325L4.88331 11.6508L3.33331 12.0779L6.09998 16.9979L23.8 12.1462C24.6666 11.89 25.1666 10.9846 24.95 10.1133ZM35 17.0833L33.3333 20.5H25L23.3333 17.0833L25 15.375H28.3333V11.9583H30V15.375H33.3333L35 17.0833ZM36.6666 34.1666V37.5833H3.33331V34.1666H25V22.2083H33.3333V34.1666H36.6666Z" fill="#F8D20C"/>
        </svg>
    )
    return(
        <div className="ScoreBoard ARPTOfMonth">
            <div className="ScoreBoardTitle"><h1>Top Position of the month</h1></div>
            <div className="ScoreBoardBody">
                <div className="ScoreBoardBodySVG"> 
                    {TopAirportsIcon}
                </div>
                <div>
                    <h2>John Doe</h2>
                    <p>2000h 00min </p>
                </div>
            </div>
        </div>
    )
}

export default TopAirports;