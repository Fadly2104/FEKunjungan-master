import React, { useEffect, useState } from 'react';
import {
  Routes,
  Route,
  useLocation
} from 'react-router-dom';

import './css/style.css';

import './charts/ChartjsConfig';

// Import pages
import Dashboard from './pages/Dashboard';
import Ruangan from './pages/ruangan/Ruangan'
import Collaboration from './pages/ruangan/Collaboration';
import Inspiring from './pages/ruangan/Inspiring';
import Harmonize from './pages/ruangan/Harmonize';
import Synergy from './pages/ruangan/Synergy';
import Peminjaman from './pages/Peminjaman';
import DetailPeminjaman from './pages/peminjaman/DetailPeminjaman';
import Calendar from './pages/Calendar';
import Review from './pages/Review';
import DetailReview from './pages/review/DetailReview';

function App() {

  const location = useLocation();

  useEffect(() => {
    document.querySelector('html').style.scrollBehavior = 'auto'
    window.scroll({ top: 0 })
    document.querySelector('html').style.scrollBehavior = ''
  }, [location.pathname]); // triggered on route change

  return (
      <Routes>
        <Route exact path="/" element={<Dashboard />} />
        <Route exact path="/ruangan" element={<Ruangan />} />
        <Route exact path="/ruangan/collaboration" element={<Collaboration />} />
        <Route exact path="/ruangan/inspiring" element={<Inspiring />} />
        <Route exact path="/ruangan/harmonize" element={<Harmonize />} />
        <Route exact path="/ruangan/synergy" element={<Synergy />} />
        <Route exact path="/peminjaman" element={<Peminjaman />} />
        <Route exact path="/detailpeminjaman" element={<DetailPeminjaman />} />
        <Route exact path="/calendar" element={<Calendar />} />
        <Route exact path="/review" element={<Review />} />
        <Route exact path="/detailreview" element={<DetailReview />} />
      </Routes> 
  );
}

export default App;
