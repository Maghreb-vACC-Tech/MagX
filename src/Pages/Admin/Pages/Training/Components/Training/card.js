function Cards(props){
    let URLDeleteID = `/StaffDeleteTrainee?id=${props.id}`
    let URLModifyID = `/StaffAddTrainee?id=${props.id}`
    let URLShowID = `/StaffShowTrainee?id=${props.id}`
    return(
        
        <div className="CardAdmin animate__fadeIn">
            <section1>
                <div><p>{props.name}</p></div>
                <div><p1>{props.cid}</p1></div>
            </section1>
            <section>
                <line>
                    <div><p>Rating : </p></div>
                    <div><p>{props.rating}</p></div>
                </line>
                <line>
                    <div><p>Facility : </p></div>
                    <div><p>{props.facility}</p></div>
                </line>
                <line>
                    <div><p>Position : </p></div>
                    <div><p>{props.position}</p></div>
                </line>
                <line>
                    <div><p>Mentor : </p></div>
                    <div><p>{props.facility}</p></div>
                </line>
                <line>
                    <div><p>Status : </p></div>
                    <div><p>{props.mentor}</p></div>
                </line>
                <line1>
                    <div><p>Comment : </p></div>
                    <div><p>{props.comment}</p></div>
                </line1>
                
                <line>
                    <div><a href={URLDeleteID} className="CardDeleteBTN"><i class="fa-solid fa-trash"></i></a></div>
                    <div><a href={URLShowID} className="CardShowBTN"><i class="fa-solid fa-eye"></i></a></div>
                    <div><a href={URLModifyID} className="CardModifyBTN"><i class="fa-solid fa-pen"></i></a></div>
                </line>

            </section>
        </div>
    )
} 

export default Cards