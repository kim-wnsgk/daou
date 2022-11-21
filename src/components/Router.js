import React, { useState } from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import Auth from '../routes/Auth';
import Home from '../routes/Home';
import Schedule from '../routes/Schedule';
import MeetingRoom from '../routes/MeetingRoom';
import Work from '../routes/Work';
import Board from '../routes/Board';
import Lunch from '../routes/Lunch';
import BoardWrite from '../routes/BoardWrite';
import Profile from '../routes/Profile';

const AppRouter = ({ isLoggedIn }) => {
  console.log()
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Routes>
        {isLoggedIn ? (
          <>
            <Route exact path="/" element={<Home/>} />
            <Route path="/meetingroom" element={<MeetingRoom />} />
            <Route path="/schedule" element={<Schedule />} />
            <Route path="/work" element={<Work />} />
            <Route path="/board" element={<Board />} />
            <Route path="/board/write/:selector" element={<BoardWrite />} />
            <Route path="/lunch" element={<Lunch />} />
            <Route path="/Profile" element={<Profile />} />
          </>
        ) : (
          <Route exact path="/" element={<Auth/>} />
        )}
      </Routes>
    </Router>
  );
};

export default AppRouter;
