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
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/extractor" element={<LocationExtractor />} />
      </Routes>
    </Router>
  );
}

export default App;