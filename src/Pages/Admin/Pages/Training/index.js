import SideBar from "../../../Component/SideBar";
import UpperBar from "../../../Component/UpperBar";
import TrainingAdmin from "./Components/Training/TrainingAdmin";

function StaffTrainingPage(){
    if(sessionStorage.getItem("CID") == "10000008") {
        return (
          <>
            <SideBar />
            <div className="AdminPage PagesContainer">
              <UpperBar Username={sessionStorage.getItem("FullName")} />
              <TrainingAdmin></TrainingAdmin>
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
            <p>Cid : {sessionStorage.getItem("CID")}</p>
          </div>
          </>
        )
      }
}

export default StaffTrainingPage