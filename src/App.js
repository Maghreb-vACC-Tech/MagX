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
import Settings from './Pages/Settings';
// import Roster from './Pages/Roster';
import AdminPage from './Pages/Admin';
import ModifyTrainee from './Pages/Admin/Pages/Training/Components/Training/ModifyTrainee';
// admin Components
import StaffTrainingPage from './Pages/Admin/Pages/Training';
import StaffDeleteTrainee from './Pages/Admin/Pages/Training/DeleteTrainee';
import ShowTrainee from './Pages/Admin/Pages/Training/Components/Training/ShowTrainee';
import EventManagerPage from './Pages/Admin/Pages/EventManager';

// Membership
import ShowMember from './Pages/Admin/Pages/Membership/Component/showMember';
import StaffMembershipPage from './Pages/Admin/Pages/Membership';
import ShowMemberConnectionLog from './Pages/Admin/Pages/Membership/Component/showMemberConnectionLog';
import ShowMemberLogConnectionMore from './Pages/Admin/Pages/Membership/Component/ShowMemberLogConnectionMore';


function App() {

  
  return (
    <Router>
      <Routes>
        {/************************************ Client Routing **********************************************/}
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/Staff" element={<AdminPage/>}/>
        <Route path="/Booking" element={<Booking />} />
        <Route path="/Event" element={<Event />} />
        <Route path="/Stats" element={<Stats />} />
        <Route path="/Tools" element={<Tools />} />
        <Route path="/PilotTools" element={<PilotTools />} />
        <Route path="/ATCTools" element={<ATCTools />} />
        <Route path="/Training" element={<Training />} />
        <Route path="/Settings" element={<Settings />} />
        <Route path="/extractor" element={<LocationExtractor />} />
        {/************************************ Admin Routing **********************************************/}
          {/* Training */}
          <Route path="/StaffTraining" element={<StaffTrainingPage/>}/>
          <Route path="/StaffDeleteTrainee" element={<StaffDeleteTrainee/>}/>
          <Route path="/ModifyTrainee" element={<ModifyTrainee/>}/>
          <Route path="/StaffShowTrainee" element={<ShowTrainee/>}/>
          {/* Membership Routing */}
          <Route path="/StaffMembership" element={<StaffMembershipPage/>}/>
          <Route path="/StaffShowMember" element={<ShowMember/>}/>
          <Route path="/ShowMemberLog" element={<ShowMemberConnectionLog/>}/>
          <Route path="/ShowMemberLog" element={<ShowMemberConnectionLog/>}/>
          <Route path="/ShowMemberLogMore" element={<ShowMemberLogConnectionMore/>}/>
          {/* Booking */}
          <Route path="/StaffBooking" element={<AdminPage/>}/>
          {/* Events */}
          <Route path="/EventManager" element={<EventManagerPage/>}/>
          {/* Announcement */}
          {/* <Route path="/StaffAnnouncement" element={<AdminPage/>}/> */}
      </Routes>
    </Router>
  );
}

export default App;