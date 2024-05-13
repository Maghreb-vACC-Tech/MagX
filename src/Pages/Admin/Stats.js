import { useState, useEffect } from "react";

function AdminStats(props){
    const [MembersCount , SetMembersCount] = useState()
    const [Members , SetMembers] = useState()
    const [OBS , SetOBS] = useState()
    const [S1 , SetS1] = useState()
    const [S2 , SetS2] = useState()
    const [S3 , SetS3] = useState()
    const [C1 , SetC1] = useState()
    const [C3 , SetC3] = useState()
    const [I1 , SetI1] = useState()
    const [SUP , SetSUP] = useState()
    const [Banned , SetBanned] = useState()

    const [DataState , SetDataState] = useState(false)

    let groupedByRating

    const AdminAPIURL = (props.APILink) ? "http://localhost:1000/"  : "https://api.vatsim.ma/"

    function GetMemberStats(){

        fetch(`${AdminAPIURL}members`)
        .then(res => res.json())
        .then(res => {

            groupedByRating = res.reduce((acc, member) => {
                const rating = member.rating;
                
                if(!acc[rating]) {
                  acc[rating] = [];
                }
                
                acc[rating].push(member);
                
                return acc;
              }, {});
            
            console.log(groupedByRating);


            SetOBS(groupedByRating[1]);
            SetS1(groupedByRating[2]);
            SetS2(groupedByRating[3]);
            SetS3(groupedByRating[4]);
            SetC1(groupedByRating[5]);
            SetC3(groupedByRating[7]);
            SetI1(groupedByRating[8]);
            SetSUP(groupedByRating[11]);
            SetBanned(groupedByRating[0])

            SetDataState(true)

            SetMembers(groupedByRating)
            SetMembersCount(res.length)
            
        })
    }



    useEffect(()=>{
        GetMemberStats()
    },[])
    return(
        <>
            <div className="MembersStatsCount">
                <div className="MembersStatsCountTitle">
                    <h1>Members Stats</h1>
                </div>

                
                {DataState &&(
                    <>
                        <div className="MembersStatsCountContainer">  
                                            
                            <div><h1>OBS</h1><p>{OBS.length} Members</p></div>

                            <div><h1>S1</h1><p>{S1.length} Members</p></div>

                            <div><h1>S2</h1><p>{S2.length} Members</p></div>

                            <div><h1>S3</h1><p>{S3.length} Members</p></div>

                            <div><h1>C1</h1><p>{C1.length} Members</p></div>

                            <div><h1>C3</h1><p>{C3.length} Members</p></div>

                            <div><h1>I1</h1><p>{I1.length} Members</p></div>

                            <div><h1>SUP</h1><p>{SUP.length} Members</p></div>

                            <div><h1>Banned</h1><p>{Banned.length} Members </p></div>

                        </div>

                        <div className="MembersStatsContainerBar">
                            <div></div>
                        </div>

                        <div className="MembersStatsContainerTitle">
                            <h2>Banned : </h2>
                        </div>

                        <div className="MembersStatsContainer">
                                {Banned.map(person => (
                                    <div className="MemberContainer" key={person.id}>
                                        <h3>{person.name_first} {person.name_last}  |  {person.id}</h3>
                                        <p>Rating: {person.rating}</p>
                                        <p>Email: {person.email}</p>
                                    </div>  
                                ))}
                        </div>


                        <div className="MembersStatsContainerTitle">
                            <h2>OBS : </h2>
                        </div>

                        <div className="MembersStatsContainer">
                                {OBS.map(person => (
                                    <div className="MemberContainer" key={person.id}>
                                        <h3>{person.name_first} {person.name_last}  |  {person.id}</h3>
                                        <p>Rating: {person.rating}</p>
                                        <p>Email: {person.email}</p>
                                    </div>  
                                ))}
                        </div>





                        <div className="MembersStatsContainerTitle">
                            <h2>S1 : </h2>
                        </div>

                        <div className="MembersStatsContainer">
                                {S1.map(person => (
                                    <div className="MemberContainer" key={person.id}>
                                        <h3>{person.name_first} {person.name_last}  |  {person.id}</h3>
                                        <p>Rating: {person.rating}</p>
                                        <p>Email: {person.email}</p>
                                    </div>  
                                ))}
                        </div>




                        <div className="MembersStatsContainerTitle">
                            <h2>S2 : </h2>
                        </div>

                        <div className="MembersStatsContainer">
                                {S2.map(person => (
                                    <div className="MemberContainer" key={person.id}>
                                        <h3>{person.name_first} {person.name_last}  |  {person.id}</h3>
                                        <p>Rating: {person.rating}</p>
                                        <p>Email: {person.email}</p>
                                    </div>  
                                ))}
                        </div>



                        <div className="MembersStatsContainerTitle">
                            <h2>S3 : </h2>
                        </div>

                        <div className="MembersStatsContainer">
                                {S3.map(person => (
                                    <div className="MemberContainer" key={person.id}>
                                        <h3>{person.name_first} {person.name_last}  |  {person.id}</h3>
                                        <p>Rating: {person.rating}</p>
                                        <p>Email: {person.email}</p>
                                    </div>  
                                ))}
                        </div>


                        <div className="MembersStatsContainerTitle">
                            <h2>C1 : </h2>
                        </div>

                        <div className="MembersStatsContainer">
                                {C1.map(person => (
                                    <div className="MemberContainer" key={person.id}>
                                        <h3>{person.name_first} {person.name_last}  |  {person.id}</h3>
                                        <p>Rating: {person.rating}</p>
                                        <p>Email: {person.email}</p>
                                    </div>  
                                ))}
                        </div>


                        <div className="MembersStatsContainerTitle">
                            <h2>C3 : </h2>
                        </div>

                        <div className="MembersStatsContainer">
                                {C3.map(person => (
                                    <div className="MemberContainer" key={person.id}>
                                        <h3>{person.name_first} {person.name_last}  |  {person.id}</h3>
                                        <p>Rating: {person.rating}</p>
                                        <p>Email: {person.email}</p>
                                    </div>  
                                ))}
                        </div>

                        <div className="MembersStatsContainerTitle">
                            <h2>I1 : </h2>
                        </div>

                        <div className="MembersStatsContainer">
                                {I1.map(person => (
                                    <div className="MemberContainer" key={person.id}>
                                        <h3>{person.name_first} {person.name_last}  |  {person.id}</h3>
                                        <p>Rating: {person.rating}</p>
                                        <p>Email: {person.email}</p>
                                    </div>  
                                ))}
                        </div>


                        <div className="MembersStatsContainerTitle">
                            <h2>SUP : </h2>
                        </div>

                        <div className="MembersStatsContainer">
                                {SUP.map(person => (
                                    <div className="MemberContainer" key={person.id}>
                                        <h3>{person.name_first} {person.name_last}  |  {person.id}</h3>
                                        <p>Rating: {person.rating}</p>
                                        <p>Email: {person.email}</p>
                                    </div>  
                                ))}
                        </div>

                                                    
                    </>
                )}

                


            </div>
        </>

    )
}

export default AdminStats