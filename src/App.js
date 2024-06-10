import './App.css';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';



// Import Pages
import Dashboard from './Pages/Dashboard';
import Booking from './Pages/Booking';
import Event from './Pages/Event';
import Stats from './Pages/Stats';
import Tools from './Pages/Tools';
import ATCTools from './Pages/Tools/Pages/ATC';
import PilotTools from './Pages/Tools/Pages/Pilot';
import Training from './Pages/Training';
import LocationExtractor from './LocationExtractor';
// import Settings from './Pages/Settings';
import Configurator from './Pages/Configurator';
// import Roster from './Pages/Roster';
import AdminPage from './Pages/Admin';
import ModifyTrainee from './Pages/Admin/Pages/Training/Components/Training/ModifyTrainee';
// admin Components
import StaffTrainingPage from './Pages/Admin/Pages/Training';
import StaffDeleteTrainee from './Pages/Admin/Pages/Training/DeleteTrainee';
import ShowTrainee from './Pages/Admin/Pages/Training/Components/Training/ShowTrainee';
import EventManagerPage from './Pages/Admin/Pages/EventManager';
import AddVisitor from './Pages/Admin/Pages/Training/Components/Training/AddVisitor';
import AdminTools from './Pages/Admin/Pages/AdminTools'
// Membership
import ShowMember from './Pages/Admin/Pages/Membership/Component/showMember';
import StaffMembershipPage from './Pages/Admin/Pages/Membership';
import ShowMemberConnectionLog from './Pages/Admin/Pages/Membership/Component/showMemberConnectionLog';
import ShowMemberLogConnectionMore from './Pages/Admin/Pages/Membership/Component/ShowMemberLogConnectionMore';

// Operations
import StaffOPSPage from './Pages/Admin/Pages/Operations/'
import AddairportOPS from './Pages/Admin/Pages/Operations/Pages/Addairport'



// Staff 
import StaffPage from "./Pages/Admin/Pages/Staff"


// Lost
import Lost from "./Pages/Component/Lost"


// Import Dev Environement
import Data from "./MaghrebSetup.json"

let APILINK="http://localhost:1000/"
if (process.env.REACT_APP_APP_ENV=="DEV"){
  APILINK="http://localhost:1000/"
}
else{
  APILINK="https://api.vatsim.ma/"  
}




function App() {

  
  return (
    <Router>
      <Routes>
        {/************************************ Client Routing **********************************************/}
        <Route path="/Config" element={<Configurator />} />
        <Route path="/Dashboard" element={<Dashboard APILink = {APILINK} />} />
        <Route path="/Staff" element={<AdminPage APILink = {APILINK} />}/>
        <Route path="/Booking" element={<Booking APILink = {APILINK} />} />
        <Route path="/Event" element={<Event />} />
        <Route path="/Stats" element={<Stats />} />
        <Route path="/Tools" element={<Tools />} />
        {/* <Route path="/PilotTools" element={<PilotTools />} /> */}
        <Route path="/ATCTools" element={<ATCTools APILink = {APILINK} />} />
        <Route path="/Training" element={<Training />} />
        {/* <Route path="/Settings" element={<Settings />} /> */}
        <Route path="/extractor" element={<LocationExtractor />} />
        {/************************************ Admin Routing **********************************************/}
          {/* Training */}
          {/* <Route path="/StaffTraining" element={<StaffTrainingPage/>}/>
          <Route path="/StaffDeleteTrainee" element={<StaffDeleteTrainee/>}/>
          <Route path="/ModifyTrainee" element={<ModifyTrainee/>}/>
          <Route path="/StaffShowTrainee" element={<ShowTrainee/>}/>
          <Route path="/AddVisitor" element={<AddVisitor/>}/> */}
          {/* Membership Routing */}
          <Route path="/StaffMembership" element={<StaffMembershipPage  APILink = {APILINK} />}/>
          <Route path="/StaffShowMember" element={<ShowMember/>}/>
          {/* <Route path="/ShowMemberLog" element={<ShowMemberConnectionLog/>}/> */}
          <Route path="/ShowMemberLog" element={<ShowMemberConnectionLog/>}/>
          <Route path="/ShowMemberLogMore" element={<ShowMemberLogConnectionMore/>}/>
          {/* Booking */}
          {/* <Route path="/StaffBooking" element={<AdminPage/>}/> */}
          {/* Events */}
          {/* <Route path="/EventManager" element={<EventManagerPage/>}/> */}
          {/* Staff */}
          <Route path="/StaffPage" element={<StaffPage/>}/>
          {/* Tools */}
          <Route path="/AdminTools" element={<AdminTools/>}/>
          {/* OPS */}
          {/* <Route path="/OPS" element={<StaffOPSPage/>}/>
          <Route path="/AddairportOPS" element={<AddairportOPS/>}/> */}
          {/* Announcement */}
          {/* <Route path="/StaffAnnouncement" element={<AdminPage/>}/> */}
      
          <Route 
            path="*" 
            element={<Lost
            Error = "Permision Denied"
            Message = "You are trying to access a ressource that you dont have the required permissions for or is outside of MAGX"
            Solution = {["If you are lost you can come back to your dashboard " , <a href="/Dashboard">Dashboard</a>]}
            Link = ""
          />}/>
      </Routes>
    </Router>
  );
}

export default App;