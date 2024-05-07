import { useEffect , useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import "./App.css"
import LoadingSpinner from './Pages/Component/LoadingSpinner';

function LocationExtractor() {

  const navigate = useNavigate();
  const location = useLocation();
  const encodedData = new URLSearchParams(location.search).get('data');
  const jsonData = JSON.parse(decodeURIComponent(encodedData || ''));
  const Data = JSON.parse(jsonData).data;




  function RemovePersonalData(){

    // OAuth
    const OAuth = Data.oauth

    // Set Sessions
    sessionStorage.removeItem("Data")
    sessionStorage.removeItem("CID")
    sessionStorage.removeItem("FullName")
    sessionStorage.removeItem("Email")
    sessionStorage.removeItem("Country")
    sessionStorage.removeItem("LongATCRating")
    sessionStorage.removeItem("ShortATCRating")
    sessionStorage.removeItem("LongPilotRating")
    sessionStorage.removeItem("ShortPilotRating")
    sessionStorage.removeItem("ShortDivision")
    sessionStorage.removeItem("LongDivision")
    sessionStorage.removeItem("ShortRegion")
    sessionStorage.removeItem("LongRegion")
    sessionStorage.removeItem("ShortSubdivision")
    sessionStorage.removeItem("LongSubdivision")
    sessionStorage.removeItem("OAuth")



  }

  function SavePersonalData(){

    // OAuth
    const OAuth = Data.oauth

    const Person = {
      CID: Data.cid,
      FullName: Data.personal.name_full,
      Email: Data.personal.email,
      Country: Data.personal.country.name,
      LongATCRating: Data.vatsim.rating.long,
      ShortATCRating: Data.vatsim.rating.short,
      LongPilotRating: Data.vatsim.pilotrating.long,
      ShortPilotRating: Data.vatsim.pilotrating.short,
      ShortDivision: Data.vatsim.division.id,
      LongDivision: Data.vatsim.division.name,
      ShortSubdivision: Data.vatsim.subdivision.name,
      LongSubdivision: Data.vatsim.region.name,
      ShortRegion: Data.vatsim.subdivision.name,
      LongRegion: Data.vatsim.subdivision.name
    }

    // console.log(JSON.stringify(Data))
    // Set Sessions
    sessionStorage.setItem("Data" , Person.Data)
    sessionStorage.setItem("CID" , Person.CID)
    sessionStorage.setItem("FullName" , Person.FullName)
    sessionStorage.setItem("Email" , Person.Email)
    sessionStorage.setItem("Country" , Person.Country)
    sessionStorage.setItem("LongATCRating" , Person.LongATCRating)
    sessionStorage.setItem("ShortATCRating" , Person.ShortATCRating)
    sessionStorage.setItem("LongPilotRating" , Person.LongPilotRating)
    sessionStorage.setItem("ShortPilotRating" , Person.ShortPilotRating)
    sessionStorage.setItem("ShortDivision" , Person.ShortDivision)
    sessionStorage.setItem("LongDivision" , Person.LongDivision)
    sessionStorage.setItem("ShortRegion" , Person.ShortRegion)
    sessionStorage.setItem("LongRegion" , Person.LongRegion)
    sessionStorage.setItem("ShortSubdivision" , Person.ShortSubdivision)
    sessionStorage.setItem("LongSubdivision" , Person.LongSubdivision)
    sessionStorage.setItem("OAuth" , OAuth)



  }

  function SavePersonalStats(){
      fetch("https://api.vatsim.ma/atc" , {
              method: "POST",
              headers: {
              "Content-Type": "application/json"
              },
              body: JSON.stringify({cid: sessionStorage.getItem("CID")})
          })
      .then(data => data.text())
      .then(data => {
        
        // alert(data.items.callsign)
        sessionStorage.setItem("LastPosition" , data)
        })
      .catch(e=>console.log(e))



      
    
  }
  
  function millisecondsToHoursMinutes(ms , minstate) {
    const seconds = ms / 1000;
    const minutes = seconds / 60;
    const hours = minutes / 60;

    const hrs = Math.floor(hours);
    const mins = Math.floor(minutes % 60);

    if (minstate)
        return `${hrs}h ${mins}m`;
    else
    return `${hrs}h`;

  }    

  function GetStats(){
    fetch("https://api.vatsim.ma/stats" , {
            method: "POST",
            headers: {
            "Content-Type": "application/json"
            },
            body: JSON.stringify({cid: sessionStorage.getItem("CID")})
        })
    .then(data => data.json())
    .then(data => {

            const pilothours = millisecondsToHoursMinutes(data.pilot * 3600000)
            const atchours = millisecondsToHoursMinutes(data.atc * 3600000)

            sessionStorage.setItem("PilotStat" , JSON.stringify(data.pilot))
            sessionStorage.setItem("ATCStat" , JSON.stringify(data.atc) )
            sessionStorage.setItem("PilotStat" , pilothours )
            sessionStorage.setItem("ATCStat" , atchours )

      })

    fetch(`https://api.vatsim.ma/MembersGetConnectionLog/${sessionStorage.getItem("CID")}`)
    .then(res => res.json())
    .then(res => sessionStorage.setItem("UserControllerLog" ,JSON.stringify(res) ))
  }

  function GetLastFlightTime(){
    fetch("https://api.vatsim.ma/LastFlightTime" , {
            method: "POST",
            headers: {
            "Content-Type": "application/json"
            },
            body: JSON.stringify({cid: sessionStorage.getItem("CID")})
        })
    .then(data => data.json())
    .then(data => {
      const start = new Date(data.start);
      const end = new Date(data.end);
      
      // Get timestamp of both dates
      const startTime = start.getTime(); 
      const endTime = end.getTime();
      
      // Calculate duration by subtracting timestamps
      const duration = endTime - startTime; 
      
      // Convert duration to hours/minutes/seconds
      const hours = Math.floor(duration / 1000 / 60 / 60);
      const minutes = Math.floor(duration / 1000 / 60) % 60; 
      const seconds = Math.floor(duration / 1000) % 60;

      // setLastHoursFlown(`${hours}h ${minutes}m`)
      sessionStorage.setItem("LastHoursFlown" , `${hours}h ${minutes}m` )
      })
  }

  function StoreEventsSession(){
        
    fetch("https://api.vatsim.ma/MaghrebEvents")
    .then(res => res.json())
    .then(res => sessionStorage.setItem("MaghrebEvents" , JSON.stringify(res)))
    

  }


  function Redirect(){


      setTimeout(()=>{
      // check if new user then redirect
      //fetch(`http://127.0.0.1:1000/Setting/${sessionStorage.getItem("CID")}`)
      //.then(res => res.json())
      //.then(res => {
        // console.log(res)
        navigate('/dashboard');
        // if(res.length > 0){
        //   navigate('/dashboard');
        // }
        // else{
        //   navigate('/Config');
        // }
      //})

        
      },100)
    
   
  }

  // GetEventsAndRedirect 

  const BanList  = require('./Pages/Admin/Pages/Staff/Setup.json');


  const List  = require('./Pages/Admin/Pages/Staff/Setup.json');
                                                                                            
  if(BanList.BanList.includes(Data.cid)){
    RemovePersonalData()
    return(
      <div className="BannerAlert"><p>It seems that there is a problem .Please speak to maghreb staff for more information</p></div>
      
    )
  
  }
  else{
    SavePersonalData()
    SavePersonalStats()
    GetStats()
    GetLastFlightTime()
    StoreEventsSession()
    Redirect()
  }

  return(
    <LoadingSpinner/>
  )

}

export default LocationExtractor;
