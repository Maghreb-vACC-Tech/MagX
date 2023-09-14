import { useState, useEffect } from "react";
import SideBar from "../Component/SideBar";
import UpperBar from "../Component/UpperBar";
import "./index.css"

function Rooster() {
  const [res, setRes] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:1000/MaghrebBooking")
      .then((response) => response.json())
      .then((response) => setRes(response));
  }, []);

  return (
    <>
      <SideBar />
      <div className="Announcement PagesContainer">
        <UpperBar Username={sessionStorage.getItem("FullName")} />
        <h1>Rooster Comming Soon</h1>
      </div>
    </>
  );
}

export default Rooster;