import { useState, useEffect } from "react";
import "./index.css"
import SimbriefLogo from "../../../../Ressources/simbriefLogo.png"

function SettingsPersonal(props) {

    let apiurl = props.APILink;
    const [simbriefAlias, setSimbriefAlias] = useState('');
    const [CheckifSettingExist ,setCheckifSettingExist] = useState('');
    
    useEffect(() => {
        if(sessionStorage.getItem('UserSimbriefData') == "New"){
          console.log("new")
        }
        else{
          const userSimbriefData = JSON.parse(sessionStorage.getItem('UserSimbriefData'));
          if (userSimbriefData && userSimbriefData.length > 0) {
            console.log(userSimbriefData[0].SimbriefAlias)
            setSimbriefAlias(userSimbriefData[0].SimbriefAlias);
          }
        }
        
      }, []);
    

    const handleSimbriefAliasChange = (e) => {
        setSimbriefAlias(e.target.value);
        
        if(sessionStorage.getItem('UserSimbriefData') == "New"){

        }
        else{

        // Update the sessionStorage with the new value
        const userSimbriefData = JSON.parse(sessionStorage.getItem('UserSimbriefData'));
        userSimbriefData[0].SimbriefAlias = e.target.value;
        sessionStorage.setItem('UserSimbriefData', JSON.stringify(userSimbriefData));
        
      }
      };


      function SubmitTheUpdate(props) {
        fetch(`${apiurl}GetSetting/${sessionStorage.getItem('CID')}`)
          .then(res => res.json())
          .then(res => (res.length > 0) ? setCheckifSettingExist(true) : setCheckifSettingExist(false));
        
        if (CheckifSettingExist) {
          const url = `${apiurl}UpdateSettings`;
          const data = {
            CID: sessionStorage.getItem('CID'),
            SimbriefAlias: simbriefAlias
          };
      
          fetch(url, {
            method: "PUT",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
          })
          .then(response => {
            if (response.ok) {
              console.log("Data updated successfully!");
            } else {
              console.error("Error updating data:", response.status);
            }
          })
          .catch(error => {
            console.error("Error:", error);
          });
        } else {

          const url = `${apiurl}SetSettings`;
          const data = {
            CID: sessionStorage.getItem('CID'),
            SimbriefAlias: simbriefAlias
          };
      
          fetch(url, {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
          })
          .then(response => {
            if (response.ok) {
              console.log("Data Inserted successfully!");
            } else {
              console.error("Error updating data:", response.status);
            }
          })
          .catch(error => {
            console.error("Error:", error);
          });
        }
      }


    if(sessionStorage.getItem("UserSimbriefData") == "New"){
      return(
        <div className="SettingsPersonal">
            <h1>Personal</h1>

            <section  className="SettingsPersonalContainers animate__fadeInRight">
                <div className="SettingsPersonalContainersTitle">
                    {/* <h1>Simbrief Id : <a target="_blank" href="https://dispatch.simbrief.com/account">here</a></h1> */}
                    <img src={SimbriefLogo}></img>
                </div>
                
                
                <div className="SettingsPersonalContainersContent">
                    <div>
                        <p> Sync your Simbrief data With MAGX : ( Requires Reloading )</p>
                        <input
                        type="text"
                        placeholder={"Enter Simbrief Alias"}
                        value = {simbriefAlias}
                        onChange={handleSimbriefAliasChange}
                        ></input>
                    </div>
                    
                </div>
                
                <button
                    onClick={SubmitTheUpdate}
                >Update</button>
            </section>

            {/* <section  className="SettingsPersonalContainers animate__fadeInRight">
                <h1>Blur : </h1>
                <p>If you encounter any stutering you can disable the blur from here</p>
                <div className="centered">
                    <i>Off</i>
                    <label class="switch">
                        <input type="checkbox"></input>
                        <span class="slider"></span>
                    </label>
                    <i>On</i>
                </div>
            </section> */}
            
            {/* <section  className="SettingsPersonalContainers animate__fadeInRight">
                <h1>Accent Color : </h1>
                <p>Choose your accent color </p>
                <input type="color"></input>
            </section> */}
        </div>
      )
    }
    else{
      return(
        <div className="SettingsPersonal">
            <h1>Personal</h1>

            <section  className="SettingsPersonalContainers animate__fadeInRight">
                <div className="SettingsPersonalContainersTitle">
                    {/* <h1>Simbrief Id : <a target="_blank" href="https://dispatch.simbrief.com/account">here</a></h1> */}
                    <img src={SimbriefLogo}></img>
                </div>
                
                
                <div className="SettingsPersonalContainersContent">
                    <div>
                        <p> Sync your Simbrief data With MAGX : ( Requires Reloading )</p>
                        <input
                        type="text"
                        placeholder={JSON.parse(sessionStorage.getItem("UserSimbriefData"))[0].SimbriefAlias}
                        value = {simbriefAlias}
                        onChange={handleSimbriefAliasChange}
                        ></input>
                    </div>
                    
                </div>
                
                <button
                    onClick={SubmitTheUpdate}
                >Update</button>
            </section>

            {/* <section  className="SettingsPersonalContainers animate__fadeInRight">
                <h1>Blur : </h1>
                <p>If you encounter any stutering you can disable the blur from here</p>
                <div className="centered">
                    <i>Off</i>
                    <label class="switch">
                        <input type="checkbox"></input>
                        <span class="slider"></span>
                    </label>
                    <i>On</i>
                </div>
            </section> */}
            
            {/* <section  className="SettingsPersonalContainers animate__fadeInRight">
                <h1>Accent Color : </h1>
                <p>Choose your accent color </p>
                <input type="color"></input>
            </section> */}
        </div>
      )
    }
      
}

export default SettingsPersonal;