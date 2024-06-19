import { useState, useEffect } from "react";
import SideBar from "../Component/SideBar";
import UpperBar from "../Component/UpperBar";

import Lost from "../Component/Lost"
import Navigator from "./Navigator";
import AdminStats from "./Stats";
import "./index.css"

function AdminPage(props) {

const StaffList  = require('./Pages/Staff/Setup.json');


const AdminAPIURL = (process.env.REACT_APP_APP_ENV == "PROD") ? "https://api.vatsim.ma/" : "http://localhost:1000/"

  if(StaffList.StaffList.includes(sessionStorage.getItem("CID"))) {
    fetch(`${AdminAPIURL}MembershipDBRefresh`)
    return (
      <>
        <SideBar />
        <div className="AdminPage PagesContainer">
          <UpperBar Username={sessionStorage.getItem("FullName")} />
          <Navigator/>
          <AdminStats APILink = {props.APILink}/>
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