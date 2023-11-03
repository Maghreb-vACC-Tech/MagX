import './App.css';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

// Import Pages
import Dashboard from './Pages/Dashboard';
import Booking from './Pages/Booking';
import Event from './Pages/Event';
import Training from './Pages/Training';
import LocationExtractor from './LocationExtractor';
import Roster from './Pages/Roster';
import AdminPage from './Pages/Admin';
import AddTraineeComponent from './Pages/Admin/Pages/Training/Components/Training/addTraineeComponent';
// admin Components
import StaffTrainingPage from './Pages/Admin/Pages/Training';
import StaffDeleteTrainee from './Pages/Admin/Pages/Training/DeleteTrainee';
import ShowTrainee from './Pages/Admin/Pages/Training/Components/Training/ShowTrainee';

// Membership
import ShowMember from './Pages/Admin/Pages/Membership/Component/showMember';

import StaffMembershipPage from './Pages/Admin/Pages/Membership';

function App() {


  
  return (
    <Router>
      <Routes>
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/Staff" element={<AdminPage/>}/>
        <Route path="/Booking" element={<Booking />} />
        <Route path="/Event" element={<Event />} />
        <Route path="/Training" element={<Training />} />
        <Route path="/Roster" element={<Roster />} />
        <Route path="/extractor" element={<LocationExtractor />} />
        {/* *Admin Routing */}
        {/* Training */}
        <Route path="/StaffTraining" element={<StaffTrainingPage/>}/>
        <Route path="/StaffDeleteTrainee" element={<StaffDeleteTrainee/>}/>
        <Route path="/StaffAddTrainee" element={<AddTraineeComponent/>}/>
        <Route path="/StaffShowTrainee" element={<ShowTrainee/>}/>
        {/* Membership Routing */}
        <Route path="/StaffMembership" element={<StaffMembershipPage/>}/>
        <Route path="/StaffShowMember" element={<ShowMember/>}/>

        <Route path="/StaffBooking" element={<AdminPage/>}/>
        <Route path="/StaffAnnouncement" element={<AdminPage/>}/>
      </Routes>
    </Router>
  );
}

export default App;