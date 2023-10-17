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

    console.log(JSON.stringify(Data))
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

  function GetEventsAndRedirect(){
    fetch("http://127.0.0.1:1000/MaghrebEvents")
    .then(res => res.json())
    .then(res => {
      SetMagEvent(res)
      
      sessionStorage.setItem("MagEvent" , JSON.stringify(MagEvent) )
      // console.log(sessionStorage.getItem("MagEvent"))

      setTimeout(()=>{
        navigate('/dashboard');
      },100)
      
      // navigate('/dashboard')
    })
    
  }
  // GetEventsAndRedirect 
  
  useEffect(() => {

    SavePersonalData()
    
    GetEventsAndRedirect()

  }, [Data]);



  return(
    <LoadingSpinner/>
  )

}

export default LocationExtractor;