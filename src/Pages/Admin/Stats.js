import { useState, useEffect } from "react";

function AdminStats(){
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

    let groupedByRating
    function GetMemberStats(){

        fetch("http://127.0.0.1:1000/members")
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


            SetOBS(groupedByRating[1].length);
            SetS1(groupedByRating[2].length);
            SetS2(groupedByRating[3].length);
            SetS3(groupedByRating[4].length);
            SetC1(groupedByRating[5].length);
            SetC3(groupedByRating[7].length);
            SetI1(groupedByRating[8].length);
            SetSUP(groupedByRating[11].length);
            SetBanned(groupedByRating[0].length)

            SetMembers(groupedByRating)
            SetMembersCount(res.length)
        })
    }

    // function GroupMembersByRating(){

    //     fetch("http://127.0.0.1:1000/members")
    //     .then(res => res.json())
    //     .then(res => {
    //         SetMembers(res)
    //     })
    //     const groupedByRating = Members.reduce((acc, member) => {
    //         const rating = member.rating;
            
    //         if(!acc[rating]) {
    //           acc[rating] = [];
    //         }
            
    //         acc[rating].push(member);
            
    //         return acc;
    //       }, {});

          
    // console.log(groupedByRating);

    // }



    useEffect(()=>{
        GetMemberStats()
        // GroupMembersByRating()
    },[])
    return(
        <>
            <div className="MembersStatsCount">
                <div className="MembersStatsCountTitle">
                    <h1>Members Stats</h1>
                </div>
                
                {/* <h1>{MembersCount} Members</h1> */}
                
                <div className="MembersStatsCountContainer">
                    
                    <div><h1>OBS</h1><p>{OBS} Members</p></div>
                    
                    <div><h1>S1</h1><p>{S1} Members</p></div>
                    
                    <div><h1>S2</h1><p>{S2} Members</p></div>
                    
                    <div><h1>S3</h1><p>{S3} Members</p></div>
                    
                    <div><h1>C1</h1><p>{C1} Members</p></div>
                    
                    <div><h1>C3</h1><p>{C3} Members</p></div>
                    
                    <div><h1>I1</h1><p>{I1} Members</p></div>
                    
                    <div><h1>SUP</h1><p>{SUP} Members</p></div>
                    
                    <div><h1>Banned</h1><p>{Banned} Members </p></div>
                    
                </div>
            </div>
        </>

    )
}

export default AdminStats