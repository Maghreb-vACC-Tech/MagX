
import { useEffect, useState } from "react";
import "./index.css"


function DashboardOnlineControllers(){

    const [ ControllersOnline , setControllersOnline ] = useState();
//     function ConvertVatsimTime(Time){
//         const date = new Date(Time);
      
//         const hours = String(date.getHours()).padStart(2, '0');
//         const minutes = String(date.getMinutes()).padStart(2, '0');
//         const seconds = String(date.getSeconds()).padStart(2, '0');
      
//         return `${hours}:${minutes}:${seconds}`;
// }
    // useEffect(()=>{

    //     function BuildOnlineControllerData(){
    //         try {
    //             fetch('https://data.vatsim.net/v3/vatsim-data.json', { timeout: 30000 })
    //               .then(data => data.json())
    //               .then(response => {
    //                 if (response.controllers) { // check if the property exists
    //                   const filteredResponse = response.controllers.filter(item =>
    //                     /^(DAAA|DAAD|DAAE|DAAG|DAAJ|DAAK|DAAP|DAAS|DAAT|DAAV|DABB|DABC|DABS|DABT|DAOB|DAOF|DAOI|DAOL|DAON|DAOO|DAOR|DAOV|DAOY|DATG|DATM|DAUA|DAUB|DAUE|DAUG|DAUH|DAUI|DAUK|DAUO|DAUT|DAUU|DAUZ|DTTC|DTKA|DTMB|DTNH|DTTA|DTTB|DTTF|DTTG|DTTI|DTTJ|DTTX|DTTZ|GMMM|GMAC|GMAD|GMAG|GMAT|GMAZ|GMFB|GMFF|GMFI|GMFK|GMFM|GMFO|GMFZ|GMMA|GMMB|GMMD|GMME|GMMH|GMMI|GMML|GMMN|GMMT|GMMW|GMMX|GMMZ|GMTA|GMTN|GMTT)/.test(item.callsign)
    //                   )
    //                   const currentCallsigns = filteredResponse.map(item => ({
    //                     callsigned: item.callsign,
    //                     cid: item.cid,
    //                     time: item.logon_time,
    //                     frequency: item.frequency,
    //                     user: item.name
    //                   }));

    //                   setControllersOnline(currentCallsigns)

    //                 }
    //               })
    //               .catch(error => {
    //                 console.error(error);
    //               });
    //           } catch (error) {
    //             console.error(error);
    //           }
    //     }
    //     BuildOnlineControllerData()

    //     setInterval(()=>{
    //     },5000)
    // })





    return(
            <div className="DashboardOnlineController">
                <div className="DashboardOnlineControllerTitle"><h1>Online Controllers</h1></div>

                {ControllersOnline.map(controller => (
                    <div className="DashboardOnlineControllerContainer">
                        <div><h4>{controller.callsigned}</h4></div>
                        <div><p></p></div>
                        <div><p>{controller.cid}</p></div>
                    </div>
                ))}


                    {JSON.stringify(ControllersOnline)}
            </div>

    )
}

export default DashboardOnlineControllers