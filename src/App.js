import './App.css';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

// Import Pages
import Dashboard from './Pages/Dashboard';
import Booking from './Pages/Booking';
import LocationExtractor from './LocationExtractor';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/Booking" element={<Booking />} />
        <Route path="/extractor" element={<LocationExtractor />} />
      </Routes>
    </Router>
  );
}

export default App;