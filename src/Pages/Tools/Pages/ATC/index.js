import './index.css';
import { useState, useEffect } from "react";
import SideBar from '../../../Component/SideBar';
import UpperBar from '../../../Component/UpperBar';
import VFRMap from '../../../../Ressources/VFR_MAP.png'

function ATCTools() {
  const [airportIndexLoading , SetairportIndexLoading] = useState(false)
  const [airportMetar , SetairportMetar] = useState()
  const [airportTAF , SetairportTAF] = useState()
  const [airportInfo , SetairportInfo] = useState()
  const [ARPInfo , SetARPInfo] = useState()

  function MakeApiCall(airportICAO){
    if(airportICAO == "NONE"){
      SetairportMetar("")
      SetairportTAF("")
      SetairportInfo("")
    }
    else{
      fetch(`http://127.0.0.1:1000/GetWeather/${airportICAO}`)
      .then(res=>res.text())
      .then(res => {SetairportInfo(JSON.parse(res))})
  
      fetch(`https://metar.vatsim.net/metar.php?id=${airportICAO}`)
      .then(res=>res.text())
      .then(res => {SetairportMetar(res)})

      fetch(`http://127.0.0.1:1000/GetARPInfo/${airportICAO}`)
      .then(res => res.json())
      // .then (res => {
      //   // console.log(res[0])
      //   res.forEach(rny => {
      //     console.log(rny)
      //   });
      // })
      .then(res => SetARPInfo(res))
  
      fetch(`http://127.0.0.1:1000/AGTAF/${airportICAO}`)
      .then(res=>res.json())
      .then(res => {
        SetairportTAF(res)
        SetairportIndexLoading(true)
        RenderARPInfo(airportICAO)
      })

    }
  }




  function RenderVisibilityTags(){
    if(airportIndexLoading){
      if (airportInfo.visib === '6+') {
        return (
          <div className="Normal-Tag">
            <h1>CAVOK</h1>  
          </div>
        )
      }
      else if (airportInfo.visib > 2){
        return(
          <div className="Attention-Tag">
            <h1>MVFR</h1>
          </div>
        )
      }
      else if (airportInfo.visib < 2){
        return(
          <div className="Warning-Tag">
            <h1>IFR</h1>
          </div>
        )
      }
          
  }
  }

  function RenderWindTags(){
    if(airportIndexLoading){
        if (airportInfo.wspd <= 7) {
          return (
            <div className="Normal-Tag">
              <h1>Wind Calm</h1>  
            </div>
          )
        }
        else if (airportInfo.wspd < 15){
          return(
            <div className="Attention-Tag">
              <h1>a little Wind</h1>
            </div>
          )
        }
        else if (airportInfo.wspd > 15){
          return(
            <div className="Warning-Tag">
              <h1>Windy</h1>
            </div>
          )
        }
            
    }
  }

  function RenderTempTags(){
    if(airportIndexLoading){
        if (airportInfo.temp <= 0) {
          return (
            <div className="Icing-Tag">
              <h1>ICE</h1>  
            </div>
          )
        }
        else if (airportInfo.temp > 30){
          return(
            <div className="Warning-Tag">
              <h1>Hot</h1>
            </div>
          )
        }
        else if (airportInfo.temp > 0 || airportInfo.temp < 30){
          return(
            <div className="Normal-Tag">
              <h1>Good Temp</h1>
            </div>
          )
        }
            
    }
  }

  function RenderGustTags(){
    if(airportIndexLoading){
        if (airportInfo.wst < 5) {
          return (
            <div className="Attention-Tag">
              <h1>Gust</h1>  
            </div>
          )
        }
        else if (airportInfo.wst > 5) {
          return(
            <div className="Warning-Tag">
              <h1>Strong Gust</h1>
            </div>
          )
        }
            
    }
  }

  function RenderPrecepTags(){
    if(airportIndexLoading){
        if (airportInfo.precip != null) {
          return (
            <div className="Precep-Tag">
              <h1>Precep</h1>  
            </div>
          )
        }
            
    }
  }

  function RenderSnowTags(){
    if(airportIndexLoading){
        if (airportInfo.snow != null) {
          return (
            <div className="Icing-Tag">
              <h1>Snow</h1>  
            </div>
          )
        }
            
    }
  }

  function RenderReportTimeTags(){
    if(airportIndexLoading){
          return (
            <>{airportInfo.reportTime}</>
          )
        
            
    }
  }
  

  function RenderARPInfo(){
    // alert("hel")
    return(
      <div>
      <p>erfrwef</p>
        <p>{ARPInfo}</p>
        {/* {ARPInfo.map(runway => (
          <div key={runway.name}>
            <div className="ATC-Station-Page-INFO-Body-Rny">
              <h1>{runway.name}</h1> 
            </div>
            
            <div>
              <p>{runway.info}</p>
            </div>
          </div>
        ))} */}
      </div>
    )
  }

    // return(
    //   <>
    //     <div>
    //       <div className="ATC-Station-Page-INFO-Body-Rny"><h1>35R</h1></div>
    //       <div>
    //         <p>
    //           RWY 35 RIGHT IN USE. TRANSITION LEVEL FIVE ZERO. RISK OF CONFUSION BETWEEN RWY 35 RIGHT AND RWY 35 LEFT. RISK OF CONFUSION BETWEEN 35R AND TAXIWAY TANGO. AFTER VACATING 35R HOLD SHORT OF PARALLEL TAXIWAY TANGO.
    //         </p>
    //       </div>
    //     </div>

    //     <div>
    //       <div className="ATC-Station-Page-INFO-Body-Rny"><h1>35L</h1></div>
    //       <div>
    //         <p>
    //         RWY 35 LEFT IN USE. TRANSITION LEVEL FIVE ZERO. RISK OF CONFUSION BETWEEN RWY 35 RIGHT AND RWY 35 LEFT.
    //         </p>
    //       </div>
    //     </div>

    //     <div>
    //       <div className="ATC-Station-Page-INFO-Body-Rny"><h1>17R</h1></div>
    //       <div>
    //         <p>
    //         RWY 17 RIGHT IN USE. TRANSITION LEVEL FIVE ZERO. RISK OF CONFUSION BETWEEN RWY 17 RIGHT AND RWY 17 LEFT.
    //         </p>
    //       </div>
    //     </div>

    //     <div>
    //       <div className="ATC-Station-Page-INFO-Body-Rny"><h1>17L</h1></div>
    //       <div>
    //         <p>
    //           RWY 17 LEFT IN USE. TRANSITION LEVEL FIVE ZERO. RISK OF CONFUSION BETWEEN RWY 17 LEFT AND RWY 17 RIGHT. RISK OF CONFUSION BETWEEN 17L AND TAXIWAY TANGO. AFTER VACATING 17L HOLD SHORT OF PARALLEL TAXIWAY TANGO.
    //         </p>
    //       </div>
    //     </div>
    //   </>
    // )
      
    

  return (
    <>
      <SideBar />
    
      <div className="Tools PagesContainer">
    
        <UpperBar username={sessionStorage.getItem("FullName")} />
    
        <div className="ATC-Station-Page">
          {/* --------------------------- HEADER --------------------------------- */}
            <div className="ATC-Station-Page-header">
              <div><h1>{airportIndexLoading && <>{RenderReportTimeTags()}</>}</h1></div>
              <div>
                <select onChange={e => MakeApiCall(e.target.value)}>
                  <option selected>NONE</option>
                  <option>GMMN</option>
                  <option>GMMX</option>
                  <option>GMAD</option>
                  <option>DAAG</option>
                  <option>DTTA</option>
                  {/* For Testing */}
                  <option>KJFK</option> 
                  <option>LPMA</option> 
                </select>
              </div>
              <div><h1>Inital climb FL50</h1></div>
            </div>

          {/* --------------------------- TAGS --------------------------------- */}
          <div className="ATC-Station-Page-TAGS">
            {airportIndexLoading && <>{RenderWindTags()}</>} 
            {airportIndexLoading && <>{RenderGustTags()}</>} 
            {airportIndexLoading && <>{RenderVisibilityTags()}</>} 
            {airportIndexLoading && <>{RenderTempTags()}</>} 
            {airportIndexLoading && <>{RenderPrecepTags()}</>} 
            {airportIndexLoading && <>{RenderSnowTags()}</>} 
            

            
            
          </div>
          
          {/* --------------------------- METAR --------------------------------- */}
          <div className="ATC-Station-Page-METAR">
            <div className="ATC-Station-Page-METAR-Label"><h1>METAR</h1></div>
            <div>
              <div>

                {
                  airportIndexLoading == true &&(
                  <p>{airportMetar}</p>
                  )
                }
                    
              </div>
            </div>
          </div>

          {/* --------------------------- TAF --------------------------------- */}
          <div className="ATC-Station-Page-TAF">
            <div className="ATC-Station-Page-TAF-Label"><h1>TAF</h1></div>
            <div>
              <div>
                {
                  airportIndexLoading == true &&(
                    // <p>{airportTAF.rawTAF}</p>

                    <p>{airportTAF.rawTAF}</p>
                  )
                }
              </div>
            </div>
          </div>
        

          {/* --------------------------- INFO --------------------------------- */}
          <div className="ATC-Station-Page-INFO">
            <div className="ATC-Station-Page-INFO-Label"><h1>INFO</h1></div>
            <div>
                {ARPInfo &&(RenderARPInfo())}
            </div>
          </div>
        </div>
        
        <div className="ATC-Station-Page page2">
          <div><h1>Frequencies</h1></div>
          <div>
            <div className="freq1"><p>D-ATIS</p><p>126.3</p></div>
            <div className="freq2"><p>GND</p><p>130.6</p></div>
            <div className="freq3"><p>TWR</p><p>118.5</p></div>
            <div className="freq4"><p>APP</p><p>119.9</p></div>
            <div className="freq5"><p>CTR_ALL</p><p>131.925</p></div>
            <div className="freq6"><p>GMAC</p><p>131.925</p></div>
          </div>
        </div>

        <div className="ATC-Station-Page page3">
          <div className="page3-header"><h1>Charts</h1></div>
          <div>
            <center>
              <img src={VFRMap}></img>
            </center>
            {/* <iframe src="https://drive.google.com/drive/folders/1Rgb9Y8wad3s9LXL_iRosA2h3N5lgM9aB"></iframe>   */}
          </div>  
        
        </div>

        <div className="ATC-Station-Page page4">
          <div className="page3-header"><h1>Notam</h1></div>
          <div>
            
          </div>  
        
        </div>
            
      </div>
    
    </>
    );

}



    
export default ATCTools;