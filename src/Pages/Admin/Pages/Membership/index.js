
import "./index.css"
import SideBar from "../../../Component/SideBar";
import UpperBar from "../../../Component/UpperBar";
import MemberComponent from "./Component/MemberComponent";
import { useEffect, useState } from "react";

function StaffMembershipPage(){
    const [MembershipRes , setMembershipRes] = useState([])

    useEffect(()=>{
      fetch("http://127.0.0.1:1000/MembersGetDB")
      .then(res => res.json())
      .then(res => {
        setMembershipRes(res)
        console.log(res)
      })
    },[])

    if(sessionStorage.getItem("CID") == "10000008") {

      
        return (
          <>
            <SideBar />
            <div className="AdminPage PagesContainer">
              <UpperBar Username={sessionStorage.getItem("FullName")} />
              <div className="MembersContrainer"> 
                <div className="MembersContrainerHeader">
                  <section>
                    <div className="MembersContrainerHeadertitle">
                      <h1>Members</h1>
                    </div>
                    <div className="MembersContrainerHeaderSearch">
                      <input placeholder="CID"  ></input>
                      <button><i class="fa-solid fa-magnifying-glass"></i></button>
                    </div>
                  </section>
                  <section className="MembersContrainerHeaderBar"></section>
                  <section className="MembersContrainerHeaderTitles">
                    <div><p>Name</p></div>
                    <div><p>CID</p></div>
                    <div><p>Email</p></div>
                    <div><p>Country</p></div>
                    <div><p>Action</p></div>
                  </section>
                  
                </div>
                {MembershipRes.map(member => (
                  <MemberComponent
                    Name = {member.Name}
                    CID = {member.CID}
                    Email = {member.Email}
                    Country = {member.Location}
                  />
                ))}
              </div>
            </div>
          </>
        );
      }
      else{
        return(
            <>
                <SideBar />
                <div className="AdminPage PagesContainer">
                    <UpperBar Username={sessionStorage.getItem("FullName")} />   
                </div>
            </>
            )
      }
    
    
}
export default StaffMembershipPage