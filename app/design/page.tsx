"use client";


import { IBM_Plex_Sans } from "next/font/google";
import Header, { SideMenu } from "./components/header";
import { useState, useEffect } from "react";
import { AnimatePresence, useMotionValueEvent, useScroll } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { isBlackBackgroundAtom } from "./atoms";
import { useRecoilState } from "recoil";
import Hero from "./components/hero";
import Whatwedo from "./components/whatwedo";
import { Metadata } from "next";

const plex = IBM_Plex_Sans({
    subsets: ['latin'],
    display: 'swap',
    weight: ["100", "200", "300", '400', "500", "600", "700"]
});






function Design() {

    const [sideBarOpen, setsideBarOpen] = useState(false);
    const [isBlackBg, setisBlackBg] = useRecoilState(isBlackBackgroundAtom);
    

    return (
        <div style={{ fontFamily: plex.style.fontFamily }} className="h-full w-full bg-tan flex flex-col justify-start items-start">
            
            <Header setSideBarOpen={setsideBarOpen} sideBarOpen={sideBarOpen} />

            <AnimatePresence>
                {sideBarOpen && <SideMenu setSideBarOpen={setsideBarOpen} sideBarOpen={sideBarOpen} />}
            </AnimatePresence>

            <Hero/>
            <Whatwedo/>
            
            <div className="h-screen w-full bg-tan"></div>
            <div className="h-screen w-full bg-black flex justify-center items-center">
                <div className="h-24 w-24 rounded-md bg-tan"></div>
            </div>

        </div>
    );
}

export default Design;