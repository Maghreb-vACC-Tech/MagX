// import ShowTraineeCard from "./ShowTraineeCard"
import { set } from "date-fns";
import SideBar from "../../../../Component/SideBar"
import UpperBar from "../../../../Component/UpperBar"
import ShowMemberCard from "./ShowMemberCard";
import { useSearchParams } from 'react-router-dom'
// import params from "../../../../../../JsonData/TrainingPrams"

import { useState, useEffect } from "react";

function ShowMember(){

    const [MemberData, setMemberData] = useState([])

    const [urlParams] = useSearchParams();

    const id = urlParams.get('id');

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
                    <div><a href="">Add Training</a></div>
                    {/* <div><a href="">Book Session</a></div> */}
                </div>
            </div>
 
        </div>
        </>
    )
    


    }


export default ShowMember