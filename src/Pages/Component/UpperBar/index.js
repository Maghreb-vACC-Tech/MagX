import "./index.css"

import pdp from "../../../Ressources/pdp.jpg"

function UpperBar(props){
    return(
        <div className="UpperBar">
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