// import ShowTraineeCard from "./ShowTraineeCard"

import { useState, useEffect } from "react";

import { set } from "date-fns";
import SideBar from "../../../../Component/SideBar"
import UpperBar from "../../../../Component/UpperBar"
import ShowMemberCard from "./ShowMemberCard";
import { useSearchParams } from 'react-router-dom'

import params from "../../../../../JsonData/TrainingPrams"

// Toatstify ( for notification )
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function ShowMember(){

    const notify = (e) => toast( e , {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });

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
            
            console.log(filteredData[0])
            
            if (filteredData[0].rating == 0)
                document.querySelector(".TrainingBannedDiv").style.display = "block"

        })
    },[])
    function RatingConversionFromNumbertoString(ratingNum){
        const ratingMap = {
            '-1': 'INA',
            1: 'OBS',
            2: 'S1',
            3: 'S2',
            4: 'S3',
            5: 'C1',
            6: 'C2',
            7: 'C3',
            8: 'I1',
            9: 'I2',
            10: 'I3',
            11: 'SUP',
            12: 'ADM',
          };
        return ratingMap[ratingNum]
    }

    function RatingConversionFromNumbertoPosition(ratingNum){
        const Position = ["GND" , "TWR" , "APP" , "Center"]
        // alert(Position[ratingNum])
        return Position[ratingNum]
    }

    function AddMemberToTraining(){

        const requiredTime = params.RequiredATCTime;
        const TraineeConstructor = {
            //! Caution here if some value needs to be rethinked like Rating Start and 
            //! Solo Rating if u for example try to update or modify it van modify the 
            //! initial values
            "cid" : MemberData.id,
            "Name" : MemberData.name_first + " "+ MemberData.name_last,
            "Rating" : RatingConversionFromNumbertoString(MemberData.rating + 1),
            "Facility" : "GMMN",
            "Position" : RatingConversionFromNumbertoPosition(MemberData.rating),
            "Mentor" : "",
            "Status" : "Theory",
            "Comment" : "From Membership",
          }


          fetch(`http://127.0.0.1:1000/GetTrainee/${TraineeConstructor.cid}`)
          .then(res => res.json())
          .then(res => {
              try {
                if (res[0].cid == TraineeConstructor.cid){
                    notify(`Trainee ${TraineeConstructor.Name} Already Exists`)
                }

                else{
                    fetch("http://127.0.0.1:1000/SetTrainee",{
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(TraineeConstructor) 
                    })
                    .then(notify(`Trainee ${TraineeConstructor.Name} Added`))
                    
                    // alert(JSON.stringify(TraineeConstructor))
                    // console.log(JSON.stringify(TraineeConstructor))
                }
              } catch (error) {
                    // alert(`CID FROM DB: ${res.cid}`)
                    // alert(TraineeConstructor.cid)

                    
                    if (res.cid == TraineeConstructor.cid){
                        notify(`Trainee ${TraineeConstructor.Name} Already Exists`)
                    }

                    else{
                        fetch("http://127.0.0.1:1000/SetTrainee",{
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(TraineeConstructor) 
                        })
                        .then(notify(`Trainee ${TraineeConstructor.Name} Added`))
                        // console.log(JSON.stringify(TraineeConstructor))
                    }
              }
  
          })
          

    }




    return(
        <>
        <SideBar />
        <div className="Training PagesContainer">
            <UpperBar Username={sessionStorage.getItem("FullName")} />
            <div className="TrainingBannedDiv animate__fadeIn">
                <h1>This user is banned</h1>
            </div>
            <div className="TrainingDiv animate__fadeIn">

                <ShowMemberCard
                    Rating = {RatingConversionFromNumbertoString(MemberData.rating)}
                    Email = {MemberData.email}
                    Location = {MemberData.countystate + " ( " + MemberData.country + " ) " }
                    Pilotrating = {MemberData.pilotrating}
                    Subdivision_ID = {MemberData.subdivision_id}
                    CID = {MemberData.id}
                    Name = {MemberData.name_first + " " + MemberData.name_last}
                />

            </div>

            <div className="TrainingDiv animate__fadeIn">
                <div className="TrainingDivSecond">
                    <line>
                        <div><p>Registration Date : </p></div>
                        <div><p>{MemberData.reg_date}</p></div>
                        {/* .split("T")[0].replaceAll("-", "/") + " " + MemberData.reg_date.split("T")[1].split(":")[0]+":"+MemberData.reg_date.split("T")[1].split(":")[1] */}
                    </line>
                    <line>
                        <div><p>Recent Rating Change : </p></div>
                        <div><p>{MemberData.lastratingchange}</p></div>
                        {/* .split("T")[0].replaceAll("-", "/") + " " + MemberData.lastratingchange.split("T")[1].split(":")[0]+":"+MemberData.lastratingchange.split("T")[1].split(":")[1] */}
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
        
      <ToastContainer />
        </>
    )
    


    }


export default ShowMember