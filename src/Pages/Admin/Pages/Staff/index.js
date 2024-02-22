
import "./index.css"
import SideBar from "../../../Component/SideBar";
import UpperBar from "../../../Component/UpperBar";
import { useEffect, useState } from "react";

function StaffPage(){

  const [Setup , setSetup] = useState()

  const sample = require('./Setup.json');

  console.log(JSON.stringify(sample))

  return(
    <>
      <SideBar />
      <div className="AdminPage PagesContainer">
        <UpperBar Username={sessionStorage.getItem("FullName")} />
      </div>
    </>
  )
}
export default StaffPage