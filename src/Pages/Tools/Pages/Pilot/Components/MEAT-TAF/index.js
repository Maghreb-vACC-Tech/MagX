import './index.css';

import { useState, useEffect } from "react";

function METAR_TAF() {
  // function GetTaf

  const [FlightPlanData,SetFlightPlanData] = useState()
  const [WeatherData , setWeatherData] = useState()
  function GetSimbrief(){
    fetch("http://127.0.0.1:1000/LastFlightPlan/IlyassBaba")
    .then(data => data.json())
    .then(data => {
        SetFlightPlanData(data)
    })
  }

  function GetMetar(){

  }
  
  useEffect(()=>{
    GetSimbrief()


},[])


  
  return (

    <div className="Metar_Taf">
          {FlightPlanData &&(
            <>
              <div className="Metar_Taf_SYNC">
                <button> <i class="fa-solid fa-rotate"></i> SYNC From Simbrief </button>
              </div>

              <section className='METAR Container'>
                <div className="Tools-METAR">
                  <div className="Tools-METAR-Title">
                    <h1>Departure (metar)</h1>
                  </div>
                  <div className="Tools-METAR-Content">
                    {/* <p>{JSON.stringify(FlightPlanData)}</p> */}
                    <p>{FlightPlanData.origin.metar}</p>
                  </div>
                </div>



                <div className="Tools-METAR">
                  <div className="Tools-METAR-Title">
                    <h1>Arrival (metar)</h1>
                  </div>
                  <div className="Tools-METAR-Content">
                    <p>{FlightPlanData.destination.metar}</p>
                  </div>
                    
                </div>

              </section>

              <section className='METAR Container'>
                <div className="Tools-METAR">
                  <div className="Tools-METAR-Title">
                    <h1>Departure (TAF)</h1>
                  </div>
                  <div className="Tools-METAR-Content">
                    {/* <p>{JSON.stringify(FlightPlanData)}</p> */}
                    <p>{FlightPlanData.origin.taf}</p>
                  </div>
                </div>



                <div className="Tools-METAR">
                  <div className="Tools-METAR-Title">
                    <h1>Arrival (TAF)</h1>
                  </div>
                  <div className="Tools-METAR-Content">
                    <p>{FlightPlanData.destination.taf}</p>
                  </div>
                    
                </div>

              </section>
            </>
       )}
      

      
      

    </div>
  );
}

export default METAR_TAF;