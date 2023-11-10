// import ShowTraineeCard from "./ShowTraineeCard"

import { useState, useEffect } from "react";

import { set } from "date-fns";
import SideBar from "../../../../Component/SideBar"
import UpperBar from "../../../../Component/UpperBar"
import ShowMemberCard from "./ShowMemberCard";
import { useSearchParams } from 'react-router-dom'

import params from "../../../../../JsonData/TrainingPrams"



function ShowMember(){

    const [MemberData, setMemberData] = useState([])

    const [urlParams] = useSearchParams();

    const id = urlParams.get('id');

    const [ATCRemainingHoursCalcProp , setATCRemainingHoursCalcProp] = useState("")

    useEffect(()=>{
        fetch("http://127.0.0.1:1000/members")
        .then(res => res.json())
        .then(res => {
            console.log(id)
            const filteredData = res.filter(member => {
                return member.id === parseInt(id)
            })
            // setMemberData(filteredData)
            setMemberData(filteredData[0])

        })
    },[])
    function RatingConversionFromNumbertoString(ratingNum){
        const Rating = ["OBS" , "S1" , "S2" , "S3" , "C1" , "C3" , "" , "I1" , "I3"]
        return Rating[ratingNum-1]
    }

    function RatingConversionFromNumbertoPosition(ratingNum){
        const Position = ["GND" , "TWR" , "APP" , "Center"]
        alert(Position[ratingNum])
        return Position[ratingNum]
    }

    function AddMemberToTraining(){

        const requiredTime = params.RequiredATCTime;
        const TraineeConstructor = {
            //! Caution here if some value needs to be rethinked like Rating Start and 
            //! Solo Rating if u for example try to update or modify it van modify the 
            //! initial values
            "cid" : MemberData.id,
            "Name" : MemberData.name_first + MemberData.name_last,
            "Rating" : RatingConversionFromNumbertoString(MemberData.rating),
            "Facility" : "GMMN",
            "Position" : RatingConversionFromNumbertoPosition(MemberData.rating),
            "Mentor" : "",
            "Status" : "",
            "RemainingATCHours" :"Testing",
            "RatingStart" :  "Testing",
            "SoloStart":"Testing", 
            "Comment" : "Testing",
          }

        //   fetch(`http://127.0.0.1:1000/GetTrainee/${TraineeConstructor.cid}`)
        //   .then(res => res.json())
        //   .then(res => alert(JSON.stringify(res)))

          fetch(`http://127.0.0.1:1000/GetTrainee/${TraineeConstructor.cid}`)
          .then(res => res.json())
          .then(res => {
              try {
                if (res[0].cid == TraineeConstructor.cid){
                    alert("user exists")
                }

                else{
                    fetch("http://127.0.0.1:1000/SetTrainee",{
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(TraineeConstructor) 
                    })
                    // alert(JSON.stringify(TraineeConstructor))
                    console.log(JSON.stringify(TraineeConstructor))
                }
              } catch (error) {
                    alert(`CID FROM DB: ${res.cid}`)
                    alert(TraineeConstructor.cid)

                    alert("My Test")
                    if (res.cid == TraineeConstructor.cid){
                        alert("user exists")
                    }

                    else{
                        fetch("http://127.0.0.1:1000/SetTrainee",{
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(TraineeConstructor) 
                        })
                        alert(JSON.stringify(TraineeConstructor))
                        console.log(JSON.stringify(TraineeConstructor))
                    }
              }
  
          })

    }

    return(
        <>
        <SideBar />
        <div className="Training PagesContainer">
            <UpperBar Username={sessionStorage.getItem("FullName")} />

            <div className="TrainingDiv animate__fadeIn">

                <ShowMemberCard
                    Rating = {RatingConversionFromNumbertoString(MemberData.rating)}
                    Email = {MemberData.email}
                    Location = {MemberData.countystate + " ( " + MemberData.country + " ) " }
                    Registration_Date = {MemberData.reg_date}
                    Subdivision_ID = {MemberData.subdivision_id}
                    CID = {MemberData.id}
                    Name = {MemberData.name_first + MemberData.name_last}
                />

            </div>

            <div className="TrainingDiv animate__fadeIn">
                <div className="TrainingDivSecond">
                    <line>
                        <div><p>Remaining ATC Hours : </p></div>
                        <div><p>{MemberData.reg_date}</p></div>
                    </line>
                    <line>
                        <div><p>Recent Rating Change : </p></div>
                        <div><p>{MemberData.lastratingchange}</p></div>
                    </line>
                    <line>
                        <div><p>Suspention State : </p></div>
                        <div><p> {(MemberData.susp_date == null) ? "Null" : "MemberData.susp_date"}</p></div>
                    </line>
                </div>
                <div className="TrainingDivSecondLink">
                    <div><a href="#" onClick={AddMemberToTraining}>Add Training</a></div>
                    {/* <div><a href="">Book Session</a></div> */}
                </div>
            </div>
 
        </div>
        </>
    )
    


    }


export default ShowMember