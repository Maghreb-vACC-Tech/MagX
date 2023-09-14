import { useState, useEffect } from "react";
import SideBar from "../Component/SideBar";
import UpperBar from "../Component/UpperBar";
import "./index.css"

function Booking() {
  const [res, setRes] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:1000/MaghrebBooking")
      .then((response) => response.json())
      .then((response) => setRes(response));
  }, []);

  return (
    <>
      <SideBar />
      <div className="Booking PagesContainer">
        <UpperBar Username={sessionStorage.getItem("FullName")} />

        <div className="Bookings">
          <div className="Bookings-Container">
            <div className="Bookings-Container-Name">
              <div>
                <p>CallSign</p>
              </div>
              <div>
                <p>Time (UTC)</p>
              </div>
              <div>
                <p>ATCO</p>
              </div>
            </div>

            {res.map((item) => (
              <div  className="Bookings-Container-DIV">
                <div className="Bookings-Container-DIV-color"><p>{item.callsign}</p></div>
                <div><p>{item.start}</p></div>
                <div><p>{item.cid}</p></div>
              </div>
            ))}
          </div>
        </div>
        

      </div>
    </>
  );
}

export default Booking;