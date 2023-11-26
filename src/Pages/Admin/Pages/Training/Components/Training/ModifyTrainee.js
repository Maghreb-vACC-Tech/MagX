import { useEffect, useState } from "react"
import { format } from 'date-fns';
import params from "../../../../../../JsonData/TrainingPrams"
import SideBar from "../../../../../Component/SideBar";
import UpperBar from "../../../../../Component/UpperBar";
import { useNavigate } from 'react-router-dom';
import LoadingSpinner from "../../../../../Component/LoadingSpinner";

function ModifyTrainee(){
    
    // const navigate = useNavigate();
    const navigate = useNavigate();
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
                    "CID":id,
                    "Rating" : document.getElementById("AddTraineeRating").value,
                    "Facility" : document.getElementById("AddTraineeFacility").value,
                    "Position" : document.getElementById("AddTraineePosition").value,
                    "Mentor" : document.getElementById("AddTraineeMentor").value,
                    "Status" : document.getElementById("AddTraineeStatus").value,
                    "Comment" : document.getElementById("AddTraineeComments").value,
                  }
                  
            fetch(`http://127.0.0.1:1000/AlterTrainee/`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'  
                },
                body: JSON.stringify(TraineeConstructor)
                })
            .catch(err => console.log(err))
            .then(navigate('/StaffTraining'))
            /* alert(JSON.stringify(TraineeConstructor)) */
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
                    
                    <select id="AddTraineeRating" defaultValue={TrainneModify.Rating}>
                        <option selected>None</option>
                        <option>S1</option>
                        <option>S2</option>
                        <option>S3</option>
                        <option>C1</option>
                    </select>
                </div>

                <div>
                    <div><p>Facility : </p></div>
                    
                    <input id="AddTraineeFacility" type="text" placeholder="Facility" defaultValue={TrainneModify.Facility}></input>
                </div>

                <div>
                    <div><p>Position : </p></div>
                    
                    <input id="AddTraineePosition" type="text" placeholder="Position" defaultValue={TrainneModify.Position}></input>
                </div>
                
                <div>
                    <div><p>Mentor : </p></div>
                    
                    <input id="AddTraineeMentor" type="text" placeholder="Mentor" defaultValue={TrainneModify.Mentor}></input>
                </div>
                
                
                <div>
                    <div><p>Status  : </p></div>
                    
                    <select id="AddTraineeStatus" defaultValue={TrainneModify.Status}>
                        <option selected>Theory</option>
                        <option>SweatBox</option>
                        <option>Online Sessions</option>
                        <option>Solo</option>
                    </select>
                </div>

                <div>
                    <div><p>Comment : </p></div>
                    
                    <input id="AddTraineeComments" type="Comments" placeholder="Comment" defaultValue={TrainneModify.comment}></input>
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
