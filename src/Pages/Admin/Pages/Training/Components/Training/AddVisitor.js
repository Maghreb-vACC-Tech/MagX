
import SideBar from "../../../../../Component/SideBar";
import UpperBar from "../../../../../Component/UpperBar";

function AddVisitor(props){

    function AddVisitor(){
    // const TraineeConstructor = {
    //     //! Caution here if some value needs to be rethinked like Rating Start and 
    //     //! Solo Rating if u for example try to update or modify it van modify the 
    //     //! initial values
    //     "CID":"id",
    //     "Rating" : document.getElementById("AddTraineeRating").value,
    //     "Facility" : document.getElementById("AddTraineeFacility").value,
    //     "Position" : document.getElementById("AddTraineePosition").value,
    //     "Mentor" : document.getElementById("AddTraineeMentor").value,
    //     "Status" : document.getElementById("AddTraineeStatus").value,
    //     "Comment" : document.getElementById("AddTraineeComments").value,
    //   }
}

    return(
        <>
        <SideBar></SideBar>
        <div className="addTrainee animate__fadeIn" id="AddTrainee">
            <UpperBar  Username={sessionStorage.getItem("FullName")}></UpperBar>
            <div className="AddVisitor animate__fadeIn">
            <section>
                <div>
                    <div><p>Name : </p></div>
                    
                    <input id="AddTraineeFacility" type="text" placeholder="Name"></input>
                </div>
                <div>
                    <div><p>CID : </p></div>
                    
                    <input id="AddTraineeFacility" type="text" placeholder="CID"></input>
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
                </div>

                <div>
                    <div><p>Facility : </p></div>
                    
                    <input id="AddTraineeFacility" type="text" placeholder="Facility"></input>
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
                    <div><p>Status  : </p></div>
                    
                    <select id="AddTraineeStatus">
                        <option selected>Visitor</option>
                    </select>
                </div>

                <div>
                    <div><p>Comment : </p></div>
                    
                    <input id="AddTraineeComments" type="Comments" placeholder="Comment"></input>
                </div>
                
                    <section>
                        <button onClick={()=>{AddVisitor()}} >Modify</button>
                    </section>

            </section> 
            </div>
        </div>
        </>
    )
} 

export default AddVisitor