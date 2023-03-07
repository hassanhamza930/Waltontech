import React from 'react';
import { Routes, Route } from "react-router-dom";
import LandingPage from './pages/landingPage/landingPage';
import Header from './standards/header';

function App() {
  return (
    <>
      <Header></Header>
      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </>
  );
}

export default App;
