import './index.css';

import { useState, useEffect } from "react";
import SideBar from '../../../Component/SideBar';
import UpperBar from '../../../Component/UpperBar';

function PilotTools() {

  
  return (
    <>
        <SideBar />
        <div className="Tools PagesContainer">
          <UpperBar Username={sessionStorage.getItem("FullName")} />
        </div>
    </>
  );
}

export default PilotTools;