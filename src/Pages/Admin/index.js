import { useState, useEffect } from "react";
import SideBar from "../Component/SideBar";
import UpperBar from "../Component/UpperBar";
import "./index.css"

function AdminPage() {

  if(sessionStorage.getItem("CID") == "10000008") {
    return (
      <>
        <SideBar />
        <div className="AdminPage PagesContainer">
          <UpperBar Username={sessionStorage.getItem("FullName")} />
          <h1>AdminPage Comming Soon</h1>
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
        <h1>U dont have access bro</h1>
      </div>
      </>
    )
  }




}

export default AdminPage;