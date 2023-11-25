import SideBar from "../../../../../Component/SideBar"
import UpperBar from "../../../../../Component/UpperBar"
import ShowTraineeCard from "./ShowTraineeCard"


import params from "../../../../../../JsonData/TrainingPrams"

import { useState, useEffect } from "react";

function ShowTrainee(){
    const [Data , setData ] = useState("")
    const [ATCDate , setATCDate ] = useState("")
    const [RemainingATCHours , setRemainingATCHours] = useState("")
    const ID = new URL(window.location).searchParams.get("id");
    const url = `http://127.0.0.1:1000/GetTraineeid/${ID}`


    function RemainingATCHoursCalculation(){
        fetch(`http://127.0.0.1:1000/GetTraineeid/ATC`)
    }

    async function getATCDays(CID){
        fetch(`http://127.0.0.1:1000/GetTraineeStats/${CID}`)
        .then( data => data.json())
        .then( data => {
            

            const lastDate = new Date(data.lastratingchange);
            const now = new Date();

            const diffTime = Math.abs(now - lastDate);  
            const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

            // console.log(diffDays);
            // alert(`ATC :${params.RequiredATCDays} DIFF : ${diffDays}`)
            if(diffDays > params.RequiredATCDays){
                setATCDate("Elligible");
            }
            else{ 
                setATCDate( params.RequiredATCDays - diffDays );
            }

        })
        // .catch( err => alert(err))
    }

    useEffect(()=>{

            fetch(url)
            .then(res => res.json())
            .then(res => {
                setData(res)
                // alert(JSON.stringify(res))
            })
            .catch(err => console.log(err))
            
            
            
            // 
    },[]) 
    getATCDays(Data.cid)

    return(
        <>
        <SideBar />
        <div className="Training PagesContainer">
            {/* {JSON.stringify(Data)} */}
            <UpperBar Username={sessionStorage.getItem("FullName")} />

            <div className="TrainingDiv animate__fadeIn">
            <ShowTraineeCard
                Rating = {Data.Rating}
                Facility = {Data.Facility}
                Position = {Data.Position}
                Mentor = {Data.Mentor}
                Status = {Data.Status}
                CID = {Data.cid}
                Name = {Data.Name}
            
            />
            </div>

            <div className="TrainingDiv animate__fadeIn">
                <div className="TrainingDivSecond">
                    <line>
                    <div><p>Remaining ATC Hours : </p></div>
                    <div><p>{Data.RemainingATCHours - params.RequiredATCTime} Hours</p></div>
                    </line>
                    <line>
                    <div><p>Remaining Days : </p></div>
                    <div><p>{ATCDate} Days</p></div>
                    </line>
                    <line>
                    <div><p>Solo Remaining Days : </p></div>
                    <div><p>N/A</p></div>
                    </line>
                </div>
                <div className="TrainingDivSecondLink">
                    {/* <div><a href="">Book Session</a></div> */}
                </div>
            </div>

        </div>
        </>
    )
}

export default ShowTrainee