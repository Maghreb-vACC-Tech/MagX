import { useState } from "react"
import "./index.css"


function DashboardEvents(){

    const [event,setevent] = useState("")
    const [EventBanner,setEventBanner] = useState("")
    const [EventLink,setEventLink] = useState("")

    // fetch("http://127.0.0.1:1000/MaghrebEvents")
    // .then(data => data.json())
    // .then(data => {
    //     setevent(data[0])
    //     setEventBanner(data[0].banner)
    //     setEventLink(data[0].link)
    // })
  
    // Rest of your component code




    return(
            <div className="DashboardEvent animate__fadeInDown">
                {/* {JSON.stringify(event)} */}
                <div>
                    <a href={EventLink} target="blank">
                        {/* <img src={EventBanner}></img> */}
                        <img src="https://vatsim-my.nyc3.digitaloceanspaces.com/events/YQfA7qAOrMvMH9f4QBILdxqrHAYX8v8lpaiyENqF.jpg"></img>
                    </a>
                </div>
                <div className="animate__fadeInDown">
                    <a href={EventLink} target="blank">
                        {/* <img src={EventBanner}></img> */}
                        <img src="https://vatsim-my.nyc3.digitaloceanspaces.com/events/YQfA7qAOrMvMH9f4QBILdxqrHAYX8v8lpaiyENqF.jpg"></img>
                    </a>
                </div>
            </div>

    )
}

export default DashboardEvents