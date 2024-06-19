import "./index.css"

import ZuluTimeComponent from "./Components/ZuluClock"
import MenuIconComponent from "./Components/Menu"

import pdp from "../../../Ressources/pdp.jpg"

function UpperBar(props){
    const Logout = (process.env.REACT_APP_APP_ENV == "PROD") ? "http://api.vatsim.ma:3001" : "http://localhost:3001"
    return(
        <div className="UpperBar">
            <div className="UpperBarMenu">
            </div>
            <div className="UpperBarZuluTime">
                <ZuluTimeComponent/>
            </div>
            <div className="UpperBarSettings">
                {/* <div className="UpperBarSettingsText">
                    <a href="">{props.Username}</a>
                </div> */}
                
                <div className="UpperBarSettingsTextChoice">
                    <a href="#"><i class="fa-solid fa-bell"></i></a>
                    <a href="/Settings"><i class="fa-solid fa-gear"></i></a>
                    <a href="https://stats.vatsim.net/dashboard"><i class="fa-solid fa-user"></i></a>
                    <a href={Logout}><i class="fa-solid fa-door-open"></i></a>
                </div>
            </div>
        </div>
    )
}

export default UpperBar