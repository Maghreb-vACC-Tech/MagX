function ShowTraineeCard(props){
    return(
        <div className="Card">
            <section1>
                <div><p>{props.Name}</p></div>
                <div><p1>{props.CID}</p1></div>
            </section1>
            <section>
                <line>
                    <div><p>Rating : </p></div>
                    <div><p>{props.Rating}</p></div>
                </line>
                <line>
                    <div><p>Facility : </p></div>
                    <div><p>{props.Facility}</p></div>
                </line>
                <line>
                    <div><p>Position : </p></div>
                    <div><p>{props.Position}</p></div>
                </line>
                <line>
                    <div><p>Mentor : </p></div>
                    <div><p>{props.Mentor}</p></div>
                </line>
                <line>
                    <div><p>Status : </p></div>
                    <div><p>{props.Status}</p></div>
                </line>
            </section>
        </div>
    )
} 

export default ShowTraineeCard