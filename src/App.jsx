import { useState } from 'react';
import './App.css';
import { Home } from './pages/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { SBBRatings } from './pages/SBB-Ratings';

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <div className="App">
        {/* Routes container to define all route paths */}
        <Routes>
          {/* Define Route for Home. It uses index prop to indicate that it's the default route */}
          <Route path="/sbb" element={<SBBRatings/>} />
          <Route path="*" element={<Home />} index />
        </Routes>
        <Navigation />
      </div>
    </Router>
  );
}

export default App;
