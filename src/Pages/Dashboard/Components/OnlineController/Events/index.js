
import { useEffect, useState } from "react";
import "./index.css"


function DashboardOnlineControllers(props){



    const [ ControllersOnline , setControllersOnline ] = useState();

    function ATCActivityAPICall(){
        const apiurl = props.APILink
        fetch(`${apiurl}AtcActivity`)
        .then(res => res.json())
        // .then(res => console.table(JSON.stringify(res)))
        .then(res => setControllersOnline(res))
        .catch(e => console.log(e))
    }
    function ATCActivityRender(){
        return(
            
            ControllersOnline.map(controller => (
                <div className="DashboardOnlineControllerContainer">
                    <div><h4>{controller.callsigned}</h4></div>
                    <div><p>{controller.user}</p></div>
                    <div><p>{controller.frequency}</p></div>
                </div>
            ))
        )
    }

    useEffect(()=>{
        setInterval(() => {
            ATCActivityAPICall()
        }, 10000);
        
    },[])


    return(
            <div className="DashboardOnlineController">
                <div className="DashboardOnlineControllerTitle"><h1>Online Controllers</h1></div>

                    {ControllersOnline && <ATCActivityRender/>}
                    

                    {/* {JSON.stringify(ControllersOnline)} */}
            </div>

    )
}

export default DashboardOnlineControllers