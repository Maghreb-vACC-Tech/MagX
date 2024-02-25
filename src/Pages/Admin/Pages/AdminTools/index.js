import { useState, useEffect } from "react";
import SideBar from "../../../Component/SideBar";
import UpperBar from "../../../Component/UpperBar";

import "./index.css"

function AdminTools() {

    return(
      <>
      <SideBar />
      <div className="AdminPage PagesContainer">
        <UpperBar Username={sessionStorage.getItem("FullName")} />
        
      </div>
      </>
    )

}

export default AdminTools;