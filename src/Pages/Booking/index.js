import { useState, useEffect } from "react";
import SideBar from "../Component/SideBar";
import UpperBar from "../Component/UpperBar";
import "./index.css"

// Toatstify ( for notification )
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Booking() {
  const notify = (e) => toast( e , {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
    });;
  // const [vatsimEvents, setvatsimEvents] = useState([]);
  const [maghrebBookings, setmaghrebBookings] = useState([]);

  function MaghrebFetching(){
    fetch("http://127.0.0.1:1000/MaghrebBooking")
    // fetch("http://127.0.0.1:1000/MagBookTest")
      .then((response) => response.json())
      .then((response) => {
        setmaghrebBookings(response)
      });
  }

  useEffect(() => {
    MaghrebFetching()
  }, []);
  
  const data = sessionStorage.getItem("MagEvent")
  const vatsimEvents = JSON.parse(data)

  const allEvents = [
    ...vatsimEvents.map(event => ({
      ...event,
      type: 'event' 
    })),
    ...maghrebBookings.map(booking => ({
      ...booking, 
      type: 'booking'
    }))
  ];


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

    // alert(JSON.stringify(Data))

    fetch('http://127.0.0.1:1000/AddMaghrebBooking', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        Data
      })
    })
    .then(MaghrebFetching())
    .then(notify("Booking Added"))
  }



  const formattedEvents = allEvents.reduce((acc, item) => {
    let date;
  
    if(item.type === 'event') {
      date = new Date(item.start_time).toDateString(); 
    }
  
    if(item.type === 'booking') {
      date = new Date(item.start).toDateString();
    }
  
    if(!acc[date]) {
      acc[date] = [];
    }
  
    acc[date].push(item);
  
    return acc;
  }, {});



  function DateGroup({ date, items }) {  

    const bookingPositions = {
      TWR: 'twr',
      GND: 'gnd', 
      CTR: 'ctr',
      APP: 'app'
    };

    const ReminderIcon = (
      <svg xmlns="http://www.w3.org/2000/svg" width="1vw" height="46" viewBox="0 0 34 46" fill="none">
        <path d="M17 45.3773C19.3375 45.3773 21.25 43.3015 21.25 40.7644H12.75C12.75 43.3015 14.6625 45.3773 17 45.3773ZM29.75 31.5385V20.0061C29.75 12.9253 26.2862 6.99767 20.1875 5.42927V3.86087C20.1875 1.9465 18.7638 0.401169 17 0.401169C15.2362 0.401169 13.8125 1.9465 13.8125 3.86087V5.42927C7.735 6.99767 4.25 12.9022 4.25 20.0061V31.5385L0 36.1514V38.4579H34V36.1514L29.75 31.5385ZM25.5 33.845H8.5V20.0061C8.5 14.2861 11.7087 9.62704 17 9.62704C22.2913 9.62704 25.5 14.2861 25.5 20.0061V33.845Z" fill="white"/>
      </svg>
    )

    const TrashIcon = (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M20.625 3.875H16.25V3.0625C16.25 2.41603 15.9734 1.79605 15.4812 1.33893C14.9889 0.881807 14.3212 0.625 13.625 0.625H8.375C7.67881 0.625 7.01113 0.881807 6.51884 1.33893C6.02656 1.79605 5.75 2.41603 5.75 3.0625V3.875H1.375C1.14294 3.875 0.920376 3.9606 0.756282 4.11298C0.592187 4.26535 0.5 4.47201 0.5 4.6875C0.5 4.90299 0.592187 5.10965 0.756282 5.26202C0.920376 5.4144 1.14294 5.5 1.375 5.5H2.25V20.125C2.25 20.556 2.43437 20.9693 2.76256 21.274C3.09075 21.5788 3.53587 21.75 4 21.75H18C18.4641 21.75 18.9092 21.5788 19.2374 21.274C19.5656 20.9693 19.75 20.556 19.75 20.125V5.5H20.625C20.8571 5.5 21.0796 5.4144 21.2437 5.26202C21.4078 5.10965 21.5 4.90299 21.5 4.6875C21.5 4.47201 21.4078 4.26535 21.2437 4.11298C21.0796 3.9606 20.8571 3.875 20.625 3.875ZM7.5 3.0625C7.5 2.84701 7.59219 2.64035 7.75628 2.48798C7.92038 2.3356 8.14294 2.25 8.375 2.25H13.625C13.8571 2.25 14.0796 2.3356 14.2437 2.48798C14.4078 2.64035 14.5 2.84701 14.5 3.0625V3.875H7.5V3.0625ZM18 20.125H4V5.5H18V20.125ZM9.25 9.5625V16.0625C9.25 16.278 9.15781 16.4847 8.99372 16.637C8.82962 16.7894 8.60706 16.875 8.375 16.875C8.14294 16.875 7.92038 16.7894 7.75628 16.637C7.59219 16.4847 7.5 16.278 7.5 16.0625V9.5625C7.5 9.34701 7.59219 9.14035 7.75628 8.98798C7.92038 8.8356 8.14294 8.75 8.375 8.75C8.60706 8.75 8.82962 8.8356 8.99372 8.98798C9.15781 9.14035 9.25 9.34701 9.25 9.5625ZM14.5 9.5625V16.0625C14.5 16.278 14.4078 16.4847 14.2437 16.637C14.0796 16.7894 13.8571 16.875 13.625 16.875C13.3929 16.875 13.1704 16.7894 13.0063 16.637C12.8422 16.4847 12.75 16.278 12.75 16.0625V9.5625C12.75 9.34701 12.8422 9.14035 13.0063 8.98798C13.1704 8.8356 13.3929 8.75 13.625 8.75C13.8571 8.75 14.0796 8.8356 14.2437 8.98798C14.4078 9.14035 14.5 9.34701 14.5 9.5625Z" fill="#B15151"/>
      </svg>
    )

    function formatTime(date) {
      return Intl.DateTimeFormat('en-US', {
        hour: 'numeric',
        minute: 'numeric'
      }).format(date);
    }

    function DeleteBooking(id){

      // alert(id)

      fetch("http://127.0.0.1:1000/DeleteMaghrebBooking" , {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          id: id,
        })
      })
      .then(MaghrebFetching())
      .then(notify("Booking Deleted"))
      
    }

    return (
      <div>
        <div className="Booking-container-Date"><h1>{date}</h1></div>
        
        {items.map(item => {
          
          return (
            <div key={item.id}>
              
              {/* Check type */}
              {item.type === 'event' && 
                <div className="Event-container-Event">
                    <div className="Event-container-Event-Name"><p>{item.name}</p></div>
                    <div className="Event-container-Event-Start"><p>{formatTime(new Date(item.start_time))}  </p></div>
                    <div className="Event-container-Event-Seperation"><p> - </p></div>
                    <div className="Event-container-Event-End"><p>{formatTime(new Date(item.end_time))}</p></div>
                    <div className="Event-container-Event-Action"><a>{ReminderIcon}</a></div>
                </div>
              }
  
              {item.type === 'booking' &&  
                <div className="Booking-container-Event">
                    {/* //bookingPositions */}
                    <div 
                    // className="Booking-container-Booking-Name"
                    className={`Booking-container-Booking-Name ${
                      bookingPositions[item.type] ? bookingPositions[item.type] : ''  
                    }`}
                    ><p>{item.callsign}</p></div>
                    <div className="Booking-container-Booking-CID"><a>{item.cid}</a></div>
                    <div className="Booking-container-Booking-Start"><p>{formatTime(new Date(item.start))}  </p></div>
                    <div className="Booking-container-Booking-Seperation"><p> - </p></div>
                    <div className="Booking-container-Booking-End"><p>{formatTime(new Date(item.end))}</p></div>
                    {/* <div className="Booking-container-Booking-Action"><a>{TrashIcon}</a></div> */}
                    {item.cid == "1674212" && (//sessionStorage.getItem("CID")
                      <div className="Booking-container-Booking-Action">
                        <a onClick={() => {DeleteBooking(item.id)}}>{TrashIcon}</a>  
                      </div>
                    )}
                </div>
              }
              
            </div>
          )
          
        })}
        
      </div>
    )
  }


  return (
    <>
      <SideBar />
      <div className="Booking PagesContainer">
        <UpperBar Username={sessionStorage.getItem("FullName")} />





        <div className="Bookings">
          <div className="Bookings-Add animate__fadeIn">
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
              <div className="Bookings-Container-Name">
                <h1>Booking</h1>
              </div>
            </div>

            {Object.entries(formattedEvents).map(([date, items]) => (  
                  <DateGroup
                    date={date}
                    items={items} 
                  />
                ))}

          </div>
        </div>
        

      </div>
      <ToastContainer />
    </>
  );
}

export default Booking;