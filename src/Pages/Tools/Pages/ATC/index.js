import './index.css';
import { useState } from "react";
import SideBar from '../../../Component/SideBar';
import UpperBar from '../../../Component/UpperBar';
import CasaVFRMap from '../../../../Ressources/VFR_Map/GMMN.png'
import KechVFRMap from '../../../../Ressources/VFR_Map/GMMX.png'
import AgadirVFRMap from '../../../../Ressources/VFR_Map/GMAD.png'
import TangerVFRMap from '../../../../Ressources/VFR_Map/GMTT.png'
import AlgerVFRMap from '../../../../Ressources/VFR_Map/DAAG.png'
import HassiVFRMap from '../../../../Ressources/VFR_Map/DAUH.png'
// import CasaVFRMap from '../../../../Ressources/VFR_MAP.png'
import OranVFRMap from '../../../../Ressources/VFR_Map/DAOO.png'

function ATCTools() {
  const [airportIndexLoading , SetairportIndexLoading] = useState(false)
  const [airportMetar , SetairportMetar] = useState()
  const [airportTAF , SetairportTAF] = useState()
  const [airportInfo , SetairportInfo] = useState()
  const [ARPInfo , SetARPInfo] = useState()
  const [Chart , SetChart] = useState()
  // const [TL , SetTL] = useState()

  
  function MakeApiCall(airportICAO){
    if(airportICAO === "NONE"){
      SetairportMetar("")
      SetairportTAF("")
      SetairportInfo("")
      SetARPInfo("")
      SetChart("")
      // SetTL("")
    }
    else{
  
      fetch(`https://metar.vatsim.net/metar.php?id=${airportICAO}`)
      .then(res=>res.text())
      .then(res => {SetairportMetar(res)})

      fetch(`https://api.vatsim.ma/GetARPInfo/${airportICAO}`)
      .then(res => res.json())
      .then(res =>SetARPInfo(res))

      fetch(`https://api.vatsim.ma/GetWeather/${airportICAO}`)
      .then(res=>res.text())
      .then(res => {
        SetairportInfo(JSON.parse(res))
        // SetTL(ARPInfo.TA + (1013-JSON.parse(res.altim)) * 28)
      })
  
      fetch(`https://api.vatsim.ma/AGTAF/${airportICAO}`)
      .then(res=>res.json())
      .then(res => {
        SetairportTAF(res)
        RenderARPInfo(airportICAO)
        SetChart(airportICAO)
        SetairportIndexLoading(true)
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
          
  }}
  function RenderWindTags(){
    if(airportIndexLoading){
        if (airportInfo.wspd <= 7) {
          return (
            <div className="Normal-Tag">
              <h1>Wind Calm</h1>  
            </div>
          )
        }
        else if (airportInfo.wspd < 20){
          return(
            <div className="Attention-Tag">
              <h1>a little Wind</h1>
            </div>
          )
        }
        else if (airportInfo.wspd > 20){
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
        // console.log(`Gust : ${airportInfo.wgst}`)
        if (airportInfo.wgst == null ){
          return(
            <div className="Normal-Tag">
              <h1>No Gust</h1>
            </div>
          )
        }
        else if (airportInfo.wgst < 5) {
          return (
            <div className="Attention-Tag">
              <h1>Gust</h1>  
            </div>
          )
        }
        else if (airportInfo.wgst > 9) {
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
  function RenderTL(){
    if(airportIndexLoading){
          const ALTM = 1013 - airportInfo.altim
          const ALTMUpdate = ( ALTM * 28) 
          const TLInit = (ARPInfo.TA + ALTMUpdate) / 1000
          const TL = Math.round(TLInit)
          return (
            <>TL : {TL*10}ft</>
          )
        
            
    }
  }
  function RenderInitialClimb(){
    // alert(ARPInfo.InitialClimb)
    return(
      // <>{ARPInfo.InitialClimb} | {TL}</>
      <>{ARPInfo.InitialClimb}</>
    )
  }
  function RenderARPInfo(){
    if(ARPInfo){
      try {
        return(
          <div>
            {ARPInfo.runways.map(runway => (
              <div key={runway.name}>
                <div className="ATC-Station-Page-INFO-Body-Rny">
                  <h1>{runway.name}</h1> 
                </div>
                
                <div>
                  <p>{runway.info}</p>
                </div>
              </div>
            ))}
          </div>
        )
      } catch (error) {
        return(
          <div>
          </div>
        )
      }
    
  }}
  function RenderARPFreqs(){
    // alert(ARPInfo.Frequencies.ATIS)
    return(
      <>
      <div className="ATC-Station-Page page2 animate__fadeIn">
        <div><h1>Frequencies</h1></div>
        <div>
          <div className="freq1"><p>D-ATIS</p><p>{ARPInfo.Frequencies.ATIS}</p></div>
          <div className="freq2"><p>GND</p><p>{ARPInfo.Frequencies.GND}</p></div>
          <div className="freq3"><p>TWR</p><p>{ARPInfo.Frequencies.TWR}</p></div>
          <div className="freq4"><p>APP</p><p>{ARPInfo.Frequencies.APP}</p></div>
          <div className="freq5"><p>CTR_ALL</p><p>{ARPInfo.Frequencies.CTR_ALL}</p></div>
          <div className="freq6"><p>GMAC</p><p>{ARPInfo.Frequencies.GMAC}</p></div>
        </div>
      </div>
        
      </>
    )
  }
  function RenderChart(){
    if(Chart === "GMMN"){return(<img alt="" className="Chart" src={CasaVFRMap}></img>)}
    else if(Chart === "GMMX"){return(<img alt="" className="Chart" src={KechVFRMap}></img>)}
    else if(Chart === "GMTT"){return(<img alt="" className="Chart" src={TangerVFRMap}></img>)}
    else if(Chart === "GMAD"){return(<img alt="" className="Chart" src={AgadirVFRMap}></img>)}
  }
  function RenderChart(){
    
    if(Chart === "GMMN"){
      return(
      <div className="ATC-Station-Page page3 animate__fadeIn">
      <div className="page3-header"><h1>VFR Charts</h1></div>
        <div>
          <center>
            <img alt="" className="Chart" src={CasaVFRMap}></img>
          </center>
        </div>    
      </div> 
      )
    }
    else if(Chart === "GMMX"){
      return(
      <div className="ATC-Station-Page page3">
      <div className="page3-header"><h1>VFR Charts</h1></div>
        <div>
          <center>
            <img alt="" className="Chart" src={KechVFRMap}></img>
          </center>
        </div>    
      </div> 
    )
   }
    else if(Chart === "GMTT"){return(
      <div className="ATC-Station-Page page3">
      <div className="page3-header"><h1>VFR Charts</h1></div>
        <div>
          <center>
            <img alt="" className="Chart" src={TangerVFRMap}></img>
          </center>
        </div>    
      </div>       
      )}
    
    else if(Chart === "GMAD"){return(
      
      <div className="ATC-Station-Page page3">
      <div className="page3-header"><h1>VFR Charts</h1></div>
        <div>
          <center>
          <img alt="" className="Chart" src={AgadirVFRMap}></img>
          </center>
        </div>    
      </div>  
    )}
    else if (Chart === "DAAG"){
    return(
      
      <div className="ATC-Station-Page page3">
      <div className="page3-header"><h1>VFR Charts</h1></div>
        <div>
          <center>
          <img alt="" className="Chart" src={AlgerVFRMap}></img>
          </center>
        </div>    
      </div>  
    )}
    else if (Chart === "DAUH"){
      return(
        
        <div className="ATC-Station-Page page3">
        <div className="page3-header"><h1>VFR Charts</h1></div>
          <div>
            <center>
            <img alt="" className="Chart" src={HassiVFRMap}></img>
            </center>
          </div>    
        </div>  
      )}
        else if (Chart === "DAOO"){
          return(
            <div className="ATC-Station-Page page3">
            <div className="page3-header"><h1>VFR Charts</h1></div>
              <div>
                <center>
                <img alt="" className="Chart" src={OranVFRMap}></img>
                </center>
              </div>    
            </div>  
          )}
  }
  function RenderExtra(){
    const url = `https://metar-taf.com/${Chart}`
    return(
    <div className="ATC-Station-Page page4 animate__fadeIn">
      <div className="page3-header"><h1>Extra</h1></div>
      <div>
        <iframe
        width="860"
        height="484"
        src={url}
        id="metartaf-bpphN1ZY">METAR Mohammed V International Airport</iframe>
      </div> 
    </div>
 
    )
  }

  return (
    <>
      <SideBar />
    
      <div className="Tools PagesContainer">
    
        <UpperBar username={sessionStorage.getItem("FullName")} />
    
        <div className="ATC-Station-Page animate__fadeIn">
          {/* --------------------------- HEADER --------------------------------- */}
            <div className="ATC-Station-Page-header">
              <div><h1>{airportIndexLoading && <>{RenderTL()}</>}</h1></div>
              <div>
                <select onChange={e => MakeApiCall(e.target.value)}>
                  <option className="HeaderOptions" selected>NONE</option>
                  <option className="HeaderOptions">GMMN</option>
                  <option className="HeaderOptions">GMMX</option>
                  <option className="HeaderOptions">GMAD</option>

                  <option className="HeaderOptions">DAAG</option>
                  <option className="HeaderOptions">DAUH</option>
                  <option className="HeaderOptions">DAOO</option>

                  <option className="HeaderOptions">DTTA</option>
                  <option className="HeaderOptions">DTTJ</option>
                  <option className="HeaderOptions">DTNH</option>
                  {/* For Testing */}
                  {/* <option>KJFK</option>  */}
                  {/* <option>LPMA</option> */}
                </select>
              </div>
              <div><h1>Inital climb FL{ARPInfo && <>{RenderInitialClimb()}</>}</h1></div>
              {/* <div><h1>Inital climb FL{RenderInitialClimb()}</h1></div> */}
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
                  airportIndexLoading === true &&(
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
                  airportIndexLoading === true &&(
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
        
        
        {ARPInfo && <>{RenderARPFreqs()}</>}
        
        {ARPInfo &&RenderChart()}

        {ARPInfo &&RenderExtra()}
        
            
      </div>
    
    </>
    );

}



    
export default ATCTools;
