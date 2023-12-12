import { useState, useEffect } from "react";
import "./index.css"

function SettingsPersonal() {


    return(
        <div className="SettingsPersonal">
            <h1>Personal : </h1>
            <section  className="SettingsPersonalContainers animate__fadeInRight">
                <h1>Simbrief Id : </h1>
                <p>Paste your Simbrief ID to sync your data With MAGX</p>
                <input type="text" placeholder="ID"></input>
            </section>
            <section  className="SettingsPersonalContainers animate__fadeInRight">
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
            
            <section  className="SettingsPersonalContainers animate__fadeInRight">
                <h1>Accent Color : </h1>
                <p>Choose your accent color </p>
                <input type="color"></input>
            </section>
        </div>
    )
}

export default SettingsPersonal;