import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import CreateRoom from './pages/CreateRoom';
import JoinRoom from './pages/JoinRoom';
import VideoRoom from './pages/VideoRoom';

function App() {
  return (
    <Router basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/create" element={<CreateRoom />} />
        <Route path="/join" element={<JoinRoom />} />
        <Route path="/room" element={<VideoRoom />} />
      </Routes>
      <footer>
        <p>Developed by <strong> U<sup>2</sup> <small> (Ubaid Ur Rehman)</small></strong>. Student @ Institute of Space Technology Islamabad.</p>
      </footer>
    </Router>
  );
}

export default App;
