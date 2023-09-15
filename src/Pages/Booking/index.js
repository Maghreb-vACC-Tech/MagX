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

  function AddBooking(){

    const Start =  document.querySelector(".Date-Booking").value + " " + document.querySelector(".Start-Booking").value + ":00"
    const End =  document.querySelector(".Date-Booking").value + " " + document.querySelector(".End-Booking").value + ":00"
    const Data = {
      "callsign" : document.querySelector(".Callsign-Booking").value,
      // "cid" : sessionStorage.getItem("CID"),
      "cid" : "1674212",
      "start" : Start,
      "end" : End,
      "type": document.querySelector(".Type-Booking").value,
      "division": "MENA",
      "subdivision": "MAG"
    }
    alert(JSON.stringify(Data))

    fetch('http://127.0.0.1:1000/AddMaghrebBooking', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        Data
      })
    });
  }

  return (
    <>
      <SideBar />
      <div className="Booking PagesContainer">
        <UpperBar Username={sessionStorage.getItem("FullName")} />





        <div className="Bookings">
          <div className="Bookings-Add">
            <div className="Bookings-Add-Title"><h1>New Booking</h1></div>

            <div className="Bookings-Add-Inputs">
              <div>
                <p>CallSign</p>
                <input className="Callsign-Booking" type="text" placeholder="Callsign"></input>
              </div>
              <div>
                <p>Day</p>
                <input className="Date-Booking" type="date" placeholder="start"></input>
              </div>
              <div>
                <p>Start</p>
                <input className="Start-Booking" type="time" placeholder="start"></input>
              </div>
              <div>
                <p>End</p>
                <input className="End-Booking" type="time" placeholder="end"></input>
              </div>
              <div>
                <p>Type</p>
                <select className="Type-Booking">
                  <option>booking</option>
                </select>
                {/* <input type="text" placeholder="type"></input> */}
              </div>
              <div>
                <p>CID</p>
                <input className="CID-Booking" type="text" placeholder="1674212" disabled></input>
              </div>
              <div>
                <p>Division</p>
                <input className="DIV-Booking" type="text" placeholder="MENA" disabled></input>
              </div>
              <div>
                <p>Subdivision</p>
                <input className="SUBDIV-Booking" type="text" placeholder="MAG" disabled></input>
              </div>
              <div className="Bookings-Add-Inputs-submit">
                <input type="submit"  onClick={AddBooking}></input>
              </div>
                
                
                
               
                
              
            </div>
          </div>

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