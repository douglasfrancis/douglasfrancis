import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './index.css';
import App from './App';
import Music from './Music';
import Bookings from './Bookings';
import Home from './Home';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} >
        <Route index element={<Home />}/>
        <Route path="music" element={<Music />} />
        <Route path="bookings" element={<Bookings />} />
      </Route>

      
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);

