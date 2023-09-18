import './App.css';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

// Import Pages
import Dashboard from './Pages/Dashboard';
import Booking from './Pages/Booking';
import Event from './Pages/Event';
import Announcement from './Pages/Announcement';
import LocationExtractor from './LocationExtractor';
import Roster from './Pages/Roster';
import AdminPage from './Pages/Admin';

function App() {


  
  return (
    <Router>
      <Routes>
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/Staff" element={<AdminPage/>}/>
        <Route path="/Booking" element={<Booking />} />
        <Route path="/Event" element={<Event />} />
        <Route path="/Announcement" element={<Announcement />} />
        <Route path="/Roster" element={<Roster />} />
        <Route path="/extractor" element={<LocationExtractor />} />
      </Routes>
    </Router>
  );
}

export default App;