import SideBar from "../Component/SideBar"
import UpperBar from "../Component/UpperBar"
import "./index.css"
import SettingsPersonal from "./Pages/Personal"
import SettingsAppearance from "./Pages/Appearance"
import { useEffect } from "react"

function Settings(){

    function SettingsNavigatorPersonal(){
        document.querySelector(".SettingsAppearance").style.display = "none"
        document.querySelector(".SettingsPersonal").style.display = "block"

    }
    function SettingsNavigatorAppearance(){
        document.querySelector(".SettingsAppearance").style.display = "block"
        document.querySelector(".SettingsPersonal").style.display = "none"
    }
    useEffect(()=>{
        SettingsNavigatorPersonal()
    },[])
    return(
        <>
            <SideBar />
            <div className="Settings PagesContainer">
            <UpperBar Username={sessionStorage.getItem("FullName")} />
                <section className="SettingsParent">
                    <div className="SettingsNavigator animate__fadeIn">
                        <div onClick={SettingsNavigatorPersonal}> <i class="fa-regular fa-user"></i> <p>Personal</p></div>
                        {/* <div onClick={SettingsNavigatorAppearance}> <i class="fa-solid fa-pen"></i> <p>Apprearance</p></div> */}
                    
                    </div>
                    <div className="SettingsContainer">
                        <SettingsPersonal/>
                        <SettingsAppearance/>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Settings