import './index.css';

import { useState, useEffect } from "react";
import SideBar from '../../../Component/SideBar';
import UpperBar from '../../../Component/UpperBar';

// Component
import METAR_TAF from './Components/MEAT-TAF';

function PilotTools() {

  
  return (
    <>
        <SideBar />
        <div className="Tools PagesContainer">
          <UpperBar Username={sessionStorage.getItem("FullName")} />
          <METAR_TAF></METAR_TAF>
        </div>
    </>
  );
}

export default PilotTools;