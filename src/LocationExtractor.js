import { useEffect , useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import "./App.css"
import LoadingSpinner from './Pages/Component/LoadingSpinner';
import Data from "./MaghrebSetup.json"

function LocationExtractor() {
  let navigate, location, encodedData, jsonData, Data

  function ExtractorInit(){
    navigate = useNavigate();
    location = useLocation();
    encodedData = new URLSearchParams(location.search).get('data');
    jsonData = JSON.parse(decodeURIComponent(encodedData || ''));
    Data = JSON.parse(jsonData).data;
  }

  function RemovePersonalData(){

    try {
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

    } catch (error) {
      console.log(`Function RemovePersonalData() Failed with : ${error}`)
    }
    



  }

  function SavePersonalData(){

    // OAuth
    try {
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

    } catch (error) {
      console.log(`Function SavePersonalData() Failed with : ${error}`)
    }
    



  }

  function SavePersonalStats(){
      const url = (process.env.REACT_APP_APP_ENV == "PROD") ? "https://api.vatsim.ma/atc" : "http://localhost:1000/atc"
      fetch(url , {
              method: "POST",
              headers: {
              "Content-Type": "application/json"
              },
              body: JSON.stringify({cid: (process.env.REACT_APP_APP_ENV == "PROD") ? sessionStorage.getItem("CID") : "1674212"})
          })
      .then(data => data.json())
      .then(data => {
        
        // console.log(data)
        sessionStorage.setItem("LastPosition" , JSON.stringify(data))
        })
      .catch(e=>`Function SavePersonalData() Failed with : ${e}`)



      
    
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
    
    let url = (process.env.REACT_APP_APP_ENV == "PROD") ? "https://api.vatsim.ma/" : "http://localhost:1000/"

    fetch(`${url}stats` , {
            method: "POST",
            headers: {
            "Content-Type": "application/json"
            },
            body: JSON.stringify({cid: (process.env.REACT_APP_APP_ENV == "PROD") ? sessionStorage.getItem("CID") : "1674212"})
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
    .catch(e=>console.log(`Function GetStats() Failed with : ${e}`))

    
    url = (process.env.REACT_APP_APP_ENV == "PROD") ? "https://api.vatsim.ma/" : "http://localhost:1000/"
    fetch(`${url}MembersGetConnectionLog/${(process.env.REACT_APP_APP_ENV == "PROD") ? sessionStorage.getItem("CID") : "1674212"}`)
    .then(res => res.json())
    .then(res => sessionStorage.setItem("UserControllerLog" ,JSON.stringify(res) ))
    .catch(e=>console.log(`Function GetStats() Failed with : ${e}`))
  }

  function GetLastFlightTime(){
    
    const url = (process.env.REACT_APP_APP_ENV == "PROD") ? "https://api.vatsim.ma/" : "http://localhost:1000/"

    fetch(`${url}LastFlightTime` , {
            method: "POST",
            headers: {
            "Content-Type": "application/json"
            },
            body: JSON.stringify({cid: (process.env.REACT_APP_APP_ENV == "PROD") ? sessionStorage.getItem("CID") : "1674212"})
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

      sessionStorage.setItem("LastHoursFlown" , `${hours}h ${minutes}m` )
      })
      
    .catch(e=>console.log(`Function GetLastFlightTime() Failed with : ${e}`))
  }

  function StoreEventsSession(){
        
    const url = (process.env.REACT_APP_APP_ENV == "PROD") ? "https://api.vatsim.ma/" : "http://localhost:1000/"
    fetch(`${url}MaghrebEvents`)
    .then(res => res.json())
    .then(res => sessionStorage.setItem("MaghrebEvents" , JSON.stringify(res)))
    .catch(e=>console.log(`Function StoreEventsSession() Failed with : ${e}`))

  }

  function GetSimbriefInfo(){

    let url = (process.env.REACT_APP_APP_ENV == "PROD") ? "https://api.vatsim.ma/" : "http://localhost:1000/"
    // const cid = (process.env.REACT_APP_APP_ENV == "PROD") ? Data.cid : 1674212
    const cid = Data.cid
    fetch(`${url}GetSetting/${cid}`)
    .then(res => res.json())
    // .then(res => console.log(res))
    .then(res => {
      // console.log(res.length)
      if(res.length > 0){
        console.log("OLD")
        sessionStorage.setItem("UserSimbriefData" ,JSON.stringify(res) )
      }else{
        console.log("NEW")
        sessionStorage.setItem("UserSimbriefData" ,"New" )
      }
      // (res.length > 0) ?  : 
    })
    .catch(e=>console.log(`Function GetSimbriefInfo() Failed with : ${e}`))
  }

  function Redirect(){


      setTimeout(()=>{
        navigate('/dashboard');

        
      },100)
    
   
  }

  // GetEventsAndRedirect 

  const BanList  = require('./Pages/Admin/Pages/Staff/Setup.json');


  const List  = require('./Pages/Admin/Pages/Staff/Setup.json');


  ExtractorInit()
  
  useEffect(()=>{

    
    SavePersonalData()

    if(BanList.BanList.includes(Data.cid)){
      RemovePersonalData()
      return(
        <div className="BannerAlert"><p>It seems that there is a problem .Please speak to maghreb staff for more information</p></div>
        
      )
    
    }
    else{
      SavePersonalStats()
      GetStats()
      GetLastFlightTime()
      StoreEventsSession()
      GetSimbriefInfo()
      Redirect()
    }
  },[])

                                                                                        
  


  
  return(
    <LoadingSpinner/>
  )

}

export default LocationExtractor;
