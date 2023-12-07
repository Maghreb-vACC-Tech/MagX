import { useEffect , useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import LoadingSpinner from './Pages/Component/LoadingSpinner';

function LocationExtractor() {
  const navigate = useNavigate();
  const location = useLocation();
  const encodedData = new URLSearchParams(location.search).get('data');
  const jsonData = JSON.parse(decodeURIComponent(encodedData || ''));
  const Data = JSON.parse(jsonData).data;

  // Events Extraction
  const [MagEvent , SetMagEvent] = useState([])
  const [Events , SetEvents] = useState([]) //setLastPosition

  // States Save
  // const [LastPosition , setLastPosition] = useState([]) 
  // const [LastHoursFlown , setLastHoursFlown] = useState("")
  // const [PilotStat , setPilotStat] = useState("")
  // const [ATCStat,setATCStat] = useState("")



  function SavePersonalData(){

      // Data CONST   
    // CID
    const CID = Data.cid
    // Fullname
    const FullName = Data.personal.name_full
    // Email
    const Email = Data.personal.email
    // Country
    const Country = Data.personal.country.name
    // ATC Rating
    const LongATCRating = Data.vatsim.rating.long
    const ShortATCRating = Data.vatsim.rating.short
    // Pilot Rating
    const LongPilotRating = Data.vatsim.pilotrating.long
    const ShortPilotRating = Data.vatsim.pilotrating.short
    // Division
    const ShortDivision = Data.vatsim.division.id
    const LongDivision = Data.vatsim.division.name
    // Region
    const ShortRegion = Data.vatsim.region.id
    const LongRegion = Data.vatsim.region.name
    // Subdivision
    const ShortSubdivision = Data.vatsim.subdivision.name
    const LongSubdivision = Data.vatsim.subdivision.name
    // OAuth
    const OAuth = Data.oauth

    // console.log(JSON.stringify(Data))
    // Set Sessions
    sessionStorage.setItem("Data" , Data)
    sessionStorage.setItem("CID" , CID)
    sessionStorage.setItem("FullName" , FullName)
    sessionStorage.setItem("Email" , Email)
    sessionStorage.setItem("Country" , Country)
    sessionStorage.setItem("LongATCRating" , LongATCRating)
    sessionStorage.setItem("ShortATCRating" , ShortATCRating)
    sessionStorage.setItem("LongPilotRating" , LongPilotRating)
    sessionStorage.setItem("ShortPilotRating" , ShortPilotRating)
    sessionStorage.setItem("ShortDivision" , ShortDivision)
    sessionStorage.setItem("LongDivision" , LongDivision)
    sessionStorage.setItem("ShortRegion" , ShortRegion)
    sessionStorage.setItem("LongRegion" , LongRegion)
    sessionStorage.setItem("ShortSubdivision" , ShortSubdivision)
    sessionStorage.setItem("LongSubdivision" , LongSubdivision)
    sessionStorage.setItem("OAuth" , OAuth)



  }

  function SavePersonalStats(){
      fetch("http://127.0.0.1:1000/atc" , {
              method: "POST",
              headers: {
              "Content-Type": "application/json"
              },
              body: JSON.stringify({cid: 1674212})
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
  fetch("http://127.0.0.1:1000/stats" , {
          method: "POST",
          headers: {
          "Content-Type": "application/json"
          },
          body: JSON.stringify({cid: 1674212})
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
}
function GetLastFlightTime(){
  fetch("http://127.0.0.1:1000/LastFlightTime" , {
          method: "POST",
          headers: {
          "Content-Type": "application/json"
          },
          body: JSON.stringify({cid: 1674212})
      })
  .then(data => data.json())
  .then(data => {
    console.log(data)
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





  function GetEventsAndRedirect(){
    
    function SetMagEventsFunction(res){
      SetMagEvent(res)

      sessionStorage.setItem("Events" , JSON.stringify(MagEvent) )
      // alert("SetMagEventsFunction")
      setTimeout(()=>{
        navigate('/dashboard');
      },100)
    }
    function SetVatsimEventsFunction(){

      fetch("http://127.0.0.1:1000/VatsimEvents")
      .then(res => res.json())
      .then(res => {
        // alert(JSON.stringify(res))
        sessionStorage.setItem("Events" , JSON.stringify(res) )
      })
      
        
        // alert("SetVatsimEventsFunction")
        setTimeout(()=>{
          navigate('/dashboard');
        },100)
    }

    fetch("http://127.0.0.1:1000/MaghrebEvents")
    .then(res => res.json())
    .then(res => res.length == 0 ? SetVatsimEventsFunction() : SetMagEventsFunction(res))
    
  }
  // GetEventsAndRedirect 
  
  useEffect(() => {

    SavePersonalData()
    SavePersonalStats()
    GetStats()
    GetLastFlightTime()
    GetEventsAndRedirect()

  }, [Data]);



  return(
    <LoadingSpinner/>
  )

}

export default LocationExtractor;