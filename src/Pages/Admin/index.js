import { useState, useEffect } from "react";
import SideBar from "../Component/SideBar";
import UpperBar from "../Component/UpperBar";

import Navigator from "./Navigator";
import AdminStats from "./Stats";
import "./index.css"

function AdminPage() {

const StaffList  = require('./Pages/Staff/Setup.json');

  if(StaffList.StaffList.includes(sessionStorage.getItem("CID"))) {
    fetch("http://localhost:1000/MembershipDBRefresh")
    return (
      <>
        <SideBar />
        <div className="AdminPage PagesContainer">
          <UpperBar Username={sessionStorage.getItem("FullName")} />
          <Navigator/>
          <AdminStats/>
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