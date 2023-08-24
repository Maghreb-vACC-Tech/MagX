import SideBar from "../Component/SideBar"
import UpperBar from "../Component/UpperBar";

import { useLocation } from 'react-router-dom';

function Dashboard(){
    
    const location = useLocation();
    const stateData = location.state;
  
    // Access the data
    console.log(stateData);
  
    // Rest of your component code




    return(
        <>

            <SideBar/>

            <div className="Dashboard PagesContainer">
                <UpperBar
                    Username = { stateData.personal.name_first}
                />
                <a href="/Booking">Booking</a>
                <p>{JSON.stringify(stateData)}</p>
                <p>{stateData.cid}</p>
                <a href="/Booking">Booking</a>
                <p>{JSON.stringify(stateData)}</p>
                <p>{stateData.cid}</p>
                <a href="/Booking">Booking</a>
                <p>{JSON.stringify(stateData)}</p>
                <p>{stateData.cid}</p>
                <a href="/Booking">Booking</a>
                <p>{JSON.stringify(stateData)}</p>
                <p>{stateData.cid}</p>
                <a href="/Booking">Booking</a>
                <p>{JSON.stringify(stateData)}</p>
                <p>{stateData.cid}</p>
                <a href="/Booking">Booking</a>
                <p>{JSON.stringify(stateData)}</p>
                <p>{stateData.cid}</p>
                <a href="/Booking">Booking</a>
                <p>{JSON.stringify(stateData)}</p>
                <p>{stateData.cid}</p>
                <a href="/Booking">Booking</a>
                <p>{JSON.stringify(stateData)}</p>
                <p>{stateData.cid}</p>
                <a href="/Booking">Booking</a>
                <p>{JSON.stringify(stateData)}</p>
                <p>{stateData.cid}</p>
            </div>

        </>
    )
}

export default Dashboard