import { useState, useEffect } from "react";
import { useLocation, useNavigate } from 'react-router-dom';

import SideBar from "../Component/SideBar";
import UpperBar from "../Component/UpperBar";

import "./index.css"


import MagLogo from "../../Ressources/Logo/logo.svg"
import SimbriefLogo from "../../Ressources/simbriefBigLogo.png"
// import ColorsLogo from "../../Ressources/ColorsLogo.jpg"

function Configurator() {
  // console.log()


    const navigate = useNavigate();

    function AnimateConfigurator(){
    }
    const PagesClasses = [".Config-Page1" , ".Config-Page2" , ".Config-Page3" , ".Config-Page4" , ".Config-Page5"]
    let i=0

    function NextPage(classnameindex){
      document.querySelector(`${PagesClasses[classnameindex]}`).style.transform = `translateX(-100vw)`;
      
      setTimeout(() => {
        document.querySelector(`${PagesClasses[classnameindex]}`).style.display = `none`;
      }, 70);

      
      document.querySelector(`${PagesClasses[classnameindex + 1]}`).style.transform = `translateX(0vw)`;
      document.querySelector(`${PagesClasses[classnameindex + 1]}`).style.display = `block`;
    }
    
    function PrevPage(classnameindex){
      document.querySelector(`${PagesClasses[classnameindex]}`).style.transform = `translateX(-100vw)`;
      
      setTimeout(() => {
        document.querySelector(`${PagesClasses[classnameindex]}`).style.display = `none`;
      }, 70);
      
      document.querySelector(`${PagesClasses[classnameindex - 1]}`).style.transform = `translateX(0vw)`;
      document.querySelector(`${PagesClasses[classnameindex - 1]}`).style.display = `block`;
    }

    let Conf = {
      CID : sessionStorage.getItem("CID"),
      SimbriefID : 0,
      AccentColor : "",
      BGIndex : 0,
    }

    function InsertConfigToDB(){
      // alert(Conf)
      fetch(`http://127.0.0.1:1000/SetSettings`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(Conf),
      })
        .then(response => response.json())
        .then(response => {
          console.log("Data received:", response);
          
          setTimeout(()=>{
            navigate('/dashboard');
          },100)
        })
        .catch(error => {
          console.error("Error:", error);
        });
    }

    useEffect(()=>{
        AnimateConfigurator()
    },[])

    return (
      <>
        <div className="Config PagesContainer">
  
          <div className="Config-Body animate__fadeIn">

            <div className="Config-Page1">
              <img className="MagLogo animate__fadeIn" src={MagLogo}></img>
              
              <div>
                <h1 className="animate__fadeIn" >Hello {sessionStorage.getItem("FullName")}</h1>
              </div>
              <div>
                  <p className="animate__fadeIn">Welcome to Maghreb Vacc</p>
              </div>
              <div className="NextBTN">
                  <a href="#" className=" animate__fadeIn" onClick={()=>{NextPage(0)}}>Next</a>
              </div>
              
            </div>

            <div className="Config-Page2 animate__fadeIn">
              <div>
                <img src={SimbriefLogo}></img>
              </div>
              <div>
                <p>Simbrief ID:</p>
                <input type="text" placeholder="Simbrief ID" className="animate__fadeIn"></input>
              </div>
              <div className="NextBTN">
                <a href="#" className="animate__fadeIn" onClick={()=>{PrevPage(1)}}>Previous</a>
                <a href="#" 
                className="animate__fadeIn" 
                onClick={()=>{
                  Conf.SimbriefID = document.querySelector(".Config-Page2 > div > input").value
                  // alert(JSON.stringify(Conf))
                  NextPage(1)
                }}
                >Next</a>
                {/* <p className="msgRed">You can skip if you have if you choose too</p> */}
              </div>
            </div>

            <div className="Config-Page3 animate__fadeIn">
              <div>
                <img src={MagLogo}></img>
              </div>
              <div>
                <h1>Choose your accent color</h1>
                <input type="color" placeholder="Simbrief ID" className="animate__fadeIn"></input>
              </div>
              <div className="NextBTN">
                <a href="#" className=" animate__fadeIn" onClick={()=>{PrevPage(2)}}>Previous</a>
                <a href="#" className=" animate__fadeIn" onClick={()=>{
                  Conf.AccentColor = document.querySelector(".Config-Page3 > div > input").value
                  // alert(JSON.stringify(Conf))
                  NextPage(2)}}>Next</a>
              </div>
            </div>
            
            <div className="Config-Page4 animate__fadeIn">
              <div>
                <img src={MagLogo}></img>
              </div>
              <div>
                <h1>Choose your background</h1>
              </div>
              <div className="Config-Page4-BG-Container">
                <div className="Config-Page4-BG" value="1"
                  onClick={()=>{
                    Conf.BGIndex = 1
                    
                    document.querySelector(".Config-Page4-BG").style.transform = "scale(1.0)";
                    document.querySelector(".Config-Page4-BG1").style.transform = "scale(1.0)";
                    document.querySelector(".Config-Page4-BG2").style.transform = "scale(1.0)";
                    document.querySelector(".Config-Page4-BG3").style.transform = "scale(1.0)";
                    document.querySelector(".Config-Page4-BG4").style.transform = "scale(1.0)";
                    document.querySelector(".Config-Page4-BG5").style.transform = "scale(1.0)";

                    
                    document.querySelector(".Config-Page4-BG").style.border = "none";
                    document.querySelector(".Config-Page4-BG1").style.border = "none";
                    document.querySelector(".Config-Page4-BG2").style.border = "none";
                    document.querySelector(".Config-Page4-BG3").style.border = "none";
                    document.querySelector(".Config-Page4-BG4").style.border = "none";
                    document.querySelector(".Config-Page4-BG5").style.border = "none";


                    document.querySelector(".Config-Page4-BG").style.border = "2px solid yellow"
                    document.querySelector(".Config-Page4-BG").style.transform = "scale(1.2)";
                  }}
                ></div>
                <div className="Config-Page4-BG1" value="2"
                onClick={()=>{
                  Conf.BGIndex = 2
                  
                  document.querySelector(".Config-Page4-BG").style.transform = "scale(1.0)";
                  document.querySelector(".Config-Page4-BG1").style.transform = "scale(1.0)";
                  document.querySelector(".Config-Page4-BG2").style.transform = "scale(1.0)";
                  document.querySelector(".Config-Page4-BG3").style.transform = "scale(1.0)";
                  document.querySelector(".Config-Page4-BG4").style.transform = "scale(1.0)";
                  document.querySelector(".Config-Page4-BG5").style.transform = "scale(1.0)";

                    
                  document.querySelector(".Config-Page4-BG").style.border = "none";
                  document.querySelector(".Config-Page4-BG1").style.border = "none";
                  document.querySelector(".Config-Page4-BG2").style.border = "none";
                  document.querySelector(".Config-Page4-BG3").style.border = "none";
                  document.querySelector(".Config-Page4-BG4").style.border = "none";
                  document.querySelector(".Config-Page4-BG5").style.border = "none";

                  document.querySelector(".Config-Page4-BG1").style.border = "2px solid yellow"
                  document.querySelector(".Config-Page4-BG1").style.transform = "scale(1.2)";
                }}
                ></div>
                <div className="Config-Page4-BG2" value="3"
                  onClick={()=>{
                    Conf.BGIndex = 3
                    
                    document.querySelector(".Config-Page4-BG").style.transform = "scale(1.0)";
                    document.querySelector(".Config-Page4-BG1").style.transform = "scale(1.0)";
                    document.querySelector(".Config-Page4-BG2").style.transform = "scale(1.0)";
                    document.querySelector(".Config-Page4-BG3").style.transform = "scale(1.0)";
                    document.querySelector(".Config-Page4-BG4").style.transform = "scale(1.0)";
                    document.querySelector(".Config-Page4-BG5").style.transform = "scale(1.0)";

                    
                    document.querySelector(".Config-Page4-BG").style.border = "none";
                    document.querySelector(".Config-Page4-BG1").style.border = "none";
                    document.querySelector(".Config-Page4-BG2").style.border = "none";
                    document.querySelector(".Config-Page4-BG3").style.border = "none";
                    document.querySelector(".Config-Page4-BG4").style.border = "none";
                    document.querySelector(".Config-Page4-BG5").style.border = "none";

                    document.querySelector(".Config-Page4-BG2").style.border = "2px solid yellow"
                    document.querySelector(".Config-Page4-BG2").style.transform = "scale(1.2)";
                  }}
                  ></div>
                <div className="Config-Page4-BG3" value="4"
                  onClick={()=>{
                    Conf.BGIndex = 4
                    
                    document.querySelector(".Config-Page4-BG").style.transform = "scale(1.0)";
                    document.querySelector(".Config-Page4-BG1").style.transform = "scale(1.0)";
                    document.querySelector(".Config-Page4-BG2").style.transform = "scale(1.0)";
                    document.querySelector(".Config-Page4-BG3").style.transform = "scale(1.0)";
                    document.querySelector(".Config-Page4-BG4").style.transform = "scale(1.0)";
                    document.querySelector(".Config-Page4-BG5").style.transform = "scale(1.0)";

                    
                    document.querySelector(".Config-Page4-BG").style.border = "none";
                    document.querySelector(".Config-Page4-BG1").style.border = "none";
                    document.querySelector(".Config-Page4-BG2").style.border = "none";
                    document.querySelector(".Config-Page4-BG3").style.border = "none";
                    document.querySelector(".Config-Page4-BG4").style.border = "none";
                    document.querySelector(".Config-Page4-BG5").style.border = "none";

                    document.querySelector(".Config-Page4-BG3").style.border = "2px solid yellow"
                    document.querySelector(".Config-Page4-BG3").style.transform = "scale(1.2)";
                  }}
                  ></div>
                <div className="Config-Page4-BG4" value="5"
                  onClick={()=>{
                    Conf.BGIndex = 5
                    
                    document.querySelector(".Config-Page4-BG").style.transform = "scale(1.0)";
                    document.querySelector(".Config-Page4-BG1").style.transform = "scale(1.0)";
                    document.querySelector(".Config-Page4-BG2").style.transform = "scale(1.0)";
                    document.querySelector(".Config-Page4-BG3").style.transform = "scale(1.0)";
                    document.querySelector(".Config-Page4-BG4").style.transform = "scale(1.0)";
                    document.querySelector(".Config-Page4-BG5").style.transform = "scale(1.0)";

                    
                    document.querySelector(".Config-Page4-BG").style.border = "none";
                    document.querySelector(".Config-Page4-BG1").style.border = "none";
                    document.querySelector(".Config-Page4-BG2").style.border = "none";
                    document.querySelector(".Config-Page4-BG3").style.border = "none";
                    document.querySelector(".Config-Page4-BG4").style.border = "none";
                    document.querySelector(".Config-Page4-BG5").style.border = "none";

                    document.querySelector(".Config-Page4-BG4").style.border = "2px solid yellow"
                    document.querySelector(".Config-Page4-BG4").style.transform = "scale(1.2)";
                  }}
                  ></div>
                <div className="Config-Page4-BG5" value="6"
                  onClick={()=>{
                    Conf.BGIndex = 6
                    
                    document.querySelector(".Config-Page4-BG").style.transform = "scale(1.0)";
                    document.querySelector(".Config-Page4-BG1").style.transform = "scale(1.0)";
                    document.querySelector(".Config-Page4-BG2").style.transform = "scale(1.0)";
                    document.querySelector(".Config-Page4-BG3").style.transform = "scale(1.0)";
                    document.querySelector(".Config-Page4-BG4").style.transform = "scale(1.0)";
                    document.querySelector(".Config-Page4-BG5").style.transform = "scale(1.0)";

                    
                    document.querySelector(".Config-Page4-BG").style.border = "none";
                    document.querySelector(".Config-Page4-BG1").style.border = "none";
                    document.querySelector(".Config-Page4-BG2").style.border = "none";
                    document.querySelector(".Config-Page4-BG3").style.border = "none";
                    document.querySelector(".Config-Page4-BG4").style.border = "none";
                    document.querySelector(".Config-Page4-BG5").style.border = "none";

                    document.querySelector(".Config-Page4-BG5").style.border = "2px solid yellow"
                    document.querySelector(".Config-Page4-BG5").style.transform = "scale(1.2)";
                  }}
                  ></div>
              </div>
              <div className="NextBTN">
                <a href="#" className=" animate__fadeIn" onClick={()=>{PrevPage(3)}}>Previous</a>
                <a href="#" className=" animate__fadeIn" onClick={()=>{
                  NextPage(3)
                  
                  // Conf.AccentColor = document.querySelector(".Config-Page3 > div > input").value
                  
                  
                  }}>Next</a>
              </div>
            </div>
            
            <div className="Config-Page5 animate__fadeIn">
              <div>
                <img src={MagLogo}></img>
              </div>
              <div>
                <h1>This is the last step</h1>
              </div>
              <div className="NextBTN">
                <a href="#" className=" animate__fadeIn" onClick={()=>{PrevPage(4)}}>Previous</a>
                <a href="#" className=" animate__fadeIn" onClick={()=>{InsertConfigToDB()}}>Finish</a>
              </div>
            </div>

          </div>
        </div>
      </>
    )
  


  
}

export default Configurator;
