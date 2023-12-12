import { useState, useEffect } from "react";
import "./index.css"

function SettingsAppearance() {


    return(
        <div className="SettingsAppearance ">
            <h1>Appearance : </h1>
            <section  className="SettingsAppearanceContainers animate__fadeInRight">
                <h1>Background : </h1>
                <p>Paste the URL of your favourite Background Picutre and save it</p>
                <input type="text" placeholder="URL"></input>
            </section>
            <section onClick={()=>{
                alert("hello")
                document.querySelectorAll(".SettingsAppearanceContainers").style.backdropFilter = "blur(0px)"
            }} className="SettingsAppearanceContainers animate__fadeInRight">
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
            </section>
            
            <section className="SettingsAppearanceContainers animate__fadeInRight">
                <h1>Accent Color : </h1>
                <p>Choose your accent color </p>
                <input type="color"></input>
            </section>
            {/* <section  className="SettingsAppearanceContainers">
                <input type="submit" value="Apply"></input>
            </section> */}
        </div>
    )
}

export default SettingsAppearance;