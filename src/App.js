import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import Pages
import Dashboard from './Pages/Dashboard';
import Booking from './Pages/Booking';
import Event from './Pages/Event';
import Stats from './Pages/Stats';
import Tools from './Pages/Tools';
import ATCTools from './Pages/Tools/Pages/ATC';
import Training from './Pages/Training';
import LocationExtractor from './LocationExtractor';
import Settings from './Pages/Settings';
import Configurator from './Pages/Configurator';
import AdminPage from './Pages/Admin';
import StaffMembershipPage from './Pages/Admin/Pages/Membership';
import ShowMember from './Pages/Admin/Pages/Membership/Component/showMember';
import ShowMemberConnectionLog from './Pages/Admin/Pages/Membership/Component/showMemberConnectionLog';
import ShowMemberLogConnectionMore from './Pages/Admin/Pages/Membership/Component/ShowMemberLogConnectionMore';
import StaffPage from "./Pages/Admin/Pages/Staff";
import AdminTools from './Pages/Admin/Pages/AdminTools';
import Lost from "./Pages/Component/Lost";

let APILINK;
if (process.env.REACT_APP_APP_ENV === "DEV") {
  APILINK = "http://localhost:1000/";
} else {
  APILINK = "https://api.vatsim.ma/";
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/Config" element={<Configurator />} />
        <Route path="/Dashboard" element={<Dashboard APILink={APILINK} />} />
        <Route path="/Staff" element={<AdminPage APILink={APILINK} />} />
        <Route path="/Booking" element={<Booking APILink={APILINK} />} />
        <Route path="/Event" element={<Event />} />
        <Route path="/Stats" element={<Stats />} />
        <Route path="/Tools" element={<Tools />} />
        <Route path="/ATCTools" element={<ATCTools APILink={APILINK} />} />
        <Route path="/Training" element={<Training />} />
        <Route path="/Settings" element={<Settings APILink={APILINK} />} />
        <Route path="/extractor" element={<LocationExtractor />} />
        <Route path="/StaffMembership" element={<StaffMembershipPage APILink={APILINK} />} />
        <Route path="/StaffShowMember" element={<ShowMember />} />
        <Route path="/ShowMemberLog" element={<ShowMemberConnectionLog />} />
        <Route path="/ShowMemberLogMore" element={<ShowMemberLogConnectionMore />} />
        <Route path="/StaffPage" element={<StaffPage />} />
        <Route path="/AdminTools" element={<AdminTools />} />
        <Route
          path="*"
          element={
            <Lost
              Error="Permission Denied"
              Message="You are trying to access a resource that you don't have the required permissions for or is outside of MAGX"
              Solution={[
                "If you are lost you can come back to your dashboard ",
                <a href="/Dashboard">Dashboard</a>,
              ]}
              Link=""
            />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;