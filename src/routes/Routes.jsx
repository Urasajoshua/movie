import React from 'react';
import { BrowserRouter as Router, Route, Routes, } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import HomeScreen from '../pages/HomeScreen';
import FilmScreen from '../pages/FilmScreen';
import MovieDetailScreen from '../pages/MovieDetailScreen';
import ActorScreen from '../pages/ActorScreen';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

const AppRoutes = () => {


  return (
    <Router>
      <Navbar />
      <AnimatePresence>
        <Routes >
          <Route path="/" element={<HomeScreen />} />
          <Route path="/movies/:id" element={<MovieDetailScreen />} />
          <Route path="/films" element={<FilmScreen />} />
          <Route path="/actor/:id" element={<ActorScreen />} />
        </Routes>
      </AnimatePresence>
      {/* <Footer /> */}
    </Router>
  );
};

export default AppRoutes;
