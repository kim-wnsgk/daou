import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from './routes/Home'
import Schedule from './routes/Schedule'
import MeetingRoom from './routes/MeetingRoom'
import Work from './routes/Work'
import Board from './routes/Board'
import Lunch from './routes/Lunch'


function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/meetingroom" element={<MeetingRoom />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/work" element={<Work />} />
        <Route path="/board" element={<Board />} />
        <Route path="/lunch" element={<Lunch />} />
      </Routes>
    </Router >
  );
}

export default App;

