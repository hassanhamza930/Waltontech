import React from 'react';
import { Routes, Route, useNavigate } from "react-router-dom";
import LandingPage from './pages/landingPage/landingPage';
import Header from './standards/header';
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { AnimatePresence } from 'framer-motion';
import { motion } from "framer-motion";
import Stories from './pages/stories/stories';
import Pricing from './pages/pricing/pricing';

function App() {

  const [sideBarOpen, setsideBarOpen] = useState(false);
  const navigate = useNavigate();


  return (
    <>
      <div style={{ fontFamily: "IBM Plex Sans" }} className="md:hidden flex relative">
        <AnimatePresence>
          {
            sideBarOpen == true &&
            <motion.div
              initial={{ scale: 0, x: 100, y: -100 }}
              animate={{ scale: 3.5, x: 0, y: 0 }}
              exit={{ scale: 0 }}
              transition={{ duration: 0.5 }}
              className="fixed z-50 h-[500px] w-[500px] rounded-full text-tan bg-black/90">
            </motion.div>
          }
          {
            sideBarOpen == true &&
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8 }}
              className="fixed z-50 h-screen w-full text-tan bg-black/90 flex flex-col justify-start items-end pt-20 px-5 gap-4">
              <button onClick={() => {
                setsideBarOpen(false);
                navigate("/");
                setTimeout(() => {
                  var el = document.getElementById("whatwedo");
                  el?.scrollIntoView({ behavior: "smooth" });
                }, 1000);
              }} className="link-underline">What we do</button>
              <button className="link-underline" onClick={() => { navigate("/stories"); setsideBarOpen(false); }}>Stories</button>
              <button className="link-underline">Pricing</button>
              <button onClick={() => {
                setsideBarOpen(false);
                navigate("/");
                setTimeout(() => {
                  var el = document.getElementById("contact");
                  el?.scrollIntoView({ behavior: "smooth" })
                }, 1000);
              }} className="link-underline">Contact us</button>
            </motion.div>

          }
        </AnimatePresence>

      </div>
      <Header sideBarOpen={sideBarOpen} setSideBarOpen={setsideBarOpen} ></Header>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/stories" element={<Stories />} />
        <Route path="/pricing" element={<Pricing />} />
      </Routes>
    </>
  );
}

export default App;
