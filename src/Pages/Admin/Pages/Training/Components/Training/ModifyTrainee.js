import { useEffect, useState } from "react"
import { format } from 'date-fns';
import params from "../../../../../../JsonData/TrainingPrams"
import SideBar from "../../../../../Component/SideBar";
import UpperBar from "../../../../../Component/UpperBar";
import { useNavigate } from 'react-router-dom';
import LoadingSpinner from "../../../../../Component/LoadingSpinner";

function ModifyTrainee(){
    
    // const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const [TrainneModify , setTrainneModify] = useState()
    const urlParams = new URLSearchParams(window.location.search);
    const cid = urlParams.get('cid');
    // alert(id)

    const url = `http://127.0.0.1:1000/GetTraineecid/${cid}`
    
    useEffect(()=>{
        fetch(url)
        .then(res => res.json())
        .then(res => {
            setTrainneModify(res)
            
            console.log(res)
        })
        .then(() => setLoading(false));

    },[])

    function AlterTrainee(id){
        const TraineeConstructor = {
                    //! Caution here if some value needs to be rethinked like Rating Start and 
                    //! Solo Rating if u for example try to update or modify it van modify the 
                    //! initial values
                    "cid" : document.getElementById("AddTraineeCID").value,
                    "Name" : document.getElementById("AddTraineeName").value,
                    "Rating" : document.getElementById("AddTraineeRating").value,
                    "Facility" : document.getElementById("AddTraineeFacility").value,
                    "Position" : document.getElementById("AddTraineePosition").value,
                    "Mentor" : document.getElementById("AddTraineeMentor").value,
                    "Status" : document.getElementById("AddTraineeStatus").value,
                    "Comment" : document.getElementById("AddTraineeComments").value,
                  }
            
        fetch(`/AlterTrainee/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'  
            },
            body: JSON.stringify(TraineeConstructor)
            })
        .catch(err => console.log(err))
    }
    
    if(loading) return <LoadingSpinner/>

    return(
        <>
        <SideBar></SideBar>
        <div className="addTrainee animate__fadeIn" id="AddTrainee">
        <UpperBar></UpperBar>
        {/* {JSON.stringify(TrainneModify)} */}
            <div className="addTraineeTitle"><h1>{`${TrainneModify.Name} ( ${TrainneModify.cid} )`}</h1></div>
            <section>
                
                <div>
                    <div><p>Rating : </p></div>
                    
                    <select id="AddTraineeRating" value={TrainneModify.Rating}>
                        <option selected>None</option>
                        <option>S1</option>
                        <option>S2</option>
                        <option>S3</option>
                        <option>C1</option>
                    </select>
                </div>

                <div>
                    <div><p>Facility : </p></div>
                    
                    <input id="AddTraineeFacility" type="text" placeholder="Facility" value={TrainneModify.Facility}></input>
                </div>

                <div>
                    <div><p>Position : </p></div>
                    
                    <input id="AddTraineePosition" type="text" placeholder="Position" value={TrainneModify.Position}></input>
                </div>
                
                <div>
                    <div><p>Mentor : </p></div>
                    
                    <input id="AddTraineeMentor" type="text" placeholder="Mentor" value={TrainneModify.Mentor}></input>
                </div>
                
                
                <div>
                    <div><p>Status  : </p></div>
                    
                    <select id="AddTraineeSolo" value={TrainneModify.Status}>
                        <option selected>Theory</option>
                        <option>SweatBox</option>
                        <option>Online Sessions</option>
                        <option>SweatBox</option>
                    </select>
                </div>

                <div>
                    <div><p>Comment : </p></div>
                    
                    <input id="AddTraineeComments" type="Comments" placeholder="Comment" value={TrainneModify.comment}></input>
                </div>
                
                    <section>
                        <button onClick={()=>{AlterTrainee(cid)}} >Modify</button>
                    </section>

            </section> 
        
        </div>
    </>
    )

}

export default ModifyTrainee


    // // Get Training Params
    // const requiredTime = params.RequiredATCTime;
    // const RequiredATCDays = params.RequiredATCDays;
    // const RequiredSOLODays = params.RequiredSOLODays;

    // // Get Todays Date
    // const todayDate = format(new Date(), 'yyyy-MM-dd');


    // const [ATCRemainingHoursCalcProp , setATCRemainingHoursCalcProp] = useState("") 
    // function addTrainee(){




    //     fetch("http://127.0.0.1:1000/GetTraineeATC/1674212")
    //         .then(res => res.json())
    //         .then(res => setATCRemainingHoursCalcProp(res.s1))

        
    //     const TraineeConstructor = {
    //         //! Caution here if some value needs to be rethinked like Rating Start and 
    //         //! Solo Rating if u for example try to update or modify it van modify the 
    //         //! initial values
    //         "cid" : document.getElementById("AddTraineeCID").value,
    //         "Name" : document.getElementById("AddTraineeName").value,
    //         "Rating" : document.getElementById("AddTraineeRating").value,
    //         "Facility" : document.getElementById("AddTraineeFacility").value,
    //         "Position" : document.getElementById("AddTraineePosition").value,
    //         "Mentor" : document.getElementById("AddTraineeMentor").value,
    //         "Status" : document.getElementById("AddTraineeStatus").value,
    //         "RemainingATCHours" : requiredTime - ATCRemainingHoursCalcProp > 0 ? JSON.stringify(requiredTime - ATCRemainingHoursCalcProp) : "Eligible",
    //         "RatingStart" :  document.getElementById("AddTraineeSolo").value == "No" ? todayDate : "NULL",
    //         "SoloStart": document.getElementById("AddTraineeSolo").value == "Yes" ? todayDate : "NULL", 
    //         "Comment" : document.getElementById("AddTraineeComments").value,
    //       }
        
    //     fetch(`http://127.0.0.1:1000/GetTrainee/${TraineeConstructor.cid}`)
    //     .then(res => res.json())
    //     .then(res => {
    //         console.log(res.cid)
    //         alert(res.cid)
    //         alert(TraineeConstructor.cid)
    //         if (res.cid == TraineeConstructor.cid){
    //             alert("user exists")
    //         }
    //         else{
    //             fetch("http://127.0.0.1:1000/SetTrainee",{
    //             method: 'POST',
    //             headers: {
    //                 'Content-Type': 'application/json'
    //             },
    //             body: JSON.stringify(TraineeConstructor) 
    //             })
    //             .then(navigate("/StaffTraining"))
    //             alert(JSON.stringify(TraineeConstructor))
    //             console.log(JSON.stringify(TraineeConstructor))
    //         }

    //     })
          
    // }

    // const id = new URL(window.location).searchParams.get("id");

    
    
