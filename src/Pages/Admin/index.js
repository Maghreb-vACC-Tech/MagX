import { useState, useEffect } from "react";
import SideBar from "../Component/SideBar";
import UpperBar from "../Component/UpperBar";

import Lost from "../Component/Lost"
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
        <Lost
          Error = "Permision Denied"
          Message = "You are trying to access a ressource that you dont have the required permissions for or is outside of MAGX"
          Solution = {["If you are lost you can come back to your dashboard " , <a href="/Dashboard">Dashboard</a>]}
          Link = ""
        />
      </div>
      </>
    )
  }




}

export default AdminPage;