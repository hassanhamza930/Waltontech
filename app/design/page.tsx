"use client";


import { IBM_Plex_Sans } from "next/font/google";
import Header, { SideMenu } from "./components/header";
import { useState } from "react";
import { AnimatePresence, useMotionValueEvent, useScroll } from "framer-motion";

const plex = IBM_Plex_Sans({
    subsets: ['latin'],
    display: 'swap',
    weight: ["100", "200", "300", '400', "500", "600", "700"]
});






function Design() {

    const [sideBarOpen, setsideBarOpen] = useState(false);
  

    return (
        <div style={{ fontFamily: plex.style.fontFamily }} className="h-full w-full bg-tan flex flex-col justify-start items-start">
            
            <Header setSideBarOpen={setsideBarOpen} sideBarOpen={sideBarOpen} />

            <AnimatePresence>
                {sideBarOpen && <SideMenu setSideBarOpen={setsideBarOpen} sideBarOpen={sideBarOpen} />}
            </AnimatePresence>

            <div className="h-screen w-full bg-tan"></div>
            <div className="h-screen w-full bg-black"></div>
            <div className="h-screen w-full bg-tan"></div>


        </div>
    );
}

export default Design;