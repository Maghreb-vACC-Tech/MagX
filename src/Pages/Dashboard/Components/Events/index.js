import { useState } from "react"
import "./index.css"


function DashboardEvents(){

    // const [event,setevent] = useState("")
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
    const event = JSON.parse(sessionStorage.getItem("MagEvent"));

    console.log(event[0].banner)


    return(
            <div className="DashboardEvent animate__fadeInDown">
                {/* {JSON.stringify(event)} */}
                {event.map((item) => (
                    <div>
                        <a href={item.link} target="blank">
                            {/* <img src={EventBanner}></img> */}
                            <img src={item.banner}></img>
                        </a>
                    </div>
                ))}
                

            </div>

    )
}

export default DashboardEvents