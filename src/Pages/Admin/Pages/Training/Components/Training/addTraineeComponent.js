import { useEffect, useState } from "react"
import { format } from 'date-fns';
import params from "../../../../../../JsonData/TrainingPrams"
import SideBar from "../../../../../Component/SideBar";
import UpperBar from "../../../../../Component/UpperBar";
import { useNavigate } from 'react-router-dom';

function AddTraineeComponent(){
    
    const navigate = useNavigate();
    const [TrainneModify , setTrainneModify] = useState()
    // Get Training Params
    const requiredTime = params.RequiredATCTime;
    const RequiredATCDays = params.RequiredATCDays;
    const RequiredSOLODays = params.RequiredSOLODays;

    // Get Todays Date
    const todayDate = format(new Date(), 'yyyy-MM-dd');


    const [ATCRemainingHoursCalcProp , setATCRemainingHoursCalcProp] = useState("") 
    function addTrainee(){




        fetch("http://127.0.0.1:1000/GetTraineeATC/1674212")
            .then(res => res.json())
            .then(res => setATCRemainingHoursCalcProp(res.s1))

        
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
            "RemainingATCHours" : requiredTime - ATCRemainingHoursCalcProp > 0 ? JSON.stringify(requiredTime - ATCRemainingHoursCalcProp) : "Eligible",
            "RatingStart" :  document.getElementById("AddTraineeSolo").value == "No" ? todayDate : "NULL",
            "SoloStart": document.getElementById("AddTraineeSolo").value == "Yes" ? todayDate : "NULL", 
            "Comment" : document.getElementById("AddTraineeComments").value,
          }
        
        fetch(`http://127.0.0.1:1000/GetTrainee/${TraineeConstructor.cid}`)
        .then(res => res.json())
        .then(res => {
            console.log(res[0].cid)
            alert(res[0].cid)
            alert(TraineeConstructor.cid)
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
                .then(navigate("/StaffTraining"))
                alert(JSON.stringify(TraineeConstructor))
                console.log(JSON.stringify(TraineeConstructor))
            }

        })
          
    }

    const id = new URL(window.location).searchParams.get("id");

    
    if (id){
        const url = `http://127.0.0.1:1000/GetTraineeid/${id}`
        useEffect(()=>{
            try {
                fetch(url)
                .then(res => res.json())
                .then(res => setTrainneModify(res[0]))
                
            } catch (error) {
                console.log(error)
            }

            console.log(TrainneModify)
        },[])
        
        
        return(
            <>
            <SideBar></SideBar>
            <div className="addTrainee animate__fadeIn" id="AddTrainee">
            <UpperBar></UpperBar>
            {/* {JSON.stringify(TrainneModify)} */}
                <div className="addTraineeTitle"><h1>Add Trainee</h1></div>
                <section>
                    <div>
                        <div><p>CID : </p></div>
                        <input id="AddTraineeCID" type="text" placeholder="CID" value={TrainneModify?.cid}></input>
                    </div>
                    
                    <div>
                        <div><p>Name : </p></div>
                        
                        <input id="AddTraineeName" type="text" placeholder="Name" value={TrainneModify?.Name}></input>
                    </div>
                    
                    <div>
                        <div><p>Rating : </p></div>
                        
                        <select id="AddTraineeRating" value={TrainneModify?.Rating}>
                            <option selected>None</option>
                            <option>S1</option>
                            <option>S2</option>
                            <option>S3</option>
                            <option>C1</option>
                        </select>
                    </div>
    
                    <div>
                        <div><p>Facility : </p></div>
                        
                        <input id="AddTraineeFacility" type="text" placeholder="Facility" value={TrainneModify?.Facility}></input>
                    </div>
    
                    <div>
                        <div><p>Position : </p></div>
                        
                        <input id="AddTraineePosition" type="text" placeholder="Position" value={TrainneModify?.Position}></input>
                    </div>
                    
                    <div>
                        <div><p>Mentor : </p></div>
                        
                        <input id="AddTraineeMentor" type="text" placeholder="Mentor" value={TrainneModify?.Mentor}></input>
                    </div>
                    
                    <div>
                        <div><p>Status : </p></div>
                        
                        <input id="AddTraineeStatus" type="text" placeholder="Status" value={TrainneModify?.Status}></input>
                    </div>
                    
                    <div>
                        <div><p>Solo  : </p></div>
                        
                        <select id="AddTraineeSolo">
                            <option selected>No</option>
                            <option>Yes</option>
                        </select>
                    </div>
    
                    <div>
                        <div><p>Comments : </p></div>
                        
                        <input id="AddTraineeComments" type="Comments" placeholder="Status" value={TrainneModify?.comment}></input>
                    </div>
                    
                        <section>
                            <button onClick={addTrainee} >Add Trainee</button>
                        </section>

                </section> 
            
            </div>
        </>
        )
    }
    else{
        return(
            <>
            <SideBar></SideBar>
            <div className="addTrainee animate__fadeIn" id="AddTrainee">
            <UpperBar></UpperBar>
                <div className="addTraineeTitle"><h1>Add Trainee</h1></div>
                <section>
                    <div>
                        <div><p>CID : </p></div>
                        <input id="AddTraineeCID" type="text" placeholder="CID"></input>
                    </div>
                    
                    <div>
                        <div><p>Name : </p></div>
                        
                        <input id="AddTraineeName" type="text" placeholder="Name"></input>
                    </div>
                    
                    <div>
                        <div><p>Rating : </p></div>
                        
                        <select id="AddTraineeRating">
                            <option selected>None</option>
                            <option>S1</option>
                            <option>S2</option>
                            <option>S3</option>
                            <option>C1</option>
                        </select>
                        {/* <input id="AddTraineeRating" type="text" placeholder="Rating" value={TrainneModify[0].Rating}></input> */}
                    </div>
    
    
                    <div>
                        <div><p>Facility : </p></div>
                        
                        <input id="AddTraineeFacility" type="text" placeholder="Position"></input>
                    </div>
    
                    <div>
                        <div><p>Position : </p></div>
                        
                        <input id="AddTraineePosition" type="text" placeholder="Position"></input>
                    </div>
                    
                    <div>
                        <div><p>Mentor : </p></div>
                        
                        <input id="AddTraineeMentor" type="text" placeholder="Mentor"></input>
                    </div>
                    
                    <div>
                        <div><p>Status : </p></div>
                        
                        <input id="AddTraineeStatus" type="text" placeholder="Status"></input>
                    </div>
                    
                    <div>
                        <div><p>Solo  : </p></div>
                        
                        <select id="AddTraineeSolo">
                            <option selected>No</option>
                            <option>Yes</option>
                        </select>
                    </div>
    
                    <div>
                        <div><p>Comments : </p></div>
                        
                        <input id="AddTraineeComments" type="Comments" placeholder="Status"></input>
                    </div>
                    
                        <section>
                            <button onClick={addTrainee} >Add Trainee</button>
                        </section>
                    
                    
                </section>
            
            </div>
        </>
        )
    }
    
}

export default AddTraineeComponent