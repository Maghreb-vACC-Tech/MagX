import "./index.css"

import ZuluTimeComponent from "./Components/ZuluClock"
import MenuIconComponent from "./Components/Menu"

import pdp from "../../../Ressources/pdp.jpg"

function UpperBar(props){
    return(
        <div className="UpperBar">
            <div className="UpperBarMenu">
                <MenuIconComponent/>
            </div>
            <div className="UpperBarZuluTime">
                <ZuluTimeComponent/>
            </div>
            <div className="UpperBarSettings">
                <div className="UpperBarSettingsIcon">
                    <img src={pdp}></img>
                </div>
                <div className="UpperBarSettingsText">
                    <p>{props.Username}</p>
                    <a href="#">Settings</a>
                </div>
            </div>
        </div>
    )
}

export default UpperBar