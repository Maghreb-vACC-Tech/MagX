function ShowMemberCard(props){
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
                    <div><p>Email : </p></div>
                    <div><p>{props.Email}</p></div>
                </line>
                <line>
                    <div><p>Location : </p></div>
                    <div><p>{props.Location}</p></div>
                </line>
                <line>
                    <div><p>Pilot Rating : </p></div>
                    <div><p>{props.Pilotrating}</p></div>
                </line>
                <line>
                    <div><p>Subdivision : </p></div>
                    <div><p>{props.Subdivision_ID}</p></div>
                </line>
            </section>
        </div>
    )
} 

export default ShowMemberCard